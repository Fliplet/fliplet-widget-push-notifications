/**
 * Guards the send time the schedule step loads and saves when a scheduled notification
 * is copied or edited (src/components/NotificationForm.vue). See PS-2188.
 *
 * Runs the store's, the form's, the list's and the timepicker's own code, not a copy of it,
 * so undoing the fix in any of them or in src/libs fails here.
 *
 * The bundle patches Date.prototype get and set methods (src/libs/date.js) to read
 * with the viewer's offset captured at page load. The form must build the
 * datepicker date so that those patched getters return the stored calendar day.
 * Otherwise, saving an edit moves the notification to a different day.
 *
 * The patch depends on the viewer's timezone, so each viewer timezone runs in
 * its own child process. The child loads the real src/libs/date.js (with
 * `export` stripped, because the package is CommonJS) so that the patch captures
 * that timezone's offset.
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const v8 = require('v8');
const vm = require('vm');
const childProcess = require('child_process');

const VENDOR = path.join(__dirname, '..', 'vendor', 'moment-timezone-with-data-10-year-range.min.js');
const SRC = path.join(__dirname, '..', 'src');
const CHILD_FLAG = '--scheduled-date-child';

function noop() {}

// The lodash functions the code under test uses, with lodash's behaviour. lodash comes from
// the Fliplet CDN in the browser, and CI doesn't install it.
function createLodash() {
  const isObject = function(value) {
    return value !== null && typeof value === 'object';
  };

  // As in lodash, null and other values that aren't undefined are kept
  const defaultsDeep = function(target, ...sources) {
    sources.filter(isObject).forEach(function(source) {
      Object.keys(source).forEach(function(key) {
        if (!isObject(source[key])) {
          target[key] = target[key] === undefined ? source[key] : target[key];
        } else if (target[key] === undefined) {
          target[key] = defaultsDeep(Array.isArray(source[key]) ? [] : {}, source[key]);
        } else if (isObject(target[key])) {
          defaultsDeep(target[key], source[key]);
        }
      });
    });

    return target;
  };

  return {
    debounce: function(fn) {
      return fn;
    },
    get: function(object, keys, fallback) {
      const value = keys.split('.').reduce(function(current, key) {
        return current === undefined || current === null ? undefined : current[key];
      }, object);

      return value === undefined ? fallback : value;
    },
    set: function(object, keys, value) {
      const path = keys.split('.');
      const last = path.pop();
      const parent = path.reduce(function(current, key) {
        if (!isObject(current[key])) {
          current[key] = {};
        }

        return current[key];
      }, object);

      parent[last] = value;

      return object;
    },
    pick: function(object, keys) {
      return keys.reduce(function(result, key) {
        if (key in object) {
          result[key] = object[key];
        }

        return result;
      }, {});
    },
    find: function(list, match) {
      return list.find(typeof match === 'function' ? match : function(item) {
        return Object.keys(match).every(function(key) {
          return item[key] === match[key];
        });
      });
    },
    map: function(list, fn) {
      return list.map(fn);
    },
    forEach: function(list, fn) {
      list.forEach(fn);
    },
    orderBy: function(list, keys, orders) {
      return list.slice().sort(function(a, b) {
        return (a[keys[0]] - b[keys[0]]) * (orders[0] === 'desc' ? -1 : 1);
      });
    },
    clone: function(object) {
      return Object.assign({}, object);
    },
    extend: Object.assign,
    // As in lodash, a missing object becomes a new one
    assign: function(object, ...sources) {
      return Object.assign(Object(object), ...sources);
    },
    defaultsDeep: defaultsDeep,
    // As in lodash, undefined values don't replace existing ones, and objects and arrays are merged deeply
    merge: function merge(target, ...sources) {
      sources.filter(isObject).forEach(function(source) {
        Object.keys(source).forEach(function(key) {
          const value = source[key];

          if (value === undefined && key in target) {
            return;
          }

          if (!isObject(value)) {
            target[key] = value;
          } else {
            target[key] = merge(isObject(target[key]) ? target[key] : (Array.isArray(value) ? [] : {}), value);
          }
        });
      });

      return target;
    },
    remove: function(list, fn) {
      const removed = list.filter(fn);

      removed.forEach(function(item) {
        list.splice(list.indexOf(item), 1);
      });

      return removed;
    },
    isEmpty: function(value) {
      if (value === null || value === undefined) {
        return true;
      }

      return typeof value === 'object' && !Array.isArray(value) ? !Object.keys(value).length : !value.length;
    },
    includes: function(list, value) {
      return list.indexOf(value) > -1;
    },
    compact: function(list) {
      return list.filter(Boolean);
    },
    isArray: Array.isArray
  };
}

// Runs a file from src and returns what it exports (component options for a .vue file).
// Imports found in `modules` are real and must be exported there. Every other import is stubbed.
function loadSource(file, modules) {
  const filename = path.join(SRC, file);
  const isComponent = path.extname(file) === '.vue';
  const content = fs.readFileSync(filename, 'utf8');
  const source = isComponent ? content.match(/<script>([\s\S]*)<\/script>/)[1] : content;
  const names = Array.from(source.matchAll(/^export\s+(?:function|const)\s+(\w+)/gm), function(match) {
    return match[1];
  });
  const imports = {};

  const body = source.replace(/^import\s+([\s\S]*?)\s+from\s+'([^']+)';$/gm, function(match, specifiers, from) {
    const target = path.resolve(path.dirname(filename), from);
    const key = path.relative(SRC, target);

    if (from.startsWith('.') && !['', '.js', '.vue'].some(function(extension) {
      return fs.existsSync(target + extension);
    })) {
      throw new Error(from + ' imported by src/' + file + ' does not exist');
    }

    specifiers.replace(/[{}]/g, '').split(',').forEach(function(specifier) {
      const parts = specifier.trim().split(/\s+as\s+/);
      const local = parts[parts.length - 1];

      if (!modules[key]) {
        imports[local] = Object.assign(function() {
          return {};
        }, { $emit: noop, get: noop });

        return;
      }

      if (!modules[key][parts[0]]) {
        throw new Error(parts[0] + ' is not exported by src/' + key);
      }

      imports[local] = modules[key][parts[0]];
    });

    return '';
  }).replace(/^export default /m, 'return ').replace(/^export\s+/gm, '');

  return vm.runInThisContext(
    '(function(' + Object.keys(imports).join(', ') + ') {' + body
      + (isComponent ? '' : '\nreturn { ' + names.join(', ') + ' };') + '\n})',
    { filename: filename }
  )(...Object.values(imports));
}

// Loads the widget's code into this process. src/libs/date.js patches Date, as it does in the browser.
function loadWidget(moment) {
  global.moment = moment;
  global.location = { origin: '' };
  global._ = createLodash();
  global.Fliplet = {
    Notifications: { init: noop },
    Apps: { get: function() {
      return new Promise(noop);
    } },
    Env: { get: noop },
    Widget: { getData: noop }
  };

  const date = loadSource('libs/date.js', {});
  const timezones = loadSource('libs/timezones.js', {});
  const store = loadSource('store/index.js', { 'libs/date': date });
  const modules = { 'libs/date': date, 'libs/timezones': timezones, store: store };

  return {
    date: date,
    timezones: timezones,
    store: store,
    form: loadSource('components/NotificationForm.vue', modules),
    list: loadSource('components/NotificationList.vue', modules),
    timepicker: loadSource('components/Timepicker.vue', modules)
  };
}

// Opens the form with the notification in the store and returns the form state
function openForm(widget) {
  const form = widget.form;
  const state = Object.assign(form.data.call({ getMatches: noop }), {
    getAsset: noop,
    getMatches: noop,
    initializeProviders: noop
  });

  Object.keys(form.computed).forEach(function(name) {
    Object.defineProperty(state, name, {
      get: form.computed[name].get || form.computed[name],
      set: form.computed[name].set
    });
  });

  // Vue doesn't track properties that data() doesn't declare, so mounted() can't add any
  Object.seal(state);

  form.mounted.call(state);

  return state;
}

// Opens a notification from the list. The action is one of the list's methods.
function openNotification(widget, action, notification) {
  widget.list.methods[action].call({}, notification);

  return openForm(widget);
}

// Edits a notification that has the Later option saved
function openScheduled(widget, item) {
  const notification = { data: { _metadata: Object.assign({ schedule: 'scheduled' }, item.metadata) } };

  ['status', 'orderAt'].forEach(function(key) {
    if (key in item) {
      notification[key] = item[key];
    }
  });

  return openNotification(widget, 'editNotification', notification);
}

// Child mode: opens each notification in the form under the patch.
function runChild() {
  const moment = require(VENDOR);
  const input = v8.deserialize(fs.readFileSync(0));
  const widget = loadWidget(moment);
  const read = function(d) {
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getDate()).padStart(2, '0')
    ].join('-');
  };

  const save = function(state) {
    return state.scheduledAt;
  };

  const openEdited = function() {
    return openScheduled(widget, {
      metadata: { scheduledAt: input.edited.scheduledAt, scheduledAtTimezone: input.edited.timezone }
    });
  };

  // A date as the datepicker emits it: a new object, with any time of day
  const pickDate = function(day, hour, minute) {
    const date = widget.date.toCalendarDate(day[0], day[1], day[2]);

    date.setHours(hour);
    date.setMinutes(minute);

    return date;
  };

  const cases = input.cases.map(function(item) {
    const state = openScheduled(widget, {
      metadata: { scheduledAt: item.scheduledAt, scheduledAtTimezone: item.timezone }
    });

    return { read: read(state.scheduledAtDate), scheduledAt: save(state) };
  });

  // Errors are reported per notification so that a crash here doesn't hide the date results
  const saved = input.saved.map(function(item) {
    const before = moment().unix();

    try {
      return { scheduledAt: save(openScheduled(widget, item)), before: before, after: moment().unix() };
    } catch (error) {
      return { error: error.message };
    }
  });

  // Saved after changing the given fields, and again after changing them back
  const edits = input.edits.map(function(item) {
    const state = openEdited();
    const loaded = Object.assign({}, state);

    Object.assign(state, item.fields);

    if (item.day) {
      state.scheduledAtDate = pickDate(item.day, 0, 0);
    }

    const changed = save(state);

    Object.keys(item.fields || {}).forEach(function(key) {
      state[key] = loaded[key];
    });

    if (item.day) {
      state.scheduledAtDate = pickDate(input.edited.day, 0, 0);
    }

    return { changed: changed, changedBack: save(state) };
  });

  const repicked = input.repicked.map(function(time) {
    const state = openEdited();

    state.scheduledAtDate = pickDate(input.edited.day, time[0], time[1]);

    return save(state);
  });

  // The timepicker sets the hour on the form's own date object (src/components/Timepicker.vue)
  const mutated = openEdited();

  mutated.scheduledAtDate.setHours(12);
  repicked.push(save(mutated));

  // Opened from the list, with the status that the Send button saves. Errors are reported per notification.
  const opened = input.opened.map(function(item) {
    const before = v8.deserialize(v8.serialize(item.notification));

    try {
      const state = openNotification(widget, item.action, item.notification);
      const send = function() {
        let sentStatus;

        widget.form.methods.send.call({
          schedule: state.schedule,
          save: function(status) {
            sentStatus = status;
          }
        });

        return sentStatus;
      };

      const result = {
        schedule: state.schedule,
        timezone: state.scheduledAtTimezone,
        scheduledAt: state.scheduledAt,
        orderAt: state.orderAt,
        titleCharactersRemaining: state.titleCharactersRemaining,
        sentStatus: send()
      };

      // Clicking Now in the form
      state.schedule = 'now';

      return Object.assign(result, {
        sentStatusAfterNow: send(),
        mutated: !util.isDeepStrictEqual(before, item.notification)
      });
    } catch (error) {
      return { error: error.message };
    }
  });

  const createdState = openNotification(widget, 'createNotification');
  const created = {
    schedule: createdState.schedule,
    isDefault: util.isDeepStrictEqual(createdState.notification, widget.store.getDefaultNotification())
  };

  const offsets = input.offsets.map(function(item) {
    const date = new Date(item.unix * 1000);
    const momentDate = moment.unix(item.unix);

    return {
      form: openScheduled(widget, {
        metadata: { scheduledAt: item.unix, scheduledAtTimezone: item.timezone }
      }).notificationTimezone,
      fromDate: widget.timezones.getOffsetString(item.timezone, date),
      fromMoment: widget.timezones.getOffsetString(item.timezone, momentDate),
      dateAfter: date.getTime() / 1000,
      momentAfter: momentDate.unix()
    };
  });

  const otherOffsets = {
    unknownZone: widget.timezones.getOffset('Not/AZone', new Date()),
    noDate: widget.timezones.getOffset('Asia/Tokyo'),
    notADate: widget.timezones.getOffset('Asia/Tokyo', '2027-07-15')
  };

  const listDates = input.listRows.map(function(item) {
    return widget.list.methods.getNotificationDate.call(
      Object.assign({ showTimezone: true }, widget.list.methods),
      item.notification
    );
  });

  // As opened by the form (midnight), and as picked in the datepicker (any time)
  const timepicker = [[0, 0], [12, 0], [23, 59]].map(function(time) {
    return input.labelDays.map(function(day) {
      const date = pickDate(day, time[0], time[1]);
      const options = widget.timepicker.computed.adjustedTimezones.call({
        timezones: widget.timezones.timezones,
        date: date
      });

      return {
        day: read(date),
        hour: date.getHours(),
        labels: options.map(function(option) {
          return [option.value, option.label.slice(0, '(GMT+00:00)'.length)];
        })
      };
    });
  });

  // Pretend "now" is Jan 31 so a naive setMonth(1) would overflow into March.
  const NativeDate = Date;

  class Jan31Date extends NativeDate {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(2027, 0, 31, 12, 0, 0);
      }
    }
  }

  global.Date = Jan31Date;

  const overflow = input.overflow.map(function(item) {
    return read(widget.date.toCalendarDate(item[0], item[1], item[2]));
  });

  global.Date = NativeDate;

  // Opened from the list, the message edited and sent with the form's own send() and save().
  // Returns what the form sends to the API. Errors are reported per notification.
  const sendEdited = function(item) {
    const before = v8.deserialize(v8.serialize(item.notification));

    return new Promise(function(resolve) {
      let timer;
      const done = function(result) {
        clearTimeout(timer);
        resolve(Object.assign(result, { mutated: !util.isDeepStrictEqual(before, item.notification) }));
      };

      timer = setTimeout(function() {
        done({ error: 'the notification was not saved' });
      }, 2000);

      global.Fliplet.Modal = { alert: function(options) {
        done({ error: options.message });
      } };
      global.Fliplet.parseError = function(error) {
        return error && error.message;
      };

      try {
        const state = openNotification(widget, item.action, item.notification);
        const capture = function(method) {
          return function(id, payload) {
            payload = method === 'insert' ? id : payload;

            done({
              schedule: state.schedule,
              method: method,
              status: payload.status,
              hasOrderAt: 'orderAt' in payload,
              orderAt: payload.orderAt,
              message: payload.data.message,
              sentSchedule: payload.data._metadata.schedule
            });

            // Not answering keeps the success alert out of the test
            return new Promise(noop);
          };
        };
        const form = Object.assign(Object.create(state), widget.form.methods, {
          initializeProviders: noop,
          getMatches: noop,
          instance: { insert: capture('insert'), update: capture('update') }
        });

        // On the review step, where the Send button is
        form.step = form.steps.length - 1;
        form.notification.data.message = 'Edited message';
        form.send();
      } catch (error) {
        done({ error: error.message });
      }
    });
  };

  input.sent.reduce(function(chain, item) {
    return chain.then(function(results) {
      return sendEdited(item).then(function(result) {
        return results.concat([result]);
      });
    });
  }, Promise.resolve([])).then(function(sent) {
    process.stdout.write(JSON.stringify({
      cases: cases,
      saved: saved,
      edits: edits,
      repicked: repicked,
      overflow: overflow,
      opened: opened,
      sent: sent,
      created: created,
      offsets: offsets,
      otherOffsets: otherOffsets,
      listDates: listDates,
      timepicker: timepicker
    }));
  });
}

if (process.argv.includes(CHILD_FLAG)) {
  runChild();
} else {
  defineTests();
}

function defineTests() {
  const test = require('node:test');
  const assert = require('node:assert');
  const moment = require(VENDOR);

  const VIEWER_TIMEZONES = [
    'America/Los_Angeles',
    'America/New_York',
    'America/Sao_Paulo',
    'UTC',
    'Europe/London',
    'Europe/Kiev',
    'Asia/Tokyo',
    'Australia/Sydney'
  ];

  // Stored timezones are values from the picker, because any other is replaced when the form opens
  const STORED_TIMEZONES = ['US/Central', 'Australia/Canberra'];

  // Covers both DST states for the stored and viewer zones, a late-evening time and a year boundary.
  const TARGETS = ['2026-12-10 09:30', '2027-04-10 09:30', '2027-07-15 23:30', '2027-01-01 00:15'];

  // [year, zero-based month, day] built while "now" is Jan 31
  const OVERFLOW = [[2027, 1, 28], [2028, 1, 29], [2027, 3, 30]];

  // Values of data._metadata.scheduledAt that aren't a usable send time
  const UNUSABLE = [undefined, null, 0, '', 'invalid', '0', '-1800000000', -1800000000, []];

  const now = moment();
  const FUTURE = now.clone().add(30, 'days').seconds(37).milliseconds(0);
  const YESTERDAY = now.clone().subtract(1, 'day').milliseconds(0);

  // Notifications without a usable scheduledAt. Each is saved with every UNUSABLE value.
  const FALLBACKS = [
    { name: 'scheduled, future orderAt', status: 'scheduled', orderAt: FUTURE.toISOString(), expected: FUTURE.unix() },
    { name: 'scheduled, past orderAt', status: 'scheduled', orderAt: YESTERDAY.toISOString() },
    { name: 'scheduled, no orderAt', status: 'scheduled' },
    { name: 'scheduled, null orderAt', status: 'scheduled', orderAt: null },
    { name: 'scheduled, invalid orderAt', status: 'scheduled', orderAt: 'invalid' },
    { name: 'draft, past orderAt', status: 'draft', orderAt: YESTERDAY.toISOString() },
    { name: 'draft, future orderAt', status: 'draft', orderAt: FUTURE.toISOString() },
    { name: 'draft, no orderAt', status: 'draft' },
    { name: 'published, past orderAt', status: 'published', orderAt: YESTERDAY.toISOString() },
    { name: 'published, future orderAt', status: 'published', orderAt: FUTURE.toISOString() },
    { name: 'no status, no orderAt' },
    { name: 'no status, future orderAt', orderAt: FUTURE.toISOString() }
  ];

  // Usable scheduledAt values. The saved value must be a whole number, because the API
  // parses a string orderAt as a date. orderAt is in the past, so it must not be used for these.
  const STORED = moment.tz('2027-07-15 23:30:37', 'YYYY-MM-DD HH:mm:ss', 'US/Central').unix();
  const PAST = moment.tz('2026-01-15 09:30', 'YYYY-MM-DD HH:mm', 'US/Central').unix();

  const USABLE = [
    { name: 'a time with seconds', scheduledAt: STORED, expected: STORED },
    { name: 'a numeric string', scheduledAt: String(STORED), expected: STORED },
    { name: 'a fraction of a second', scheduledAt: STORED + 0.5, expected: STORED },
    { name: 'a time in the past', scheduledAt: PAST, expected: PAST }
  ];

  const usable = USABLE.map(function(item) {
    return Object.assign({
      status: 'scheduled',
      orderAt: YESTERDAY.toISOString(),
      metadata: { scheduledAt: item.scheduledAt, scheduledAtTimezone: 'US/Central' }
    }, item);
  });

  // Both times are usable. Rescheduling through the API changes only orderAt.
  const BEFORE_FUTURE = FUTURE.clone().subtract(1, 'day');
  const AFTER_FUTURE = FUTURE.clone().add(1, 'day');

  const CONFLICTS = [
    { status: 'scheduled', scheduledAt: PAST, orderAt: FUTURE, expected: FUTURE.unix() },
    { status: 'scheduled', scheduledAt: BEFORE_FUTURE.unix(), orderAt: FUTURE, expected: FUTURE.unix() },
    { status: 'scheduled', scheduledAt: AFTER_FUTURE.unix(), orderAt: FUTURE, expected: FUTURE.unix() },
    { status: 'scheduled', scheduledAt: STORED, orderAt: YESTERDAY, expected: STORED },
    { status: 'draft', scheduledAt: STORED, orderAt: FUTURE, expected: STORED },
    { status: 'published', scheduledAt: STORED, orderAt: FUTURE, expected: STORED }
  ];

  const conflicts = CONFLICTS.map(function(item) {
    return {
      name: item.status + ', scheduledAt ' + item.scheduledAt + ', orderAt ' + item.orderAt.unix(),
      status: item.status,
      orderAt: item.orderAt.toISOString(),
      metadata: { scheduledAt: item.scheduledAt, scheduledAtTimezone: 'US/Central' },
      expected: item.expected
    };
  });

  const withMetadata = function(metadata) {
    return { title: 'Title', message: 'Message', _metadata: metadata };
  };

  // Data without a 'now' or 'scheduled' schedule, e.g. from the JS API
  const UNFLAGGED = [
    { name: 'no _metadata', data: { title: 'Title', message: 'Message' } },
    { name: '_metadata null', data: withMetadata(null) },
    { name: '_metadata {}', data: withMetadata({}) },
    { name: 'data missing' },
    { name: 'data null', data: null }
  ].concat([undefined, null, '', 'later', 1, true, {}].map(function(schedule) {
    return { name: 'schedule ' + JSON.stringify(schedule), data: withMetadata({ schedule: schedule }) };
  }));

  const LATER = { status: 'scheduled', orderAt: FUTURE.toISOString() };

  const NOT_LATER = [
    { status: 'scheduled', orderAt: YESTERDAY.toISOString() },
    { status: 'scheduled' },
    { status: 'scheduled', orderAt: null },
    { status: 'scheduled', orderAt: 'invalid' },
    { status: 'draft', orderAt: FUTURE.toISOString() },
    { status: 'published', orderAt: FUTURE.toISOString() },
    { orderAt: FUTURE.toISOString() }
  ];

  const opened = [];

  const addOpened = function(name, fields, data, schedule) {
    ['editNotification', 'cloneNotification'].forEach(function(action) {
      const notification = Object.assign({ id: 1, type: 'in-app', scope: {} }, fields);

      if (data !== undefined) {
        notification.data = data;
      }

      opened.push({
        name: [action, name, JSON.stringify(fields)].join(', '),
        action: action,
        notification: notification,
        schedule: schedule
      });
    });
  };

  UNFLAGGED.forEach(function(item) {
    addOpened(item.name, LATER, item.data, 'scheduled');

    // The list and the form can't show these
    if (item.data === null) {
      return;
    }

    NOT_LATER.forEach(function(fields) {
      addOpened(item.name, fields, item.data, 'now');
    });
  });

  // A stored 'now' stays Now even with a future orderAt: while a Later notification switched to
  // Now waits for its throttled send, the API keeps status 'scheduled' and the old orderAt.
  [LATER].concat(NOT_LATER).forEach(function(fields) {
    ['now', 'scheduled'].forEach(function(schedule) {
      addOpened('schedule ' + schedule, fields, withMetadata({ schedule: schedule }), schedule);
    });
  });

  // Text-only edits sent from the form. A throttled Later notification switched to Now
  // (status 'scheduled', future orderAt, schedule 'now') must be sent now without an orderAt,
  // because the API would reschedule it to orderAt. One without a schedule keeps its orderAt.
  const sent = [];

  [
    { schedule: 'now', status: 'published' },
    { schedule: undefined, status: 'scheduled' }
  ].forEach(function(item) {
    [['editNotification', 'update'], ['cloneNotification', 'insert']].forEach(function(action) {
      sent.push({
        name: action[0] + ', schedule ' + item.schedule + ', status scheduled, future orderAt',
        action: action[0],
        notification: {
          id: 1,
          type: 'in-app',
          scope: {},
          status: 'scheduled',
          orderAt: FUTURE.toISOString(),
          data: withMetadata({ schedule: item.schedule, scheduledAt: FUTURE.unix(), scheduledAtTimezone: 'US/Central' })
        },
        expected: {
          schedule: item.status === 'published' ? 'now' : 'scheduled',
          method: action[1],
          status: item.status,
          hasOrderAt: item.status === 'scheduled',
          message: 'Edited message',
          sentSchedule: item.status === 'published' ? 'now' : 'scheduled',
          mutated: false
        }
      });

      if (item.status === 'scheduled') {
        sent[sent.length - 1].expected.orderAt = FUTURE.unix();
      }
    });
  });

  // Instants around clock changes. All of these timezones are in the picker.
  const OFFSETS = [
    ['Europe/London', '2027-10-31T00:30:00Z', '01:30 GMT+01:00'],
    ['Europe/London', '2027-10-31T01:30:00Z', '01:30 GMT+00:00'],
    ['Europe/London', '2027-03-28T00:30:00Z', '00:30 GMT+00:00'],
    ['Europe/London', '2027-03-28T01:30:00Z', '02:30 GMT+01:00'],
    ['Europe/London', '2027-03-27T20:00:00Z', '20:00 GMT+00:00'],
    ['US/Eastern', '2027-11-07T04:30:00Z', '00:30 GMT-04:00'],
    ['US/Eastern', '2027-11-07T05:30:00Z', '01:30 GMT-04:00'],
    ['US/Eastern', '2027-11-07T06:30:00Z', '01:30 GMT-05:00'],
    ['US/Eastern', '2027-03-14T03:00:00Z', '22:00 GMT-05:00'],
    ['Europe/London', '2027-07-15T08:30:00Z', '09:30 GMT+01:00'],
    ['Europe/London', '2027-01-15T09:30:00Z', '09:30 GMT+00:00'],
    ['Asia/Calcutta', '2027-07-15T04:00:00Z', '09:30 GMT+05:30']
  ].map(function(item) {
    assert.strictEqual(moment.tz(item[1], item[0]).format('HH:mm [GMT]Z'), item[2]);

    return { timezone: item[0], unix: moment.utc(item[1]).unix(), expected: item[2].slice('00:00 '.length) };
  });

  // The date and the offset are shown in the same timezone, which is London if there isn't one
  const listRows = OFFSETS.map(function(item) {
    return { timezone: item.timezone, unix: item.unix };
  }).concat(['2027-07-15T08:30:00Z', '2027-01-15T09:30:00Z'].map(function(utc) {
    return { unix: moment.utc(utc).unix() };
  })).map(function(item) {
    const orderAt = moment.unix(item.unix).toISOString();
    const metadata = item.timezone ? { _metadata: { scheduledAtTimezone: item.timezone } } : {};

    return {
      notification: { orderAt: orderAt, data: metadata },
      expected: moment.tz(orderAt, item.timezone || 'Europe/London').format('MMM D YYYY, h:mm A [GMT]Z')
    };
  });

  // Days without a clock change in any timezone, in each half of the year
  const LABEL_DAYS = [[2027, 0, 15], [2027, 6, 15]];

  const fallbacks = [];

  FALLBACKS.forEach(function(item) {
    UNUSABLE.forEach(function(scheduledAt) {
      fallbacks.push(Object.assign({}, item, {
        name: 'scheduledAt ' + JSON.stringify(scheduledAt) + ', ' + item.name,
        metadata: { scheduledAt: scheduledAt, scheduledAtTimezone: 'Asia/Tokyo' }
      }));
    });
  });

  // Edits to a notification stored for 15 July 2027 23:30:37 in Chicago
  const EDITED = { scheduledAt: STORED, timezone: 'US/Central', day: [2027, 6, 15] };

  const EDITS = [
    { name: 'hour', fields: { scheduledAtHour: 22 }, expected: ['2027-07-15 22:30', 'US/Central'] },
    { name: 'minute', fields: { scheduledAtMinute: 31 }, expected: ['2027-07-15 23:31', 'US/Central'] },
    { name: 'timezone', fields: { scheduledAtTimezone: 'Asia/Tokyo' }, expected: ['2027-07-15 23:30', 'Asia/Tokyo'] },
    { name: 'day', day: [2027, 6, 16], expected: ['2027-07-16 23:30', 'US/Central'] },
    { name: 'month', day: [2027, 7, 15], expected: ['2027-08-15 23:30', 'US/Central'] },
    { name: 'year', day: [2028, 6, 15], expected: ['2028-07-15 23:30', 'US/Central'] }
  ];

  // [hour, minute] of a new date object for the same day
  const REPICKED = [[0, 0], [15, 45], [23, 59]];

  // 01:30 happens twice on these days. Both times must be kept.
  const REPEATED_HOURS = [
    { timezone: 'Europe/London', target: '2027-10-31 01:30', utc: ['2027-10-31T00:30:00Z', '2027-10-31T01:30:00Z'] },
    { timezone: 'US/Central', target: '2027-11-07 01:30', utc: ['2027-11-07T06:30:00Z', '2027-11-07T07:30:00Z'] }
  ];

  const cases = [];

  STORED_TIMEZONES.forEach(function(timezone) {
    TARGETS.forEach(function(target) {
      const stored = moment.tz(target, 'YYYY-MM-DD HH:mm', timezone);

      cases.push({
        timezone: timezone,
        target: target,
        scheduledAt: stored.unix(),
        day: stored.format('YYYY-MM-DD')
      });
    });
  });

  REPEATED_HOURS.forEach(function(item) {
    item.utc.forEach(function(utc) {
      const stored = moment.tz(utc, item.timezone);

      assert.strictEqual(stored.format('YYYY-MM-DD HH:mm'), item.target);

      cases.push({
        timezone: item.timezone,
        target: utc,
        scheduledAt: stored.unix(),
        day: stored.format('YYYY-MM-DD')
      });
    });
  });

  const results = {};

  function runInTimezone(timezone) {
    if (results[timezone]) {
      return results[timezone];
    }

    const env = Object.assign({}, process.env, { TZ: timezone });

    // Keep the child out of the test runner's reporting protocol
    delete env.NODE_TEST_CONTEXT;

    const output = childProcess.execFileSync(process.execPath, [__filename, CHILD_FLAG], {
      env: env,
      input: v8.serialize({
        cases: cases,
        saved: fallbacks.concat(usable, conflicts),
        edited: EDITED,
        edits: EDITS,
        repicked: REPICKED,
        overflow: OVERFLOW,
        opened: opened,
        sent: sent,
        offsets: OFFSETS,
        listRows: listRows,
        labelDays: LABEL_DAYS
      }),
      encoding: 'utf8'
    });

    results[timezone] = JSON.parse(output);

    return results[timezone];
  }

  VIEWER_TIMEZONES.forEach(function(viewerTimezone) {
    test('scheduled date survives copy/edit for a viewer in ' + viewerTimezone, function(t) {
      const result = runInTimezone(viewerTimezone);

      cases.forEach(function(item, index) {
        const label = item.target + ' ' + item.timezone + ' viewed from ' + viewerTimezone;

        assert.strictEqual(result.cases[index].read, item.day,
          'datepicker date shows the stored day for ' + label);
        assert.strictEqual(result.cases[index].scheduledAt, item.scheduledAt,
          'saving unchanged keeps the original timestamp for ' + label);
      });

      t.diagnostic('checked ' + cases.length + ' stored dates');
    });

    test('a missing send time keeps the orderAt of a scheduled notification, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      fallbacks.forEach(function(item, index) {
        const actual = result.saved[index];

        if (!item.expected) {
          return;
        }

        assert.strictEqual(actual.error, undefined, 'form opens for ' + item.name);
        assert.strictEqual(actual.scheduledAt, item.expected, 'send time is orderAt for ' + item.name);
      });
    });

    test('a missing send time defaults to two hours ahead for a viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      fallbacks.forEach(function(item, index) {
        const actual = result.saved[index];

        if (item.expected) {
          return;
        }

        assert.strictEqual(actual.error, undefined, 'form opens for ' + item.name);

        // Seconds are dropped because the form only holds hours and minutes
        assert.ok(actual.scheduledAt > actual.before + 2 * 3600 - 60,
          'send time is not earlier than two hours ahead for ' + item.name);
        assert.ok(actual.scheduledAt <= actual.after + 2 * 3600,
          'send time is not later than two hours ahead for ' + item.name);
      });
    });

    test('a usable send time is saved as the same whole number, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      usable.forEach(function(item, index) {
        const actual = result.saved[fallbacks.length + index];

        assert.strictEqual(actual.error, undefined, 'form opens for ' + item.name);
        assert.strictEqual(actual.scheduledAt, item.expected, 'send time is kept for ' + item.name);
      });
    });

    test('a future orderAt of a scheduled notification comes before scheduledAt, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      conflicts.forEach(function(item, index) {
        const actual = result.saved[fallbacks.length + usable.length + index];

        assert.strictEqual(actual.error, undefined, 'form opens for ' + item.name);
        assert.strictEqual(actual.scheduledAt, item.expected, 'send time for ' + item.name);
      });
    });

    test('a scheduled notification with a future orderAt opens in Later unless Now is stored, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      opened.forEach(function(item, index) {
        const actual = result.opened[index];

        assert.strictEqual(actual.error, undefined, 'form opens for ' + item.name);
        assert.strictEqual(actual.mutated, false, 'list row is unchanged for ' + item.name);
        assert.strictEqual(actual.schedule, item.schedule, 'schedule for ' + item.name);
        assert.strictEqual(actual.sentStatus, item.schedule === 'scheduled' ? 'scheduled' : 'published',
          'status on send for ' + item.name);
        assert.strictEqual(actual.sentStatusAfterNow, 'published', 'status on send after choosing Now for ' + item.name);
        assert.strictEqual(typeof actual.titleCharactersRemaining, 'number', 'title is shown for ' + item.name);

        if (item.schedule === 'scheduled') {
          assert.strictEqual(actual.timezone, 'Europe/London', 'default timezone for ' + item.name);
        }

        if (item.schedule === 'scheduled' && item.notification.status === 'scheduled'
          && item.notification.orderAt === LATER.orderAt) {
          assert.strictEqual(actual.scheduledAt, FUTURE.unix(), 'scheduledAt is orderAt for ' + item.name);
          assert.strictEqual(actual.orderAt, FUTURE.unix(), 'orderAt is kept for ' + item.name);
        }
      });

      assert.deepStrictEqual(result.created, { schedule: 'now', isDefault: true });
    });

    test('a text-only edit of a throttled Now send is sent now without its orderAt, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.strictEqual(result.sent.length, sent.length);

      sent.forEach(function(item, index) {
        assert.deepStrictEqual(result.sent[index], item.expected, item.name);
      });
    });

    test('timezone offsets are exact around clock changes, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      OFFSETS.forEach(function(item, index) {
        assert.deepStrictEqual(result.offsets[index], {
          form: item.expected,
          fromDate: item.expected,
          fromMoment: item.expected,
          dateAfter: item.unix,
          momentAfter: item.unix
        }, item.timezone + ' at ' + moment.unix(item.unix).toISOString());
      });

      assert.deepStrictEqual(result.otherOffsets, { unknownZone: 0, noDate: -540, notADate: -540 });
    });

    test('the list shows the date and offset in the same timezone, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.deepStrictEqual(result.listDates, listRows.map(function(item) {
        return item.expected;
      }));
    });

    test('the timepicker sets the date to noon and labels its timezones, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      result.timepicker.forEach(function(days) {
        days.forEach(function(actual, index) {
          const day = moment.utc(LABEL_DAYS[index]).format('YYYY-MM-DD');

          assert.strictEqual(actual.day, day, 'the calendar day is kept');
          assert.strictEqual(actual.hour, 12, 'the date is at noon');
          assert.ok(actual.labels.length > 70, 'all timezones are listed');

          actual.labels.forEach(function(label) {
            assert.strictEqual(label[1], '(GMT' + moment.tz(day + ' 12:00', label[0]).format('Z') + ')',
              label[0] + ' on ' + day);
          });
        });
      });
    });

    test('changing a field recalculates the send time, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      EDITS.forEach(function(item, index) {
        const expected = moment.tz(item.expected[0], 'YYYY-MM-DD HH:mm', item.expected[1]).unix();

        assert.strictEqual(result.edits[index].changed, expected, 'changing only the ' + item.name);
        assert.strictEqual(result.edits[index].changedBack, STORED, 'changing the ' + item.name + ' back');
      });
    });

    test('picking the same day again keeps the send time, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.deepStrictEqual(result.repicked, [STORED, STORED, STORED, STORED]);
    });

    test('scheduled date does not overflow the month when today is the 31st, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.deepStrictEqual(result.overflow, ['2027-02-28', '2028-02-29', '2027-04-30']);
    });
  });
}
