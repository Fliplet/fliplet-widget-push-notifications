/* eslint-disable no-extend-native */

// Adds support for Date.prototype.setTimezoneOffset
// https://stackoverflow.com/questions/22724898/settimezoneoffset-globally-for-whole-script/40518781
Date.prototype.timezoneOffset = new Date().getTimezoneOffset();

Date.setTimezoneOffset = function (timezoneOffset) {
  this.prototype.timezoneOffset = timezoneOffset;

  return this;
};

Date.getTimezoneOffset = function () {
  return this.prototype.timezoneOffset;
};

Date.prototype.setTimezoneOffset = function (timezoneOffset) {
  this.timezoneOffset = timezoneOffset;

  return this;
};

Date.prototype.getTimezoneOffset = function () {
  return this.timezoneOffset;
};

Date.prototype.toString = function () {
  var offsetDate;
  var offsetTime;

  offsetTime = this.timezoneOffset * 60 * 1000;
  offsetDate = new Date(this.getTime() - offsetTime);

  return offsetDate.toUTCString();
};

['Milliseconds', 'Seconds', 'Minutes', 'Hours', 'Date', 'Month', 'FullYear', 'Year', 'Day'].forEach((function () {
  return function (key) {
    Date.prototype['get' + key] = function () {
      var offsetDate;
      var offsetTime;

      offsetTime = this.timezoneOffset * 60 * 1000;
      offsetDate = new Date(this.getTime() - offsetTime);

      return offsetDate['getUTC' + key]();
    };

    Date.prototype['set' + key] = function (value) {
      var offsetDate;
      var offsetTime;
      var time;

      offsetTime = this.timezoneOffset * 60 * 1000;
      offsetDate = new Date(this.getTime() - offsetTime);
      offsetDate['setUTC' + key](value);
      time = offsetDate.getTime() + offsetTime;
      this.setTime(time);

      return time;
    };

    return this;
  };
})(this));

export function calendarDate(value) {
  return moment(value).calendar(null, {
    sameDay: '[Today at] h:mm A',
    nextDay: '[Tomorrow at ] h:mm A',
    nextWeek: 'dddd [at] h:mm A',
    lastDay: '[Yesterday at] h:mm A',
    lastWeek: '[Last] dddd [at] h:mm A',
    sameElse: 'MMMM Do YYYY'
  });
}

export function formatDate(value, timezone) {
  // @param value (Moment | Date | Number | String) Number would be a UNIX timestamp in seconds
  let date;

  if (value instanceof moment) {
    date = value;
  } else if (value instanceof Date) {
    date = moment(value);
  } else if (typeof value === 'number' || parseFloat(value).toString() === value) {
    date = moment.utc(moment.unix(value));
  } else {
    date = moment(value);
  }

  if (!date.isValid()) {
    // Invalid date. Using current time as fallback.
    date = moment.utc();
  }

  if (timezone) {
    try {
      date.tz(timezone);
    } catch (e) {
      date.tz('UTC');
    }
  }

  return date.format('MMM D YYYY, h:mm A');
}
