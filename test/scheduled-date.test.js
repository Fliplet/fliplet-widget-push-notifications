/**
 * Guards the date the schedule step loads when a scheduled notification is
 * copied or edited (src/components/NotificationForm.vue). See PS-2188.
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
    } }
  };

  vm.runInThisContext(
    script.replace(importPattern, '').replace('export default {', 'var NotificationForm = {'),
    { filename: FORM }
  );

  return global.NotificationForm;
}

// Opens a notification in the form, as copy and edit do, and returns the form state.
function openInForm(form, metadata) {
  const noop = function() {};
  const state = {
    schedule: 'scheduled',
    notification: { data: { _metadata: metadata } },
    getAsset: noop,
    getMatches: noop,
    initializeProviders: noop
  };

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

  const cases = input.cases.map(function(item) {
    const state = openInForm(form, {
      scheduledAt: item.scheduledAt,
      scheduledAtTimezone: item.timezone
    });

    return {
      read: read(state.scheduledAtDate),
      scheduledAt: form.computed.scheduledAt.call(state)
    };
  });

  // Scheduled, but with no usable send time stored. Errors are reported per value so
  // that a crash here doesn't hide the date results.
  const missing = input.missing.map(function(item) {
    const metadata = Object.assign({ scheduledAtTimezone: 'Asia/Tokyo' }, item);
    const before = moment().unix();

    try {
      const scheduledAt = form.computed.scheduledAt.call(openInForm(form, metadata));

      return { scheduledAt: scheduledAt, before: before, after: moment().unix() };
    } catch (error) {
      return { error: error.message };
    }
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
    return read(dateLib.toCalendarDate(item[0], item[1], item[2]));
  });

  global.Date = NativeDate;

  process.stdout.write(JSON.stringify({ cases: cases, overflow: overflow, missing: missing }));
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

  // Stored metadata with no usable send time
  const MISSING = [{}, { scheduledAt: null }, { scheduledAt: 0 }, { scheduledAt: '' }, { scheduledAt: 'invalid' }];

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

  function runInTimezone(timezone) {
    const env = Object.assign({}, process.env, { TZ: timezone });

    // Keep the child out of the test runner's reporting protocol
    delete env.NODE_TEST_CONTEXT;

    const output = childProcess.execFileSync(process.execPath, [__filename, CHILD_FLAG], {
      env: env,
      input: JSON.stringify({ cases: cases, overflow: OVERFLOW, missing: MISSING }),
      encoding: 'utf8'
    });

    return JSON.parse(output);
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

    test('a missing send time defaults to two hours ahead for a viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      MISSING.forEach(function(metadata, index) {
        const actual = result.missing[index];
        const label = JSON.stringify(metadata);

        assert.strictEqual(actual.error, undefined, 'form opens for ' + label);

        // Seconds are dropped because the form only holds hours and minutes
        assert.ok(actual.scheduledAt > actual.before + 2 * 3600 - 60,
          'send time is not earlier than two hours ahead for ' + label);
        assert.ok(actual.scheduledAt <= actual.after + 2 * 3600,
          'send time is not later than two hours ahead for ' + label);
      });
    });

    test('scheduled date does not overflow the month when today is the 31st, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.deepStrictEqual(result.overflow, ['2027-02-28', '2028-02-29', '2027-04-30']);
    });
  });
}
