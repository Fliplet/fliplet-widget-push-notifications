# Fliplet Widget Push Notifications

## Development

This widget is meant to be used with the Fliplet platform.

Run for local development with the [`fliplet-cli`](https://github.com/Fliplet/fliplet-cli):

```bash
$ git clone https://github.com/Fliplet/fliplet-widget-push-notifications.git
$ cd fliplet-widget-push-notifications

$ npm install
$ npm run watch
$ fliplet run
```

## Tests

```bash
$ npm test
```

Node's built-in test runner, so nothing extra to install. Needs Node 18 or newer. CI runs the same command on Node 22 for every pull request and for pushes to `master`, `production` and `projects/*`.

### The timezone data guard

`test/timezone-data.test.js` guards the IANA timezone rules bundled in `vendor/moment-timezone-with-data-10-year-range.min.js`. The scheduler turns a wall-clock time plus a zone name into a fixed UTC timestamp, so those rules decide when a notification actually fires — stale ones store the wrong instant, silently, with nothing thrown and nothing logged.

Two of the tests are a **drift check** that will eventually fail on its own, on a pull request that has nothing to do with timezones. That is intended: it means the bundled data has aged out, not that your change broke anything.

- `bundled IANA data is not behind the runtime tzdata` fails once Node's own IANA release (`process.versions.tz`) overtakes the bundled one. This is the main alarm and it sharpens every time CI's Node is upgraded.
- `bundled IANA data has not fallen behind the calendar` is the backstop for a runner whose tzdata is older than the bundle. It fails when the bundled release year is more than `MAXIMUM_DATA_AGE_YEARS` behind.

The remaining tests pin the corrected zones, check every zone in the picker resolves (`src/libs/timezones.js` calls `moment.tz.zone(...).utcOffset(...)` with no null guard, so an unknown name breaks the form) and check the bundle still covers the full 1916-2499 range.

### Refreshing the bundled timezone data

When the drift check fails:

```bash
$ npm pack moment-timezone@latest
$ tar xzf moment-timezone-*.tgz
$ cp package/builds/moment-timezone-with-data.min.js \
     vendor/moment-timezone-with-data-10-year-range.min.js
$ npm test
```

Then raise `MINIMUM_DATA_VERSION` in `test/timezone-data.test.js` to the release you just pulled in.

Copy `moment-timezone-with-data.min.js`, **not** `moment-timezone-with-data-10-year-range.min.js`. Despite the vendor file's name it holds the full-data build, covering 1916 to 2499; the upstream file matching that name covers about a decade and would silently break far-future scheduling. The `bundled data covers the full historical and future range` test exists to catch that mistake.

No `dist/` rebuild is needed — the file is loaded directly via `widget.json`.
