<template>
  <div>
    <div class="notification-form">
      <div class="container-fluid" v-if="isSaving">
        <div class="spinner-holder animated">
          <div class="spinner-overlay"></div>
          <p v-html="saveMessage"></p>
        </div>
      </div>
      <div class="container-fluid" v-else>
        <div class="steps-holder">
          <div v-for="(stepObj, index) in steps" :key="stepObj.name" class="step" :class="{ 'active': index === step }"></div>
        </div>
        <div class="row" v-show="steps[step].name === 'configure'">
          <div class="col-md-8 col-md-offset-2">
            <h3>Configure your notification</h3>
            <div class="form-group clearfix">
              <input type="text" class="form-control" v-model="notification.data.title" placeholder="Enter notification title" data-count-selector="#title-count" :maxlength="titleCharacterLimit" required>
              <div class="pull-right" :class="{ 'text-success': titleCharactersRemaining >= 0, 'text-danger': titleCharactersRemaining < 0 }">{{ titleCharactersRemaining }} character<template v-if="titleCharactersRemaining !== 1"></template> left</div>
              <div class="text-danger" v-if="errors.title">{{ errors.title }}</div>
            </div>
            <div class="form-group clearfix">
              <textarea class="form-control" rows="4" v-model="notification.data.message" placeholder="Enter notification message (15 words recommended)" :maxlength="messageCharacterLimit" required></textarea>
              <div class="pull-right" :class="{ 'text-success': messageCharactersRemaining >= 0, 'text-danger': messageCharactersRemaining < 0 }">{{ messageCharactersRemaining }} character<template v-if="messageCharactersRemaining !== 1"></template> left</div>
              <div class="text-danger" v-if="errors.message">{{ errors.message }}</div>
            </div>
            <div class="form-group clearfix">
              <h3>Add a link</h3>
              <div class="tab-selection">
                <span class="tab" :class="{ 'active': linkAction === '' }" @click="linkAction = ''">No link</span>
                <span class="tab" :class="{ 'active': linkAction === 'screen' }" @click="linkAction = 'screen'">Link to screen</span>
                <span class="tab" :class="{ 'active': linkAction === 'url' }" @click="linkAction = 'url'">Link to web page</span>
              </div>
            </div>
            <div class="clearfix link-providers" v-show="linkAction !== 'none'">
              <div class="form-group" v-show="linkAction === 'screen'">
                <div ref="screenLinkProvider"></div>
                <div class="text-danger" v-if="errors.screenLink">{{ errors.screenLink }}</div>
                <p class="text-center"><a class="btn btn-default" href="#" @click.prevent="previewScreenLink">Preview target screen</a></p>
              </div>
              <div class="form-group" v-show="linkAction === 'url'">
                <div ref="urlLinkProvider"></div>
                <div class="text-danger" v-if="errors.urlLink">{{ errors.urlLink }}</div>
              </div>
            </div>
            <p class="step-summary">
              <a class="btn btn-default" href="#" @click.prevent="cancel">Cancel</a>
              <a class="btn btn-primary" href="#" @click.prevent="nextStep">Select recipients</a><br>
              <a class="btn btn-link" href="#" @click.prevent="save('draft')">Save as draft</a>
            </p>
          </div>
        </div>
        <div class="row" v-if="steps[step].name === 'recipients'">
          <div class="col-md-10 col-md-offset-1">
            <h3>Send notification to...</h3>
            <div class="tab-selection">
              <span class="tab" :class="{ 'active': audience === '' }" @click="audience = ''">All users</span>
              <span class="tab" :class="{ 'active': audience === 'loggedIn' }" @click="audience = 'loggedIn'">Signed in users</span>
              <span class="tab" :class="{ 'active': audience === 'sessions' }" @click="audience = 'sessions'">Test sessions</span>
            </div>
            <template v-if="audience !== 'sessions' && filters.length">
              <h4>Recipients must match all of the following</h4>
              <div class="filters" v-for="(filter, index) in filters" :key="index">
                <div class="form-group clearfix">
                  <div class="col-xs-1">
                    <span class="btn btn-circle btn-default" @click="removeFilter(index)"><i class="fa fa-fw fa-minus"></i></span>
                  </div>
                  <div class="col-xs-4">
                    <p><input type="text" class="form-control" placeholder="Field name" v-model="filter.column"></p>
                    <div class="form-inline filter-path">
                      <a v-if="!showFilterPath(filter)" class="add-path" href="#" @click.prevent="addFilterPath(filter)" tabindex="-1">This field is an object</a>
                      <div v-else class="form-group">
                        <label class="filter-path-label">Path</label>
                        <input type="text" class="form-control" placeholder="e.g. companies[0].name" v-model="filter.path">
                        <i class="fa fa-fw fa-times" @click="removeFilterPath(filter)"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-3">
                    <label class="select-proxy-display">
                      <select class="hidden-select form-control" v-model="filter.condition">
                        <option v-for="type in filterTypes" :key="type.name" :value="type.name" v-html="type.label"></option>
                      </select>
                      <span class="icon fa fa-chevron-down"></span>
                    </label>
                  </div>
                  <div class="col-xs-4">
                    <Filter-Value :type="getFilterValueType(filter)" :value.sync="filter.value"></Filter-Value>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="audience === 'sessions'">
              <h4>Session IDs</h4>
              <p class="text-center">To test notifications with individual devices, enter the session ID for each device.</p>
              <p>
                <Token-Field :value.sync="sessions" placeholder="Separate multiple IDs with commas"></Token-Field>
              </p>
              <p class="help-block text-center">You can find your session ID by going to <strong>About this app</strong> in the app on your device.</p>
              <p class="text-center text-danger" v-if="errors.sessions">{{ errors.sessions }}</p>
            </template>
            <div class="col-xs-12 filter-summary">
              <div class="col-xs-8">
                <p v-if="audience !== 'sessions'"><a href="#" class="btn btn-default" @click.prevent="addFilter"><i class="fa fa-fw fa-plus"></i> Add filter</a> <a href="https://help.fliplet.com/notifications-component/" target="_blank" class="filter-help">How to add data for filtering users</a></p>
              </div>
              <div class="col-xs-4 text-right">
                <p>
                  <span class="recipient-count" v-if="audience !== '' || filterScopes.length">
                    <template v-if="loadingMatches">
                      Estimating...
                    </template>
                    <template v-else>
                      Estimated: {{ matches.count }} user<template v-if="matches.count !== 1">s</template>
                      <tooltip title="This is an approximation and will depend on the user preference at the time of publish. Users who have never used the app will be excluded."><i class="fa fa-info-circle"></i></tooltip>
                    </template>
                  </span>
                </p>
              </div>
            </div>
            <div class="form-group">
              <h3>Notes</h3>
              <textarea class="form-control" rows="4" v-model="notes" placeholder="(Optional) Add some notes to this notification. Your users will not see this."></textarea>
            </div>
            <p class="step-summary">
              <a class="btn btn-default" href="#" @click.prevent="prevStep">Back</a>
              <a class="btn btn-primary" href="#" @click.prevent="nextStep">Prepare for send</a><br>
              <a class="btn btn-link" href="#" @click.prevent="save('draft')">Save as draft</a>
            </p>
          </div>
        </div>
        <template v-if="steps[step].name === 'schedule'">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <h3>Send notification...</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="tab-selection">
                <span class="tab" :class="{ 'active': schedule === 'now' }" @click="schedule = 'now'">Now</span>
                <span class="tab" :class="{ 'active': schedule === 'scheduled' }" @click="schedule = 'scheduled'">Later</span>
              </div>
            </div>
          </div>
          <div class="row" v-if="schedule === 'scheduled'">
            <div class="col-md-8 col-md-offset-2 text-center">
              <Datepicker
                :inline="true"
                :monday-first="true"
                :required="true"
                :disabled-dates="disabledDates"
                @changedMonth="autosize"
                @changedYear="autosize"
                @changedDecade="autosize"
                v-model="scheduledAtDate"></Datepicker>
              <Timepicker
                :hour.sync="scheduledAtHour"
                :minute.sync="scheduledAtMinute"
                :timezone.sync="scheduledAtTimezone"
                :date.sync="scheduledAtDate"></Timepicker>
            </div>
          </div>
          <div class="row">
            <h3>Show notification as...</h3>
            <div class="col-md-8 col-md-offset-2">
              <div class="tab-selection">
                <span class="tab tab-checked" :class="{ 'active': notificationHasChannel('in-app') }" @click="toggleNotificationChannel('in-app')">In-app notification</span>
                <span class="tab tab-checked" :class="{ 'active': notificationHasChannel('push') }" @click="toggleNotificationChannel('push')">Push notification</span>
              </div>
              <div class="alert alert-info"><strong>New!</strong> Web apps can now receive push notifications.</div>
              <div class="alert alert-warning" v-if="!pushIsConfigured">To send push notifications to your native app, you must configure push notifications on <a href="https://help.fliplet.com/configure-push-notifications-for-ios/" target="_blank">iOS</a> and <a href="https://help.fliplet.com/configure-push-notifications-for-android/" target="_blank">Android</a>.</div>
              <p class="text-center text-danger" v-if="errors.channels">{{ errors.channels }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <p class="step-summary">
                <a class="btn btn-default" href="#" @click.prevent="prevStep">Back</a>
                <a class="btn btn-primary" href="#" @click.prevent="nextStep">Review</a><br>
                <a class="btn btn-link" href="#" @click.prevent="save('draft')">Save as draft</a>
              </p>
            </div>
          </div>
        </template>
        <div class="row notification-review" v-show="steps[step].name === 'review'">
          <div class="col-md-10 col-md-offset-1">
            <h3>Your notification</h3>
            <template v-if="notificationHasChannel('in-app')">
              <div class="notification-message">
                <strong>{{ notification.data.title }}</strong><br>{{ notification.data.message }}
              </div>
            </template>
            <div class="push-notification-preview" v-if="notificationHasChannel('push')">
              <h4 v-if="notificationHasChannel('in-app')">A push notification will also be sent</h4>
              <p><small class="text-info">Appearance of the notification is subject to users' device, preference and accepting to receive notifications.</small></p>
              <div class="visible-sm-block visible-md-block visible-lg-block" id="notification-message-preview">
                <img :src="getAsset('img/notifications_device_preview_empty.jpg')">
                <div id="notification-preview-home">
                  <img class="app-icon-preview" :src="appIcon">
                  <strong class="app-name">{{ appName }}</strong>
                  <span class="notification-message">
                    <strong>{{ notification.data.title }}</strong><br>{{ notification.data.message }}
                  </span>
                </div>
                <div id="notification-preview-icon-home">
                  <img class="app-icon-preview" :src="appIcon">
                  <strong class="app-name">{{ appName }}</strong>
                </div>
                <div id="notification-preview-lockscreen">
                  <img class="app-icon-preview" :src="appIcon">
                  <strong class="app-name">{{ appName }}</strong>
                  <span class="notification-message">
                    <strong>{{ notification.data.title }}</strong><br>{{ notification.data.message }}
                  </span>
                </div>
                <div id="notification-preview-notification-center">
                  <img class="app-icon-preview" :src="appIcon">
                  <strong class="app-name"></strong>
                  <span class="notification-message">
                    <strong>{{ notification.data.title }}</strong><br>{{ notification.data.message }}
                  </span>
                </div>
              </div>
            </div>
            <h4>Sending to
              <template v-if="audience === '' && !filterScopes.length">all users</template>
              <template v-else>
                <strong>{{ matches.count }}</strong> {{ audienceVerbose }} user<template v-if="matches.count !== 1">s</template>
              </template>
              <template v-if="filterScopes.length">matching all of the following</template>
            </h4>
            <template v-if="filterScopes.length">
              <ul class="filter-summary-items">
                <li v-for="(filter, index) in filters" :key="index" v-html="getFilterVerbose(filter)"></li>
              </ul>
            </template>
            <h4>Send the notification {{ scheduleVerbose }}</h4>
            <p v-if="schedule === 'scheduled'" v-html="notificationDate"></p>
            <p class="step-summary">
              <a class="btn btn-default" href="#" @click.prevent="prevStep">Back</a>
              <a class="btn btn-primary" href="#" @click.prevent="send()" v-html="getSendLabel()"></a><br>
              <a class="btn btn-link" href="#" @click.prevent="save('draft')">Save as draft</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAssetRoot, getNotification, getNotificationLinkAction,
  getShowTimezone, getDefaultNotification } from '../store';
import bus from '../libs/bus';
import { filterTypes, getFilterScope, getFilterVerbose } from '../libs/scope';
import { formatDate } from '../libs/date';
import {
  validate as validateTimezone,
  getOffsetString as getTimezoneOffsetString
} from '../libs/timezones';
import Tooltip from './Tooltip';
import FilterValue from './FilterValue';
import Timepicker from './Timepicker';
import TokenField from './TokenField';
import Datepicker from 'vuejs-datepicker';

const defaultFilter = {
  column: '',
  condition: 'equals',
  value: ''
};
const defaultAudience = '';
const defaultSchedule = 'now';
const defaultScheduledAt = moment().add(2, 'hours');
const defaultConfirmationMessage = 'Your notification is saved.';
const defaultSaveMessage = 'Saving';
const defaultSendLabel = 'Send notification';

export default {
  data() {
    return {
      isSaving: false,
      saveMessage: 'Saving',
      showTimezone: getShowTimezone(),
      appName: Fliplet.Env.get('appName'),
      appIcon: '',
      notification: getNotification(),
      titleCharacterLimit: 50,
      messageCharacterLimit: 250,
      instance: null,
      assetRoot: getAssetRoot(),
      step: 0,
      steps: [
        { name: 'configure' },
        { name: 'recipients' },
        { name: 'schedule' },
        { name: 'review' }
      ],
      filterTypes,
      linkAction: getNotificationLinkAction(),
      scheduledAtDate: defaultScheduledAt.clone().startOf('day').toDate(),
      scheduledAtHour: defaultScheduledAt.get('hour'),
      scheduledAtMinute: defaultScheduledAt.get('minute'),
      scheduledAtTimezone: validateTimezone(moment.tz.guess()),
      disabledDates: {
        to: moment().subtract(1, 'days').toDate()
      },
      sessions: [],
      showScreenPreview: false,
      screenLinkProvider: null,
      urlLinkProvider: null,
      channels: ['in-app', 'push'],
      matches: {
        count: 0,
        subscriptions: 0,
        matches: {
          entries: [],
          sessions: []
        }
      },
      debouncedGetMatches: _.debounce(this.getMatches, 1500),
      matchQuery: null,
      loadingMatches: true,
      errors: {},
      widgetData: Fliplet.Widget.getData()
    };
  },
  components: {
    Tooltip,
    FilterValue,
    Datepicker,
    Timepicker,
    TokenField
  },
  mounted() {
    this.appIcon = this.getAsset('img/app-icon.png');
    this.notification = _.defaultsDeep(this.notification, getDefaultNotification());

    this.channels = _.get(this.notification, 'data._metadata.channels', []);

    // Always default to both in-app and push if no channels are set
    if (!this.channels.length) {
      this.channels = ['in-app', 'push'];
    }

    const sessions = _.get(this.notification, 'data._metadata.sessions');


    if (_.isArray(sessions) && sessions.length) {
      _.forEach(sessions, (sessionId) => {
        this.sessions.push(sessionId);
      });
    }

    this.instance = Fliplet.Notifications.init();
    this.getMatches();
    this.initializeProviders();

    if (this.schedule === 'scheduled') {
      let date = moment.utc(moment.unix(_.get(this.notification, 'data._metadata.scheduledAt')));

      if (!date.isValid()) {
        date = moment.utc().unix();
      }

      this.scheduledAtTimezone = validateTimezone(_.get(this.notification, 'data._metadata.scheduledAtTimezone'));
      date.tz(this.scheduledAtTimezone);

      // Use "Z" to indicate UTC timezone in the date string
      this.scheduledAtDate = new Date(`${date.clone().startOf('day').locale('en-us').format('YYYY-MM-DDT00:00:00')}Z`);
      this.scheduledAtHour = date.get('hour');
      this.scheduledAtMinute = date.get('minute');
    }

    Fliplet.Apps.get().then((apps) => {
      const app = _.find(apps, { id: Fliplet.Env.get('appId') });

      if (!app) {
        return;
      }

      this.appIcon = app.icon;
    });
  },
  computed: {
    titleCharactersRemaining() {
      return this.titleCharacterLimit - this.notification.data.title.length;
    },
    messageCharactersRemaining() {
      return this.messageCharacterLimit - this.notification.data.message.length;
    },
    pushIsConfigured() {
      return this.widgetData && (this.widgetData.apn || this.widgetData.gcm || this.widgetData.wns);
    },
    schedule: {
      get() {
        const schedule = _.get(this.notification, 'data._metadata.schedule');

        if (!schedule) {
          return defaultSchedule;
        }

        return ['now', 'scheduled'].indexOf(schedule) > -1 ? schedule : defaultSchedule;
      },
      set(schedule) {
        return _.set(this.notification, 'data._metadata.schedule', schedule);
      }
    },
    audience: {
      get() {
        const audience = _.get(this.notification, 'data.audience', defaultAudience);

        if (!audience) {
          return defaultAudience;
        }

        return ['loggedIn', 'sessions'].indexOf(audience) > -1 ? audience : defaultAudience;
      },
      set(audience) {
        if (['loggedIn', 'sessions'].indexOf(audience) < 0) {
          audience = defaultAudience;
        }

        _.set(this.notification, 'data.audience', audience);
      }
    },
    audienceVerbose() {
      switch (this.audience) {
        case 'loggedIn':
          return 'signed in';
        case 'sessions':
          return 'test device';
        default:
          return '';
      }
    },
    scheduleVerbose() {
      switch (this.schedule) {
        case 'scheduled':
          return 'later';
        default:
        case 'now':
          return 'now';
      }
    },
    filters() {
      return _.get(this.notification, 'data._metadata.filters', []) || [];
    },
    notes: {
      get() {
        return _.get(this.notification, 'data._metadata.notes', '') || '';
      },
      set(notes) {
        return _.set(this.notification, 'data._metadata.notes', notes);
      }
    },
    filterScopes() {
      return _.compact(_.map(this.filters, getFilterScope));
    },
    scope() {
      if (this.audience === 'sessions') {
        return { flSessionId: this.validateSessions(this.sessions) || [] };
      }

      return this.filterScopes.length ? { $and: this.filterScopes } : {};
    },
    scheduledAt() {
      const timestamp = moment.tz([
        this.scheduledAtDate.getFullYear(),
        this.scheduledAtDate.getMonth(),
        this.scheduledAtDate.getDate(),
        this.scheduledAtHour,
        this.scheduledAtMinute
      ], this.scheduledAtTimezone);

      return timestamp.utc().unix();
    },
    orderAt() {
      if (this.schedule === 'scheduled') {
        return this.scheduledAt;
      }

      return moment().unix();
    },
    notificationTimezone() {
      const date = moment.unix(this.orderAt).toDate();

      return getTimezoneOffsetString(this.scheduledAtTimezone, date);
    },
    notificationDate() {
      return `${formatDate(this.orderAt, this.scheduledAtTimezone)} ${this.notificationTimezone}`;
    },
    type() {
      if (this.notificationHasChannel('in-app') || !this.notificationHasChannel('push')) {
        return 'in-app';
      }

      return 'push';
    }
  },
  watch: {
    isSaving() {
      this.autosize();
    },
    notification() {
      this.autosize();
    },
    errors() {
      this.autosize();
    },
    step() {
      this.autosize();
      Fliplet.Studio.emit('overlay-scroll-top', { name: 'notifications' });
    },
    schedule() {
      this.autosize();
    },
    linkAction() {
      this.autosize();
    },
    audience() {
      this.autosize();
      this.getMatches();
    },
    filters: {
      deep: true,
      handler() {
        this.autosize();
        this.debouncedGetMatches();
      }
    },
    sessions() {
      this.getMatches();
    }
  },
  methods: {
    getFilterVerbose,
    cancel() {
      bus.$emit('set-view', 'list');
    },
    backToNotifications(options) {
      options = options || {};

      bus.$emit('set-view', 'list');
      bus.$emit('refresh-list', options.notificationId);
    },
    autosize() {
      bus.$emit('autosize');
    },
    getErrors() {
      this.errors = {};

      switch (this.steps[this.step].name) {
        case 'configure':
          if (!_.get(this.notification, 'data.title')) {
            Vue.set(this.errors, 'title', 'Please enter a title');
          }

          if (!this.titleCharactersRemaining < 0) {
            Vue.set(this.errors, 'title', `Title must be no longer than ${this.titleCharacterLimit} characters`);
          }

          if (!_.get(this.notification, 'data.message')) {
            Vue.set(this.errors, 'message', 'Please enter a message');
          }

          if (!this.messageCharactersRemaining < 0) {
            Vue.set(this.errors, 'message', `Message must be no longer than ${this.messageCharacterLimit} characters`);
          }

          break;
        case 'recipients':
          if (this.audience === 'sessions' && !this.sessions.length) {
            Vue.set(this.errors, 'sessions', 'Please enter one or more device IDs');
          }

          break;
        case 'schedule':
          if (!this.channels.length) {
            Vue.set(this.errors, 'channels', 'Please select one or more notification types');
          }

          break;
        default:
          break;
      }
    },
    stepIsValid() {
      this.getErrors();

      return _.isEmpty(this.errors);
    },
    nextStep() {
      if (!this.stepIsValid()) {
        return;
      }

      this.step = Math.min(this.step + 1, this.steps.length - 1);
    },
    prevStep() {
      this.step = Math.max(0, this.step - 1);
    },
    goToStep(name) {
      this.step = _.findIndex(this.steps, { name });
    },
    validateSessions(sessions) {
      if (typeof sessions === 'string') {
        sessions = sessions.split(',');
      }

      if (!_.isArray(sessions)) {
        sessions = [sessions];
      }

      sessions = _.compact(_.map(sessions, (id) => {
        return parseInt(id, 10);
      }));

      return sessions;
    },
    getAsset(path) {
      return `${this.assetRoot}/${path}`;
    },
    notificationHasChannel(channel) {
      return _.includes(this.channels, channel);
    },
    addNotificationChannel(channel) {
      if (this.channels.indexOf(channel) === -1) {
        this.channels.push(channel);
      }
    },
    removeNotificationChannel(channel) {
      if (this.channels.indexOf(channel) > -1) {
        this.channels.splice(this.channels.indexOf(channel), 1);
      }
    },
    getMatches() {
      if (!this.instance) {
        return Promise.resolve();
      }

      if (!this.audience && !this.filterScopes.length) {
        // Don't calculate matches if it's for all users
        return Promise.resolve();
      }

      const matchQuery = {
        audience: this.audience,
        scope: this.scope,
        includeMatches: true
      };

      if (this.matchQuery !== null && _.isEqual(matchQuery, this.matchQuery)) {
        return Promise.resolve();
      }

      this.matchQuery = matchQuery;
      this.loadingMatches = true;

      return this.instance.getMatches(matchQuery).then((results) => {
        this.loadingMatches = false;
        this.matches = results;
      }).catch(() => {
        this.loadingMatches = false;
      });
    },
    toggleNotificationChannel(channel, enable) {
      if (typeof enable !== 'undefined') {
        this[enable ? 'addNotificationChannel' : 'removeNotificationChannel'](channel);

        return;
      }

      this[!this.notificationHasChannel(channel) ? 'addNotificationChannel' : 'removeNotificationChannel'](channel);
    },
    getFilterValueType(filter) {
      switch (filter.condition) {
        case 'empty':
        case 'notempty':
          return 'none';
        case 'oneof':
        case 'notoneof':
          return 'collection';
        case 'equals':
        case 'notequal':
        case 'contains':
        case 'notcontain':
        case 'gt':
        case 'gte':
        case 'lt':
        case 'lte':
        default:
          return 'text';
      }
    },
    showFilterPath(filter) {
      return filter.path || filter.showPath;
    },
    addFilterPath(filter) {
      Vue.set(filter, 'showPath', true);
      Vue.set(filter, 'path', '');
    },
    removeFilterPath(filter) {
      Vue.set(filter, 'showPath', false);
      Vue.delete(filter, 'path');
    },
    initializeProviders() {
      this.$refs.screenLinkProvider.innerHTML = '';
      this.screenLinkProvider = Fliplet.Widget.open('com.fliplet.link', {
        selector: this.$refs.screenLinkProvider,
        data: _.get(this.notification, 'data.navigate.action') === 'screen'
          ? _.merge({ options: { hideTransition: true } }, this.notification.data.navigate)
          : {
            action: 'screen',
            page: '',
            transition: 'none',
            options: {
              hideAction: true,
              hideTransition: true
            }
          },
        closeOnSave: false
      });
      this.$refs.urlLinkProvider.innerHTML = '';
      this.urlLinkProvider = Fliplet.Widget.open('com.fliplet.link', {
        selector: this.$refs.urlLinkProvider,
        data: _.get(this.notification, 'data.navigate.action') === 'url'
          ? this.notification.data.navigate
          : {
            action: 'url',
            url: '',
            options: {
              hideAction: true
            }
          },
        closeOnSave: false
      });
    },
    addFilter() {
      this.filters.push({});
      _.forIn(defaultFilter, (value, key) => {
        Vue.set(this.filters[this.filters.length - 1], key, value);
      });
    },
    removeFilter(index) {
      this.filters.splice(index, 1);
    },
    openScreenPreview() {
      if (!_.get(this.notification, 'data.navigate.page')) {
        Fliplet.Modal.alert({
          message: 'Please select a screen to preview'
        });

        return;
      }

      if (window.parent === window.self) {
        alert('Preview only works in Fliplet Studio'); // eslint-disable-line no-alert

        return;
      }

      Fliplet.Studio.emit('overlay', {
        name: 'page-preview',
        options: {
          size: 'medium',
          title: 'Previewing target screen',
          classes: 'preview-notification',
          data: {
            appId: Fliplet.Env.get('appId'),
            pageId: this.notification.data.navigate.page,
            query: this.notification.data.navigate.query
          }
        }
      });
    },
    previewScreenLink() {
      if (!this.screenLinkProvider || this.linkAction !== 'screen') {
        return;
      }

      this.showScreenPreview = true;
      this.save();
    },
    send() {
      if (this.schedule === 'scheduled') {
        this.save('scheduled');

        return;
      }

      this.save('published');
    },
    getConfirmationMessage(from, to) {
      // Returns a confirmation message based on the status
      // the notification is going from and to
      if (from === to) {
        return defaultConfirmationMessage;
      }

      if (to === 'published') {
        return 'Your notification is sent.';
      }

      if (from === 'draft' && to === 'scheduled') {
        return 'Your notification is scheduled.';
      }

      if (from === 'scheduled' && to === 'draft') {
        return 'Your notification is saved as draft.';
      }

      return defaultConfirmationMessage;
    },
    getSaveMessage(from, to) {
      // Returns a save message based on the status
      // the notification is going from and to
      if (to === 'draft') {
        return 'Saving as draft';
      }

      if (to === 'published') {
        return 'Sending notification';
      }

      if (to === 'scheduled') {
        if (from === 'draft') {
          return 'Scheduling notification';
        }

        if (from === 'scheduled') {
          return 'Saving notification';
        }
      }

      return defaultSaveMessage;
    },
    getSendLabel() {
      if (this.schedule === 'now') {
        return 'Send notification';
      }

      if (this.schedule === 'scheduled') {
        if (this.notification.status === 'scheduled') {
          return 'Save notification';
        }

        return 'Schedule notification';
      }

      return defaultSendLabel;
    },
    save(status) {
      let saveLinkProvider = Promise.resolve();
      const statusFrom = this.notification.status || 'draft';

      if (typeof status === 'undefined') {
        status = statusFrom;
      }

      const statusTo = status;

      switch (this.linkAction) {
        case 'screen':
          saveLinkProvider = this.screenLinkProvider;
          this.screenLinkProvider.forwardSaveRequest();
          break;
        case 'url':
          saveLinkProvider = this.urlLinkProvider;
          this.urlLinkProvider.forwardSaveRequest();
          break;
        default:
          break;
      }

      return new Promise((resolve) => {
        saveLinkProvider.then((results) => {
          this.notification.data.navigate = _.get(results, 'data', {});

          switch (this.linkAction) {
            case 'screen':
              this.screenLinkProvider = null;
              break;
            case 'url':
              this.urlLinkProvider = null;
              break;
            default:
              break;
          }

          this.initializeProviders();

          if (this.showScreenPreview) {
            this.showScreenPreview = false;
            this.openScreenPreview();

            return;
          }

          if (!this.stepIsValid()) {
            return;
          }

          _.remove(this.filters, (filter) => {
            return !filter.column || (!filter.value && ['empty', 'notempty'].indexOf(filter.condition) < 0);
          });

          _.merge(this.notification, {
            status: status,
            type: this.type,
            orderAt: this.orderAt,
            data: {
              audience: this.audience,
              _metadata: {
                scheduledAtTimezone: this.scheduledAtTimezone,
                scheduledAt: this.scheduledAt,
                schedule: this.schedule,
                notes: this.notes,
                channels: this.channels
              }
            }
          });

          if (!_.isEmpty(this.scope)) {
            this.notification.scope = this.scope;
          } else {
            // Ensures notification scope is never empty
            delete this.notification.scope;
          }

          // Array properties are separated to ensure the arrays are overwritten with new values
          _.assign(this.notification._metadata, {
            scope: this.scope,
            filters: this.audience !== 'sessions' ? this.filters : [],
            sessions: this.audience === 'sessions' ? this.validateSessions(this.sessions) : undefined
          });

          if (_.get(this.notification, 'data.navigate') && _.isEmpty(this.notification.data.navigate)) {
            delete this.notification.data.navigate;
          }

          if (status !== 'scheduled') {
            delete this.notification.orderAt;
          }

          if (this.notificationHasChannel('push') && status !== 'draft') {
            // Do not assign push notification payload when saving a draft.
            // The backend will send a push notification to users.
            let pushNotification = {
              payload: {
                title: this.notification.data.title,
                body: this.notification.data.message,
                icon: 'icon_notification',
                priority: 'high',
                sound: 'default'
              }
            };

            if (this.notification.data.navigate) {
              _.set(pushNotification, 'payload.custom.customData', this.notification.data.navigate);
            }

            this.notification.pushNotification = pushNotification;
          }

          this.isSaving = true;
          this.saveMessage = this.getSaveMessage(statusFrom, statusTo);

          if (!_.get(this, 'notification.id')) {
            return this.instance.insert(this.notification).then(resolve);
          }

          return this.instance.update(this.notification.id, _.pick(this.notification, [
            'status',
            'type',
            'data',
            'scope',
            'orderAt',
            'pushNotification'
          ])).then(resolve);
        });
      }).then((response) => {
        Fliplet.Modal.alert({
          title: 'Success!',
          message: this.getConfirmationMessage(statusFrom, statusTo)
        });
        this.backToNotifications({
          notificationId: response.notification.id
        });
      }).catch((error) => {
        this.isSaving = false;
        Fliplet.Modal.alert({
          title: 'Error saving notification',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
};
</script>
