/* eslint-disable no-extend-native */

// Adds support for Date.prototype.setTimezoneOffset
// https://stackoverflow.com/questions/22724898/settimezoneoffset-globally-for-whole-script/40518781
Date.prototype.timezoneOffset = new Date().getTimezoneOffset();

Date.setTimezoneOffset = function(timezoneOffset) {
  this.prototype.timezoneOffset = timezoneOffset;

  return this;
};

Date.getTimezoneOffset = function() {
  return this.prototype.timezoneOffset;
};

Date.prototype.setTimezoneOffset = function(timezoneOffset) {
  this.timezoneOffset = timezoneOffset;

  return this;
};

Date.prototype.getTimezoneOffset = function() {
  return this.timezoneOffset;
};

Date.prototype.toString = function() {
  var offsetDate;
  var offsetTime;

  offsetTime = this.timezoneOffset * 60 * 1000;
  offsetDate = new Date(this.getTime() - offsetTime);

  return offsetDate.toUTCString();
};

['Milliseconds', 'Seconds', 'Minutes', 'Hours', 'Date', 'Month', 'FullYear', 'Year', 'Day'].forEach((function() {
  return function(key) {
    Date.prototype['get' + key] = function() {
      var offsetDate;
      var offsetTime;

      offsetTime = this.timezoneOffset * 60 * 1000;
      offsetDate = new Date(this.getTime() - offsetTime);

      return offsetDate['getUTC' + key]();
    };

    Date.prototype['set' + key] = function(value) {
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

/**
 * Builds a Date whose getFullYear/getMonth/getDate read the given calendar day at 00:00.
 * Uses setters only so the result is correct under the Date.prototype patch above,
 * which reads with the offset captured at page load rather than the target date's offset.
 * @param {Number} year - Full year, e.g. 2027
 * @param {Number} month - Zero-based month
 * @param {Number} day - Day of the month
 * @returns {Date} Date for the calendar day
 */
export function toCalendarDate(year, month, day) {
  const date = new Date();

  // Move to the 1st first so the month change can't overflow (e.g. Jan 31 to Feb)
  date.setDate(1);
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

/**
 * Reads a stored send time into the values shown on the schedule step.
 * @param {Number} scheduledAt - UNIX timestamp in seconds
 * @param {String} timezone - Timezone the notification is scheduled in
 * @returns {Object} Calendar date, hour and minute in the given timezone
 */
export function getScheduleFields(scheduledAt, timezone) {
  let date = moment.utc(moment.unix(scheduledAt));

  if (!date.isValid()) {
    // Same default as a new notification. The current time would be in the past
    // by the time the user saves, and the API sends those immediately.
    date = moment.utc().add(2, 'hours');
  }

  date.tz(timezone);

  return {
    date: toCalendarDate(date.year(), date.month(), date.date()),
    hour: date.get('hour'),
    minute: date.get('minute')
  };
}

/**
 * Converts the values picked on the schedule step back to a send time.
 * @param {Object} fields - Calendar date, hour and minute
 * @param {String} timezone - Timezone the values are in
 * @returns {Number} UNIX timestamp in seconds
 */
export function getScheduledTimestamp(fields, timezone) {
  return moment.tz([
    fields.date.getFullYear(),
    fields.date.getMonth(),
    fields.date.getDate(),
    fields.hour,
    fields.minute
  ], timezone).utc().unix();
}

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
