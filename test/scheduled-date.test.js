/**
 * Guards the date the schedule step loads when a scheduled notification is
 * copied or edited (src/components/NotificationForm.vue mount). See PS-2188.
 *
 * The bundle patches Date.prototype get and set methods (src/libs/date.js) to read
 * with the viewer's offset captured at page load. The mount block must build the
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
const CHILD_FLAG = '--scheduled-date-child';

// Applies src/libs/date.js to this process, as the bundle does in the browser.
function loadDateLib() {
  const source = fs.readFileSync(DATE_LIB, 'utf8').replace(/^export\s+/gm, '');

  vm.runInThisContext(source, { filename: DATE_LIB });
}

// Child mode: runs the mount block and the scheduledAt computed under the patch.
function runChild() {
  const moment = require(VENDOR);
  const input = JSON.parse(fs.readFileSync(0, 'utf8'));

  global.moment = moment;
  loadDateLib();

  const toCalendarDate = global.toCalendarDate;
  const read = function(d) {
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getDate()).padStart(2, '0')
    ].join('-');
  };

  const cases = input.cases.map(function(item) {
    // NotificationForm.vue mount
    const date = moment.utc(moment.unix(item.scheduledAt));

    date.tz(item.timezone);

    const scheduledAtDate = toCalendarDate(date.year(), date.month(), date.date());
    const hour = date.get('hour');
    const minute = date.get('minute');

    // NotificationForm.vue scheduledAt computed
    const scheduledAt = moment.tz([
      scheduledAtDate.getFullYear(),
      scheduledAtDate.getMonth(),
      scheduledAtDate.getDate(),
      hour,
      minute
    ], item.timezone).utc().unix();

    return { read: read(scheduledAtDate), scheduledAt: scheduledAt };
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
    return read(toCalendarDate(item[0], item[1], item[2]));
  });

  global.Date = NativeDate;

  process.stdout.write(JSON.stringify({ cases: cases, overflow: overflow }));
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
      input: JSON.stringify({ cases: cases, overflow: OVERFLOW }),
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

    test('scheduled date does not overflow the month when today is the 31st, viewer in ' + viewerTimezone, function() {
      const result = runInTimezone(viewerTimezone);

      assert.deepStrictEqual(result.overflow, ['2027-02-28', '2028-02-29', '2027-04-30']);
    });
  });
}
