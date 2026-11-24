/**
 * Guards the send time the schedule step loads and saves when a scheduled notification
 * is copied or edited (src/components/NotificationForm.vue). See PS-2188.
 *
 * Runs the form's own mounted() and scheduledAt, not a copy of them, so undoing
 * the fix in the component or in src/libs/date.js fails here.
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
const vm = require('vm');
const childProcess = require('child_process');

const VENDOR = path.join(__dirname, '..', 'vendor', 'moment-timezone-with-data-10-year-range.min.js');
const DATE_LIB = path.join(__dirname, '..', 'src', 'libs', 'date.js');
const FORM = path.join(__dirname, '..', 'src', 'components', 'NotificationForm.vue');
const CHILD_FLAG = '--scheduled-date-child';

// Applies src/libs/date.js to this process, as the bundle does in the browser, and
// returns only what it exports.
function loadDateLib() {
  const source = fs.readFileSync(DATE_LIB, 'utf8');
  const names = Array.from(source.matchAll(/^export\s+function\s+(\w+)/gm), function(match) {
    return match[1];
  });

  return vm.runInThisContext(
    '(function() {' + source.replace(/^export\s+/gm, '') + '\nreturn { ' + names.join(', ') + ' };\n})()',
    { filename: DATE_LIB }
  );
}

// Evaluates the form's <script> and returns the component options. Imports from
// src/libs/date.js are real and must be exported there. Every other import is stubbed.
function loadForm(dateLib) {
  const script = fs.readFileSync(FORM, 'utf8').match(/<script>([\s\S]*)<\/script>/)[1];
  const importPattern = /^import\s+([\s\S]*?)\s+from\s+'([^']+)';$/gm;

  for (const match of script.matchAll(importPattern)) {
    match[1].replace(/[{}]/g, '').split(',').forEach(function(specifier) {
      const names = specifier.trim().split(/\s+as\s+/);
      const local = names[names.length - 1];

      if (match[2] !== '../libs/date') {
        global[local] = function() {
          return {};
        };

        return;
      }

      if (!dateLib[names[0]]) {
        throw new Error(names[0] + ' is not exported by src/libs/date.js');
      }

      global[local] = dateLib[names[0]];
    });
  }

  global.validateTimezone = function(name) {
    return name;
  };

  global._ = {
    debounce: function(fn) {
      return fn;
    },
    get: function(object, keys, fallback) {
      const value = keys.split('.').reduce(function(current, key) {
        return current === undefined || current === null ? undefined : current[key];
      }, object);

      return value === undefined ? fallback : value;
    },
    defaultsDeep: function(object) {
      return object;
    },
    isArray: Array.isArray
  };

  global.Fliplet = {
    Notifications: { init: function() {} },
    Apps: { get: function() {
      return new Promise(function() {});
    } },
    Env: { get: function() {} },
    Widget: { getData: function() {} }
  };

  vm.runInThisContext(
    script.replace(importPattern, '').replace('export default {', 'var NotificationForm = {'),
    { filename: FORM }
  );

  return global.NotificationForm;
}

// Opens a notification in the form, as copy and edit do, and returns the form state.
function openInForm(form, item) {
  const noop = function() {};
  const notification = { data: { _metadata: item.metadata } };

  ['status', 'orderAt'].forEach(function(key) {
    if (key in item) {
      notification[key] = item[key];
    }
  });

  const state = Object.assign(form.data.call({ getMatches: noop }), {
    schedule: 'scheduled',
    notification: notification,
    getAsset: noop,
    getMatches: noop,
    initializeProviders: noop
  });

  // Vue doesn't track properties that data() doesn't declare, so mounted() can't add any
  Object.seal(state);

  form.mounted.call(state);

  return state;
}

// Child mode: opens each notification in the form under the patch.
function runChild() {
  const moment = require(VENDOR);
  const input = JSON.parse(fs.readFileSync(0, 'utf8'));

  global.moment = moment;

  const dateLib = loadDateLib();
  const form = loadForm(dateLib);
  const read = function(d) {
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getDate()).padStart(2, '0')
    ].join('-');
  };

  const save = function(state) {
    return form.computed.scheduledAt.call(state);
  };

  const openEdited = function() {
    return openInForm(form, {
      metadata: { scheduledAt: input.edited.scheduledAt, scheduledAtTimezone: input.edited.timezone }
    });
  };

  // A date as the datepicker emits it: a new object, with any time of day
  const pickDate = function(day, hour, minute) {
    const date = dateLib.toCalendarDate(day[0], day[1], day[2]);

    date.setHours(hour);
    date.setMinutes(minute);

    return date;
  };

  const cases = input.cases.map(function(item) {
    const state = openInForm(form, {
      metadata: { scheduledAt: item.scheduledAt, scheduledAtTimezone: item.timezone }
    });

    return { read: read(state.scheduledAtDate), scheduledAt: save(state) };
  });

  // Errors are reported per notification so that a crash here doesn't hide the date results
  const saved = input.saved.map(function(item) {
    const before = moment().unix();

    try {
      return { scheduledAt: save(openInForm(form, item)), before: before, after: moment().unix() };
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

  // The timepicker sets the hour on the form's own date object (src/libs/timezones.js)
  const mutated = openEdited();

  mutated.scheduledAtDate.setHours(12);
  repicked.push(save(mutated));

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
    return read(dateLib.toCalendarDate(item[0], item[1], item[2]));
  });

  global.Date = NativeDate;

  process.stdout.write(JSON.stringify({
    cases: cases,
    saved: saved,
    edits: edits,
    repicked: repicked,
    overflow: overflow
  }));
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

  const STORED_TIMEZONES = ['America/Chicago', 'Australia/Sydney'];

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
  // parses a string orderAt as a date. orderAt must not be used for these.
  const STORED = moment.tz('2027-07-15 23:30:37', 'YYYY-MM-DD HH:mm:ss', 'America/Chicago').unix();
  const PAST = moment.tz('2026-01-15 09:30', 'YYYY-MM-DD HH:mm', 'America/Chicago').unix();

  const USABLE = [
    { name: 'a time with seconds', scheduledAt: STORED, expected: STORED },
    { name: 'a numeric string', scheduledAt: String(STORED), expected: STORED },
    { name: 'a fraction of a second', scheduledAt: STORED + 0.5, expected: STORED },
    { name: 'a time in the past', scheduledAt: PAST, expected: PAST }
  ];

  const usable = USABLE.map(function(item) {
    return Object.assign({
      status: 'scheduled',
      orderAt: FUTURE.toISOString(),
      metadata: { scheduledAt: item.scheduledAt, scheduledAtTimezone: 'America/Chicago' }
    }, item);
  });

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
  const EDITED = { scheduledAt: STORED, timezone: 'America/Chicago', day: [2027, 6, 15] };

  const EDITS = [
    { name: 'hour', fields: { scheduledAtHour: 22 }, expected: ['2027-07-15 22:30', 'America/Chicago'] },
    { name: 'minute', fields: { scheduledAtMinute: 31 }, expected: ['2027-07-15 23:31', 'America/Chicago'] },
    { name: 'timezone', fields: { scheduledAtTimezone: 'Asia/Tokyo' }, expected: ['2027-07-15 23:30', 'Asia/Tokyo'] },
    { name: 'day', day: [2027, 6, 16], expected: ['2027-07-16 23:30', 'America/Chicago'] },
    { name: 'month', day: [2027, 7, 15], expected: ['2027-08-15 23:30', 'America/Chicago'] },
    { name: 'year', day: [2028, 6, 15], expected: ['2028-07-15 23:30', 'America/Chicago'] }
  ];

  // [hour, minute] of a new date object for the same day
  const REPICKED = [[0, 0], [15, 45], [23, 59]];

  // 01:30 happens twice on these days. Both times must be kept.
  const REPEATED_HOURS = [
    { timezone: 'Europe/London', target: '2027-10-31 01:30', utc: ['2027-10-31T00:30:00Z', '2027-10-31T01:30:00Z'] },
    { timezone: 'America/Chicago', target: '2027-11-07 01:30', utc: ['2027-11-07T06:30:00Z', '2027-11-07T07:30:00Z'] }
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
      input: JSON.stringify({
        cases: cases,
        saved: fallbacks.concat(usable),
        edited: EDITED,
        edits: EDITS,
        repicked: REPICKED,
        overflow: OVERFLOW
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
