<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6"><p><a href="#" @click.prevent="createNotification" class="btn btn-primary"><i class="fa fa-fw fa-lg fa-plus"></i> Create new</a></p></div>
      <div class="col-xs-6"><p><a href="#" class="btn btn-default show-settings pull-right"><i class="fa fa-fw fa-lg fa-cog"></i> Push notification settings</a></p></div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div v-if="isLoading" class="notifications-loading spinner-holder animated">
          <div class="spinner-overlay"></div>
          <p>Loading notifications</p>
        </div>
        <template v-else>
          <template v-if="!notifications.length">
            <div class="notifications-empty">
              <h4>Send a notification</h4>
              <p>Communicate latest updates and promotions with your users so they can re-engage with your app.</p>
            </div>
          </template>
          <template v-else>
            <div class="checkbox checkbox-icon">
              <input id="show-timezone" type="checkbox" v-model="showTimezone">
              <label for="show-timezone">
                <span class="check"><i class="fa fa-check"></i></span> Show timezones
              </label>
            </div>
            <table class="table table-condensed notification-list">
              <thead>
                <tr>
                  <th>Notification</th>
                  <th>Notes</th>
                  <th>Sent to</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="notification in notifications"
                  :key="getNotificationKey(notification)"
                  :data-notification-id="notification.id"
                  :data-job-id="notification.job && notification.job.id">
                  <td class="list-col-content">
                    <p>
                      <tooltip :title="getNotificationTooltip(notification)">
                        <span v-if="notification.status === 'draft'" class="label label-default">Draft</span>
                        <template v-else>
                          <span v-if="notification.status === 'scheduled'" class="label label-info">Scheduled for {{ getNotificationDate(notification)}}</span>
                          <span v-else class="label label-success">Sent on {{ getNotificationDate(notification) }}</span>
                        </template>
                      </tooltip>
                    </p>
                    <p>
                      <strong v-if="notification.data.title">{{ notification.data.title }}</strong>
                      <br v-if="notification.data.title && notification.data.message">
                      {{ notification.data.message }}
                    </p>
                    <Notification-Link :notification="notification"></Notification-Link>
                  </td>
                  <td class="list-col-notes"><Notification-Notes :notification.sync="notification"></Notification-Notes></td>
                  <td class="list-col-sent-to">
                    <p>
                      {{ userCount(notification) }}<br>
                      <small>via <template v-if="notification.type === 'in-app'">in-app</template>
                      <template v-if="notification.type === 'in-app' && notification.job">&amp;</template>
                      <template v-if="notification.job || notification.type === 'push'">push</template>
                      notifications</small>
                    </p>
                  </td>
                  <td class="list-col-actions">
                    <tooltip v-if="notificationIsEditable(notification)" title="Edit"><a href="#" @click.prevent="editNotification(notification)"><i class="fa fa-fw fa-lg fa-pencil"></i></a></tooltip>
                    <tooltip title="Copy"><a href="#" @click.prevent="cloneNotification(notification)"><i class="fa fa-fw fa-lg fa-copy"></i></a></tooltip>
                    <tooltip title="Push notification result" v-if="notification.pushResult">
                      <popover
                        title="Push notification result"
                        :placement="'left'"
                        :content="getNotificationLog(notification)"
                        :data-job-id="notification.job.id">
                        <a href="#" @click.prevent="doNothing"><i class="fa fa-fw fa-lg fa-list-alt"></i></a>
                      </popover>
                    </tooltip>
                    <tooltip v-if="notificationIsDeletable(notification)" title="Delete"><a href="#" @click.prevent="deleteNotification(notification)"><i class="fa fa-fw fa-lg fa-trash"></i></a></tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="list-pagination clearfix">
              <paginate
                v-model="pageNumber"
                :page-count="pageCount"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination clearfix'">
              </paginate>
              <span class="top-align">Show rows:</span>
              <label class="select-proxy-display">
                <select class="hidden-select form-control" v-model="batchSize">
                  <option v-for="(size, index) in batchSizes" :key="index" :value="size" v-html="size"></option>
                </select>
                <span class="icon fa fa-chevron-down"></span>
              </label>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationLink from './NotificationLink';
import NotificationNotes from './NotificationNotes';
import Tooltip from './Tooltip';
import Popover from './Popover';
import Paginate from 'vuejs-paginate';
import {
  setAppPages, setNotification, getPageNumber, setPageNumber,
  setShowTimezone, getShowTimezone } from '../store';
import bus from '../libs/bus';
import { formatDate } from '../libs/date';
import {
  getOffsetString as getTimezoneOffsetString,
  validate as validateTimezone
} from '../libs/timezones';

const defaultAudience = '';
const defaultScope = [];

export default {
  data() {
    return {
      isLoading: false,
      notifications: [],
      instance: null,
      pageCount: 0,
      pageNumber: getPageNumber(),
      lastNotificationShown: false,
      showTimezone: getShowTimezone(),
      userTimezone: validateTimezone(moment.tz.guess()),
      batchSize: 10,
      batchSizes: [10, 25, 50, 100, 250, 500]
    };
  },
  computed: {
    offset() {
      return (this.pageNumber - 1) * this.batchSize;
    }
  },
  watch: {
    showTimezone(value) {
      setShowTimezone(!!value);
    },
    notifications: {
      deep: true,
      handler() {
        bus.$emit('autosize');
      }
    },
    batchSize() {
      this.loadNotifications();
    },
    pageNumber(pageNumber) {
      setPageNumber(pageNumber);
    },
    offset() {
      this.loadNotifications();
    }
  },
  components: {
    NotificationLink,
    NotificationNotes,
    Paginate,
    Tooltip,
    Popover
  },
  created() {
    this.initialize();
    bus.$on('refresh-list', this.loadNotifications);
  },
  destroyed() {
    bus.$off('refresh-list', this.loadNotifications);
  },
  methods: {
    doNothing() {
      return;
    },
    getNotificationKey(notification) {
      let id = notification.id;

      if (!id) {
        id = `legacy-${_.get(notification, 'job.id')}`;
      }

      const createdAt = moment(notification.createdAt).unix();
      const updatedAt = moment(notification.updatedAt).unix();

      return `${id}-${createdAt}-${updatedAt}`;
    },
    getNotificationTooltip(notification) {
      if (notification.id) {
        return `Notification ${notification.id}`;
      }

      if (notification.job && notification.job.id) {
        return `Job ${notification.job.id}`;
      }

      return 'No ID found';
    },
    initialize() {
      return Fliplet.Pages.get().then((pages) => {
        setAppPages(pages);

        this.instance = Fliplet.Notifications.init();

        return this.loadNotifications();
      });
    },
    userCount(notification) {
      if (!notification) {
        return;
      }

      const audience = _.get(notification, 'data.audience', defaultAudience);
      const scope = _.get(notification, 'scope', defaultScope);

      if (!audience && _.isEmpty(scope)) {
        return 'All users';
      }

      return `${notification.userCount} user${notification.userCount !== 1 ? 's' : ''}`;
    },
    getNotificationTimezone(notification) {
      const timezone = _.get(notification, 'data._metadata.scheduledAtTimezone');
      const date = moment.utc(_.get(notification, 'orderAt')).toDate();

      return getTimezoneOffsetString(timezone, date);
    },
    getNotificationDate(notification) {
      if (!this.showTimezone) {
        return `${formatDate(notification.orderAt, this.userTimezone)}`;
      }

      const timezone = validateTimezone(_.get(notification, 'data._metadata.scheduledAtTimezone'));

      return `${formatDate(notification.orderAt, timezone)} ${this.getNotificationTimezone(notification)}`;
    },
    getNotificationLog(notification) {
      const tpl = Fliplet.Widget.Templates['templates.notificationLog'];
      let data = _.merge({
        android: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        },
        ios: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        },
        web: {
          count: 0,
          success: 0,
          failed: 0,
          errors: {}
        }
      }, notification.pushResult);

      const allErrors = _.reduce(_.map(_.values(data), 'errors'), (summary, platformErrors) => {
        _.forIn(platformErrors, (count, type) => {
          if (!_.has(summary, type)) {
            summary[type] = count;

            return;
          }

          summary[type] += count;
        });

        return summary;
      }, {});

      const acceptedCount = _.sumBy(_.keys(data), (platform) => {
        return data[platform].success;
      });
      const totalCount = _.sumBy(_.keys(data), (platform) => {
        return data[platform].count;
      });

      data.accepted = {
        count: acceptedCount,
        percent: (totalCount === 0)
          ? 0
          : Math.round((acceptedCount) / (totalCount) * 100)
      };

      const errorTypes = {
        NoSubscriptions: 'One or more devices are not subscribed to receive this push notification.',
        NotRegistered: 'One or more devices are not subscribed to receive this push notification or the app could be uninstalled.',
        Unregistered: 'The app could be uninstalled or reinstalled on one or more devices.',
        InvalidProviderToken: 'The APN Key ID, push certificate or Team ID is not valid. Please double-check your settings.',
        MismatchSenderId: 'The Android push notification settings for GCM incorrectly use the Project ID instead of the Sender ID',
        DeviceTokenNotForTopic: 'The target bundle identifier does not match the one being used by some of the subscribed devices.',
        TopicDisallowed: 'The target bundle identifier does not match the one being used by some of the subscribed devices.',
        GCMNotSet: 'Push notifications for Firebase (Android devices) have not been configured.',
        APNNotSet: 'Push notifications for Apple (iOS devices) have not been configured.'
      };

      data.errors = _.orderBy(_.map(_.keys(allErrors), (type) => {
        return {
          type,
          description: errorTypes[type],
          count: allErrors[type]
        };
      }), ['count'], ['desc']);
      data.batches = _.get(notification, 'job.batches', { sent: 0, total: 0 });

      return tpl(data);
    },
    notificationIsEditable(notification) {
      return notification.status !== 'published';
    },
    editNotification(notification) {
      setNotification(notification);
      bus.$emit('set-view', 'form');
    },
    cloneNotification(notification) {
      setNotification(_.pick(notification, [
        'status',
        'type',
        'data',
        'scope',
        'orderAt',
        'pushNotification'
      ]));
      bus.$emit('set-view', 'form');
    },
    notificationIsDeletable(notification) {
      return ['draft', 'scheduled'].indexOf(notification.status) > -1 || notification.type === 'in-app';
    },
    deleteNotification(notification) {
      let confirm = Promise.resolve();

      if (window.parent === window.self) {
        confirm = Promise.resolve(window.confirm('Are you sure you want to delete this notification? This cannot be undone.')); // eslint-disable-line no-alert
      } else {
        confirm = Fliplet.Modal.confirm({
          title: 'Delete notification',
          message: 'Are you sure you want to delete this notification? This cannot be undone.'
        });
      }

      return confirm.then((confirmed) => {
        if (!confirmed) {
          return;
        }

        const removedIndex = _.findIndex(this.notifications, { id: notification.id });

        if (removedIndex < 0) {
          return;
        }

        this.notifications.splice(removedIndex, 1);

        return this.instance.remove(notification.id).then(() => {
          this.loadNotifications();
        }).catch((error) => {
          this.loadNotifications();
          Fliplet.Modal.alert({
            title: 'Error deleting notification',
            message: Fliplet.parseError(error)
          });
        });
      });
    },
    createNotification() {
      setNotification();
      bus.$emit('set-view', 'form');
    },
    loadNotifications(notificationId) {
      if (typeof notificationId === 'number'
        && _.findIndex(this.notifications, { id: notificationId }) === -1
        && this.pageNumber !== 1) {
        this.pageNumber = 1;

        return;
      }

      this.isLoading = true;

      return this.instance.poll({
        includeLogs: true,
        offset: this.offset,
        limit: this.batchSize,
        includeAllScopes: true
      }).then((response) => {
        if (!response.entries.length && this.pageNumber > response.pageCount) {
          // Load last page
          this.pageNumber = response.pageCount;

          return;
        }

        this.isLoading = false;
        this.notifications = response.entries;
        this.pageCount = response.pageCount;
        this.pageNumber = response.pageNumber + 1;
      }).catch((error) => {
        Fliplet.Modal.alert({
          title: 'Error loading notifications',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
};
</script>
