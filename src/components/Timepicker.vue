<template>
  <div class="time-picker">
    <div class="col-xs-2">
      <label class="select-proxy-display">
        <select class="hidden-select form-control" v-model.number="hour12h">
          <option v-for="h in hours" :key="h.value" :value="h.value" v-html="h.label"></option>
        </select>
        <span class="icon fa fa-chevron-down"></span>
      </label>
    </div>
    <div class="col-xs-2">
      <label class="select-proxy-display">
        <select class="hidden-select form-control" v-model.number="minute">
          <option v-for="m in minutes" :key="m.value" :value="m.value" v-html="m.label"></option>
        </select>
        <span class="icon fa fa-chevron-down"></span>
      </label>
    </div>
    <div class="col-xs-2">
      <label class="select-proxy-display">
        <select class="hidden-select form-control" v-model="ampm">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <span class="icon fa fa-chevron-down"></span>
      </label>
    </div>
    <div class="col-xs-6">
      <label class="select-proxy-display">
        <select class="hidden-select form-control" v-model="timezone">
          <option v-for="zone in adjustedTimezones" :key="zone.value" :value="zone.value" v-html="zone.label"></option>
        </select>
        <span class="icon fa fa-chevron-down"></span>
      </label>
    </div>
  </div>
</template>

<script>
import {
  timezones,
  validate as validateTimezone,
  getOffsetObject as getTimezoneOffsetObject
} from '../libs/timezones';

export default {
  data() {
    return {
      hour12h: this.hour % 12 || 12,
      ampm: this.hour < 12 ? 'AM' : 'PM',
      timezones: timezones,
      hours: Fliplet.Utils.times(12, (hour) => {
        return {
          value: hour + 1,
          label: `0${hour + 1}`.slice(-2)
        };
      }),
      minutes: Fliplet.Utils.times(60, (minute) => {
        return {
          value: minute,
          label: `0${minute}`.slice(-2)
        };
      })
    };
  },
  props: {
    hour: {
      type: Number,
      default: new Date().getHours(),
      validator(value) {
        return value >= 0 && value < 24;
      }
    },
    minute: {
      type: Number,
      default: new Date().getMinutes(),
      validator(value) {
        return value >= 0 && value < 60;
      }
    },
    timezone: {
      type: String,
      default: validateTimezone(moment.tz.guess())
    },
    date: {
      type: Date,
      default: new Date()
    }
  },
  watch: {
    date() {
      this.validateDST();
    },
    hour12h(value) {
      this.validateDST();
      this.$emit('update:hour', this.getHour24h(value, this.ampm));
    },
    minute(value) {
      this.$emit('update:minute', value);
    },
    ampm(value) {
      this.validateDST();
      this.$emit('update:hour', this.getHour24h(this.hour12h, value));
    },
    timezone(value) {
      this.validateDST();
      this.$emit('update:timezone', value);
    }
  },
  computed: {
    adjustedTimezones() {
      return Fliplet.Utils.orderBy(Fliplet.Utils.map(this.timezones, (timezone) => {
        const offset = getTimezoneOffsetObject(timezone.value, this.date);

        return Fliplet.Utils.extend(Fliplet.Utils.clone(timezone), {
          label: `(${offset.label}) ${timezone.label}`,
          offset: offset.value
        });
      }), ['offset'], ['desc']);
    }
  },
  mounted() {
    // If the validation isn't run after a tick, the dropdown doesn't effectively
    // change the values or trigger the watchers.
    this.$nextTick(() => {
      this.validateDST();
    });
  },
  methods: {
    getHour24h(hour12h, ampm) {
      if (hour12h === 12) {
        if (ampm === 'AM') {
          hour12h = hour12h - 12;
        }
      } else if (ampm === 'PM') {
        hour12h = hour12h + 12;
      }

      return hour12h % 24;
    },
    validateDST() {
      const timestamp = moment.tz([
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate(),
        this.getHour24h(this.hour12h, this.ampm),
        this.minute
      ], this.timezone);

      if (timestamp.get('hour') === this.hour) {
        return;
      }

      this.hour12h = timestamp.get('hour') % 12 || 12;
    }
  }
};
</script>
