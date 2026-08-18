/**
 * Guards the bundled moment-timezone data in vendor/.
 *
 * The scheduler turns a wall-clock time plus a zone name into a fixed UTC
 * timestamp (src/components/NotificationForm.vue scheduledAt), so stale IANA
 * rules mean a notification fires at the wrong moment. These tests pin the
 * properties that swap can silently break.
 */

const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

const VENDOR = path.join(__dirname, '..', 'vendor', 'moment-timezone-with-data-10-year-range.min.js');
const moment = require(VENDOR);

// Zones the widget offers in its picker (src/libs/timezones.js).
const dropdownZones = (require('fs')
  .readFileSync(path.join(__dirname, '..', 'src', 'libs', 'timezones.js'), 'utf8')
  .match(/value: '[^']*'/g) || [])
  .map(function(entry) {
    return entry.replace(/^value: '/, '').replace(/'$/, '');
  });

// IANA release the bundled data must be at or beyond. 2026c is the release that
// carries Morocco's move to permanent UTC+0 and the Canadian permanent-DST
// changes; anything older schedules those zones an hour out. See DEV-1812.
const MINIMUM_DATA_VERSION = '2026c';

// How far the bundled data may fall behind the calendar before this suite calls
// it stale. The IANA drift check below is the primary alarm and fires as soon
// as the runtime knows newer rules; this is the backstop for a runner whose own
// tzdata is older than the bundle. The file went 14 months out of date before
// anyone noticed (PS-908 in June 2025, then DEV-1812), which is what this
// bound exists to stop.
const MAXIMUM_DATA_AGE_YEARS = 2;

function parseDataVersion(version) {
  const parts = /^(\d{4})([a-z]*)$/.exec(version);

  assert.ok(parts, 'unrecognised IANA data version: ' + version);

  return { year: parseInt(parts[1], 10), release: parts[2] };
}

// IANA versions are a year plus a lowercase release suffix, so within a year a
// longer suffix sorts after a shorter one and equal lengths compare directly.
function compareDataVersions(left, right) {
  const a = parseDataVersion(left);
  const b = parseDataVersion(right);

  if (a.year !== b.year) {
    return a.year < b.year ? -1 : 1;
  }

  if (a.release.length !== b.release.length) {
    return a.release.length < b.release.length ? -1 : 1;
  }

  if (a.release === b.release) {
    return 0;
  }

  return a.release < b.release ? -1 : 1;
}

test('bundled IANA data is current', function() {
  assert.ok(
    compareDataVersions(moment.tz.dataVersion, MINIMUM_DATA_VERSION) >= 0,
    'bundled IANA data is ' + moment.tz.dataVersion + ', expected ' + MINIMUM_DATA_VERSION + ' or newer'
  );
});

test('bundled IANA data is not behind the runtime tzdata', function(t) {
  // Node ships its own IANA release for Intl, and it moves on every time the
  // runtime is upgraded. If it has overtaken the vendor file then newer rules
  // exist that the widget is not scheduling against, which is exactly the
  // DEV-1812 defect. Unlike MINIMUM_DATA_VERSION this needs no maintenance: it
  // starts failing on its own once the bundle falls behind.
  if (!process.versions.tz) {
    return t.skip('this Node build does not report its tzdata version');
  }

  assert.ok(
    compareDataVersions(moment.tz.dataVersion, process.versions.tz) >= 0,
    'bundled IANA data is ' + moment.tz.dataVersion + ' but this Node runtime already has '
      + process.versions.tz + '; refresh vendor/moment-timezone-with-data-10-year-range.min.js '
      + 'and raise MINIMUM_DATA_VERSION'
  );
});

test('bundled IANA data has not fallen behind the calendar', function() {
  const bundledYear = parseDataVersion(moment.tz.dataVersion).year;
  const oldestAcceptableYear = new Date().getUTCFullYear() - MAXIMUM_DATA_AGE_YEARS;

  assert.ok(
    bundledYear >= oldestAcceptableYear,
    'bundled IANA data is from ' + bundledYear + ', more than ' + MAXIMUM_DATA_AGE_YEARS
      + ' years old; refresh vendor/moment-timezone-with-data-10-year-range.min.js '
      + 'and raise MINIMUM_DATA_VERSION'
  );
});

test('zones corrected by IANA 2026c resolve to the current offset', function() {
  // [zone, instant, expected minutes to subtract from local time to reach UTC]
  const cases = [
    ['America/Vancouver', '2026-11-15T12:00:00Z', 420],
    ['Canada/Pacific', '2026-11-15T12:00:00Z', 420],
    ['America/Edmonton', '2026-11-15T12:00:00Z', 360],
    ['America/Yellowknife', '2026-11-15T12:00:00Z', 360],
    ['Canada/Mountain', '2026-11-15T12:00:00Z', 360],
    ['Africa/Casablanca', '2026-09-25T12:00:00Z', 0],
    ['Africa/El_Aaiun', '2026-09-25T12:00:00Z', 0]
  ];

  cases.forEach(function(testCase) {
    const zone = moment.tz.zone(testCase[0]);

    assert.ok(zone, testCase[0] + ' is missing from the bundled data');
    assert.strictEqual(
      zone.utcOffset(Date.parse(testCase[1])),
      testCase[2],
      testCase[0] + ' has a stale offset at ' + testCase[1]
    );
  });
});

test('every timezone offered in the picker exists in the bundled data', function() {
  assert.ok(dropdownZones.length, 'failed to read the timezone list');

  // src/libs/timezones.js calls moment.tz.zone(tz.value).utcOffset(now) with no
  // null guard, so a name the data does not know throws and breaks the form.
  dropdownZones.forEach(function(name) {
    assert.ok(moment.tz.zone(name), name + ' is offered in the picker but missing from the bundled data');
  });
});

test('bundled data covers the full historical and future range', function() {
  // The file is named "10-year-range" but has shipped the full-data build since
  // PS-908 (#209). Swapping in an actual 10-year build silently narrows coverage
  // to roughly the current decade and breaks far-future scheduling, which is
  // what #216 did before #218 reverted it.
  const untils = moment.tz.zone('Europe/London').untils;

  assert.ok(
    new Date(untils[1]).getUTCFullYear() < 1950,
    'bundled data starts too late to be the full-data build'
  );
  assert.ok(
    new Date(untils[untils.length - 2]).getUTCFullYear() > 2400,
    'bundled data ends too early to be the full-data build'
  );
});
