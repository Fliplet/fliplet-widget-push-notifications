var $reportHolder = $('.reports-holder');
var widgetId = Fliplet.Widget.getDefaultId();
var appId = Fliplet.Env.get('appId');
var data = Fliplet.Widget.getData(widgetId) || {};
var limit = 20;
var notificationsOffsetDate;
var pushNotificationsOffset = 0;
var allNotifications = [];
var uiNotification;
var uiPushNotification;
var assetRoot = $('#container').data('asset') || '';

function hideSavedMessage() {
  setTimeout(function() {
    $('.settings-saved-app-msg').fadeOut(function() {
      Fliplet.Widget.autosize();
    });
  }, 5000);
}

function getMockNotifications() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var data = [
        {
          createdAt: '2018-11-07 16:23:57.89+00',
          orderAt: '2018-11-08 16:23:57.89+00',
          data: {
            title: 'Bibendum Condimentum Fringilla',
            message: 'Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.'
          },
          status: 'draft',
          deletedAt: null
        },
        {
          createdAt: '2018-11-05 16:23:57.89+00',
          orderAt: '2018-11-06 16:23:57.89+00',
          data: {
            title: 'Quam Pharetra',
            message: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          pushNotificationPayload: {
            title: 'Quam Pharetra',
            message: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          status: 'published',
          deletedAt: null
        },
        {
          createdAt: '2018-11-01 16:23:57.89+00',
          orderAt: '2018-11-02 16:23:57.89+00',
          data: {
            title: 'Dolor Fermentum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
          },
          status: 'draft',
          deletedAt: '2018-11-03 16:23:57.89+00'
        }
      ];
      resolve(data);
    }, 1000);
  });
}

function getMockPushNotifications() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var data = {"logs":[{"id":3419,"type":"job","data":{"result":[{"job":"2305","result":[{"method":"gcm","failure":0,"message":[{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"}],"success":7,"multicastId":[0]},{"method":"apn","failure":16,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"}],"success":30}]}],"payload":{"body":"Maecenas sed diam eget risus varius blandit sit amet non magna.","title":"Purus Fringilla"},"settings":{"apn":true,"gcm":true,"wns":true,"apnKeyId":"A","apnTopic":"com.mock","apnTeamId":"A","apnAuthKey":"-","configured":true,"popupTitle":"App updates and notifications","gcmSenderId":"9","wnsClientId":"ms-app://s-1","gcmServerKey":"g","popupMessage":"You will receive notifications when app updates are available.\nPlease tap on Allow Notifications below to receive notifications on the updates.","gcmPackageName":"com.mock","wnsClientSecret":"w","showOnceOnPortal":false,"showAutomatically":false}},"requestId":null,"createdAt":"2017-12-19T17:10:10.006Z","updatedAt":"2017-12-19T17:10:15.417Z","userId":null,"appId":21,"dataSourceEntryId":null,"dataSourceId":null},{"id":3418,"type":"job","data":{"result":[{"job":"2162","result":[{"method":"gcm","failure":0,"message":[{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"}],"success":3,"multicastId":[0]},{"method":"apn","failure":14,"message":[{"error":null,"regId":{"device":"d"}},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"}],"success":25}]}],"payload":{"body":"Maecenas sed diam eget risus varius blandit sit amet non magna.","title":"Purus Fringilla"},"settings":{"apn":true,"gcm":true,"wns":true,"apnKeyId":"A","apnTopic":"com.mock","apnTeamId":"A","apnAuthKey":"-","configured":true,"popupTitle":"App updates and notifications","gcmSenderId":"9","wnsClientId":"ms-app://s-1","gcmServerKey":"g","popupMessage":"You will receive notifications when app updates are available.\nPlease tap on Allow Notifications below to receive notifications on the updates.","gcmPackageName":"com.mock","wnsClientSecret":"w","showOnceOnPortal":false,"showAutomatically":false}},"requestId":null,"createdAt":"2017-12-19T11:04:25.638Z","updatedAt":"2017-12-19T11:04:26.795Z","userId":null,"appId":21,"dataSourceEntryId":null,"dataSourceId":null},{"id":3417,"type":"job","data":{"jobs":["2152","2153","2154","2155","2156","2157","2158","2159","2160","2161"],"result":[{"job":"2152","result":[{"method":"gcm","failure":2,"message":[{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"}],"success":8,"multicastId":[0]},{"method":"apn","failure":3,"message":[{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":37}]},{"job":"2153","result":[{"method":"gcm","failure":4,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":0,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}}],"success":46}]},{"job":"2154","result":[{"method":"gcm","failure":4,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":1,"message":[{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"}],"success":45}]},{"job":"2155","result":[{"method":"gcm","failure":4,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":2,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":44}]},{"job":"2156","result":[{"method":"gcm","failure":5,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":3,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":42}]},{"job":"2158","result":[{"method":"gcm","failure":6,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"NotRegistered","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":0,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}}],"success":44}]},{"job":"2157","result":[{"method":"gcm","failure":6,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"},{"error":"MismatchSenderId","regId":"r"}],"success":0,"multicastId":[0]},{"method":"apn","failure":0,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}}],"success":44}]},{"job":"2159","result":[{"method":"gcm","failure":4,"message":[{"error":"MismatchSenderId","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"}],"success":3,"multicastId":[0]},{"method":"apn","failure":3,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":40}]},{"job":"2160","result":[{"method":"gcm","failure":5,"message":[{"error":null,"regId":"r","messageId":"0:1"},{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"}],"success":4,"multicastId":[0]},{"method":"apn","failure":2,"message":[{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":39}]},{"job":"2161","result":[{"method":"gcm","failure":2,"message":[{"error":"NotRegistered","regId":"r"},{"error":"NotRegistered","regId":"r"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"}],"success":5,"multicastId":[0]},{"method":"apn","failure":3,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"Unregistered","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"Unregistered","regId":"9"}],"success":40}]}],"payload":{"body":"See you on eleven for some festive cheer.","badge":1,"title":"Christmas drinks are served!"},"settings":{"apn":true,"gcm":true,"wns":false,"apnKeyId":"A","apnTopic":"com.mock","apnTeamId":"A","apnAuthKey":"-","configured":true,"gcmSenderId":"9","wnsClientId":"","gcmServerKey":"g","gcmPackageName":"com.mock","wnsClientSecret":"w","showOnceOnPortal":false,"showAutomatically":true},"subscriptionsCount":500},"requestId":null,"createdAt":"2017-12-14T17:47:24.409Z","updatedAt":"2017-12-14T17:47:30.270Z","userId":null,"appId":21,"dataSourceEntryId":null,"dataSourceId":null},{"id":3416,"type":"job","data":{"result":[{"job":"2151","result":[{"method":"gcm","failure":0,"message":[{"error":null,"regId":"r","messageId":"0:1"},{"error":null,"regId":"r","messageId":"0:1"}],"success":2,"multicastId":[0]},{"method":"apn","failure":11,"message":[{"error":null,"regId":{"device":"d"}},{"error":null,"regId":{"device":"d"}},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"}],"success":26}]}],"payload":{"body":"Maecenas sed diam eget risus varius blandit sit amet non magna.","title":"Purus Fringilla"},"settings":{"apn":true,"gcm":true,"wns":true,"apnKeyId":"A","apnTopic":"com.mock","apnTeamId":"A","apnAuthKey":"-","configured":true,"popupTitle":"App updates and notifications","gcmSenderId":"9","wnsClientId":"ms-app://s-1","gcmServerKey":"g","popupMessage":"You will receive notifications when app updates are available.\nPlease tap on Allow Notifications below to receive notifications on the updates.","gcmPackageName":"com.mock","wnsClientSecret":"w","showOnceOnPortal":false,"showAutomatically":false}},"requestId":null,"createdAt":"2017-12-14T16:10:44.035Z","updatedAt":"2017-12-14T16:10:45.623Z","userId":null,"appId":21,"dataSourceEntryId":null,"dataSourceId":null},{"id":3415,"type":"job","data":{"result":[{"job":"2150","result":[{"method":"apn","failure":15,"message":[{"error":null,"regId":{"device":"d"}},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"},{"error":"DeviceTokenNotForTopic","regId":"9"}],"success":25}]}],"payload":{"body":"Maecenas sed diam eget risus varius blandit sit amet non magna.","title":"Purus Fringilla"},"settings":{"apn":true,"gcm":true,"wns":true,"apnKeyId":"A","apnTopic":"com.mock","apnTeamId":"A","apnAuthKey":"-","configured":true,"popupTitle":"App updates and notifications","gcmSenderId":"9","wnsClientId":"ms-app://s-1","gcmServerKey":"g","popupMessage":"You will receive notifications when app updates are available.\nPlease tap on Allow Notifications below to receive notifications on the updates.","gcmPackageName":"com.mock","wnsClientSecret":"w","showOnceOnPortal":false,"showAutomatically":false}},"requestId":null,"createdAt":"2017-12-14T10:52:41.269Z","updatedAt":"2017-12-14T10:52:42.685Z","userId":null,"appId":21,"dataSourceEntryId":null,"dataSourceId":null}],"query":{"where":{"type":"job","appId":[21,22]},"order":[["createdAt","DESC"]],"limit":5,"offset":0,"raw":true}};
      resolve(data.logs);
    }, 1000);
  });
}

function processNotifications(notifications) {
  _.forEach(notifications, function (n) {
    n.isDeleted = !!n.deletedAt;
    n.status = !!n.deletedAt ? 'deleted' : n.status;
    n.statusText = n.status.charAt(0).toUpperCase() + n.status.slice(1);
  });
}

function getNotifications() {
  if (Fliplet.Env.get('development')) {
    return getMockNotifications();
  }

  var where = {};
  if (notificationsOffsetDate) {
    where = { createdAt: { $lt: notificationsOffsetDate } };
  }

  return Fliplet.API.request({
    method: 'POST',
    url: 'v1/apps/' + appId + '/notifications',
    data: {
      where: where,
      order: 'createdAt',
      direction: 'DESC',
      limit: limit,
      includeDeleted: true,
      includeDrafts: true,
      includeAllScopes: true
    }
  }).then(function (results) {
    return results.notifications || [];
  });
}

function getPushNotifications() {
  var appPages;
  var reportData = {
    jobs: []
  };

  return Fliplet.Pages.get().then(function(pages) {
    appPages = pages;
  }).then(function() {
    if (Fliplet.Env.get('development')) {
      return getMockPushNotifications();
    }

    return Fliplet.App.Logs.get({
      where: {
        type: 'job'
      },
      order: [
        ['createdAt', 'DESC']
      ],
      limit: limit,
      offset: pushNotificationsOffset
    });
  }).then(function(response) {
    var logs = response.logs || [];

    _.remove(logs, function (log) {
      return !log || !_.hasIn(log, 'data.payload');
    });

    logs.forEach(function(log) {
      var logData = {
        createdAt: '',
        title: '',
        message: '',
        recipientsCount: 0,
        deliveredCount: 0,
        deliveryPerct: 0,
        sentGoogle: 0,
        sentApple: 0,
        sentWindows: 0,
        batchesCount: log.data.jobs && log.data.jobs.length,
        batchesSent: log.data.jobs && log.data.jobs.length // this get updated further down
      };

      var apnSuccess = 0;
      var gcmSuccess = 0;
      var wnsSuccess = 0;

      logData.createdAt = moment(log.createdAt).format('MMM Do YYYY, HH:mm');
      logData.title = log.data.payload && log.data.payload.title;
      logData.message = log.data.payload && log.data.payload.body;

      var errors = [];

      if (!log.data.subscriptionsCount) {
        errors.push('NoSubscriptions');
      }

      if (Array.isArray(log.data.result)) {
        logData.batchesSent = log.data.result.length;

        log.data.result.forEach(function(job) {
          if (Array.isArray(job.result)) {
            job.result.forEach(function (result) {
              errors = errors.concat(_.map(result.message, 'error'));

              switch (result.method) {
                case 'apn':
                  if (!_.get(log, 'data.settings.apn')) {
                    errors.push('APNNotSet');
                  }

                  apnSuccess += result.success;
                  logData.sentApple += result.success + result.failure;
                  break;
                case 'gcm':
                  if (!_.get(log, 'data.settings.gcm')) {
                    errors.push('GCMNotSet');
                  }

                  gcmSuccess += result.success;
                  logData.sentGoogle += result.success + result.failure;
                  break;
                case 'wns':
                  wnsSuccess += result.success;
                  logData.sentWindows += result.success + result.failure;
                  break;
              }
            });
          }
        });
      }

      errors = _.uniq(_.compact(errors));

      if (errors.length) {
        logData.errorsDescription = _.compact(errors.map(function (error) {
          switch (error) {
            case 'APNNotSet':
              var notSet = _.compact([
                (!_.get(log, 'data.settings.apnAuthKey') ? 'the certificate has not been set.' : undefined),
                (!_.get(log, 'data.settings.apnKeyId') ? 'the Key ID has not been set.' : undefined),
                (!_.get(log, 'data.settings.apnTeamId') ? 'the Team ID has not been set.' : undefined)
              ]);

              return 'Settings for sending push notifications with Apple (iOS) have not been set: ' + notSet.join(', ') + '.';
            case 'GCMNotSet':
              return 'Settings for sending push notifications with Android (Google Firebase) have not been set.';
            case 'NoSubscriptions':
              return 'One or more devices are not subscribed to receive this push notification.'
            case 'TopicDisallowed':
            case 'DeviceTokenNotForTopic':
              return 'The target bundle identifier (' + _.get(log, 'data.settings.apnTopic') + ') does not match with the one being used by some of the subscribed devices.';
            case 'InvalidProviderToken':
              return 'The APN Key ID, push certificate or Team ID are not valid. Please double check the settings you have set.';
            case 'MismatchSenderId':
              return 'The Sender ID provided for the push notification service does not match the ID used user subscribed to push notifications. Please ensure that the Sender ID is consistent and corresponds to the one used for subscribing to push notifications.';
            case 'NotRegistered':
              return 'Some of the devices subscribed have uninstalled the app.';
            default:
              return error;
          }
        })).join('<br />');
      }

      logData.recipientsCount = log.data.subscriptionsCount;
      logData.deliveredCount = apnSuccess + gcmSuccess + wnsSuccess;
      logData.deliveryPerct = (Math.round(((logData.deliveredCount / logData.recipientsCount) * 100) * 10) / 10) || 0;

      if (log.data.payload.custom && log.data.payload.custom.data) {
        var selectedScreen = _.find(appPages, function(page) {
          return page.id === parseInt(log.data.payload.custom.data.page, 10);
        });
        if (selectedScreen) {
          logData.screenName = selectedScreen.title;
        }

        reportData.jobs.push(logData);
      }

      reportData.jobs.push(logData);
    });

    return Promise.resolve({
      reportData: reportData,
      logs: logs
    });
  });
}

function initializeHandlebars() {
  Handlebars.registerHelper('asset', function (path) {
    if (assetRoot.indexOf('?_=') > -1) {
      return assetRoot.substring(0, assetRoot.indexOf('?_=')) + path + assetRoot.substr(assetRoot.indexOf('?_='));
    }

    return assetRoot + path;
  });
  Handlebars.registerPartial('notificationEntries', Fliplet.Widget.Templates['templates.notificationEntries']());
  Handlebars.registerPartial('pushNotificationEntries', Fliplet.Widget.Templates['templates.pushNotificationEntries']());
}

function removeLoadMoreNotificationsButton() {
  $('#notifications-tab').find('[data-load-more]').remove();
}

function attachObservers() {
  $(document).on('click', '.show-settings', function (e) {
    e.preventDefault();
    $('#settings').show();
    $('.notifications-container').hide();
    Fliplet.Widget.autosize();
  });

  $(document).on('click', '.exit-settings', function (e) {
    e.preventDefault();
    $('#settings').hide();
    $('.notifications-container').show();
    Fliplet.Widget.autosize();
  });

  // Fired from Fliplet Studio when the external save button is clicked
  Fliplet.Widget.onSaveRequest(function() {
    if (!$('#settings-tab.active').length || !$('#settings').is(':visible')) {
      return;
    }

    $('#configuration').submit();
  });

  Fliplet.Hooks.on('notificationSent', function (notification, isUpdate) {
    var firstNotification = false;
    if (!allNotifications.length) {
      firstNotification = true;
    }

    $('#notifications-tab').attr('data-mode', 'list');

    if (isUpdate) {
      updateNotifications(notification);
      return;
    }

    renderNotifications({
      notifications: [notification],
      mode: firstNotification ? 'html' : 'prepend'
    });

    if (firstNotification) {
      removeLoadMoreNotificationsButton();
    }
  });

  Fliplet.Hooks.on('pushNotificationSent', function (response) {
    $('#push-notifications-tab').attr('data-mode', 'list');
    $('#push-notifications-tab [data-view="list"]').html(Fliplet.Widget.Templates['templates.loading']()).addClass('loading');
    pushNotificationsOffset = 0;
    loadPushNotifications();
  });

  $(window).on('resize', Fliplet.Widget.autosize);

  $(document).on('click', '[data-action="new-notification"]', function (e) {
    e.preventDefault();
    setupNewNotificationForm();
    $(this).parents('.tab-pane').attr('data-mode', 'new');
    $('#notification-form .notification-send').html('Review &amp; send notification');
    Fliplet.Widget.autosize();
  });

  $(document).on('click', '[data-show-scope]', function onShowFiltersClick(e) {
    e.preventDefault();

    var id = $(this).parents('[data-id]').data('id');
    var notification = _.find(allNotifications, { id: id });

    if (!notification || !notification.scope) {
      return;
    }

    if (!Array.isArray(notification.scope)) {
      notification.scope = [notification.scope];
    }

    var scopesHtml = notification.scope.map(function (scope) {
      return '<li><code>' + JSON.stringify(scope) + '</code></li>';
    });

    Fliplet.Modal.alert({
      title: 'Custom filters',
      message: '<p>The notification is sent to users whose preference is set to include any of the following:</p><ol>' + scopesHtml.join('') + '</ol>'
    });
  });

  $reportHolder.on('click', '.reports-holder [data-load-more]', function (event) {
    event.preventDefault();
    $(this).remove();
    loadPushNotifications(true);
  });

  $(document).on('click', '#notifications-tab tr[data-id] a[data-action]', function (event) {
    event.preventDefault();
    var action = $(this).data('action');
    switch (action) {
      case 'delete':
        var id = $(this).parents('tr[data-id]').data('id');
        deleteNotification(id).then(function (deleted) {
          if (!deleted) {
            return;
          }

          var notification = _.find(allNotifications, { id: id });
          notification.deletedAt = moment().toISOString();
          updateNotifications([notification]);
        });
        break;
      case 'edit':
        openNotification($(this).parents('tr[data-id]').data('id'));
        break;
    }
  });

  $(document).on('click', '[data-load-more]', function (e) {
    e.preventDefault();

    var $button = $(this);
    var tab = $button.parents('.tab-pane').prop('id');
    var origText = $button.text();
    var load = Promise.resolve();
    $button.text('Loading...').addClass('disabled');

    switch (tab) {
      case 'notifications-tab':
        load = loadNotifications(true);
        break;
      case 'push-notifications-tab':
        load = loadPushNotifications(true);
        break;
    }

    load.then(function () {
      $button.removeClass('disabled').text(origText);
    });
  });

  $('#configuration').on('submit', function(event) {
    event.preventDefault();

    var $submit = $(this).find('[type="submit"]');

    if ($submit.hasClass('disabled')) {
      return;
    }

    $submit.addClass('disabled');

    data.showAutomatically = $('[name="showAutomatically"]').is(':checked');
    data.showOnceOnPortal = $('[name="showOnceOnPortal"]').is(':checked');
    data.popupTitle = $('[name="popup_title"]').val();
    data.popupMessage = $('[name="popup_message"]').val();

    Fliplet.Widget.save(data).then(function() {
      $('.settings-saved-app-msg').fadeIn();
      $submit.removeClass('disabled');
      Fliplet.Widget.autosize();
      hideSavedMessage();
    }).catch(function (error) {
      $submit.removeClass('disabled');
      Fliplet.Modal.alert({
        title: 'Error saving push notification settings',
        message: Fliplet.parseError(error)
      });
    });
  });

  $(document).on('click', '.nav-tabs a[data-toggle="tab"]', function(event) {
    var href = $(this).attr('href');
    var saveButtonLabel = 'Save';

    event.preventDefault();

    $(this).tab('show');
    if ($(href).attr('data-mode') === 'new') {
      $(href).attr('data-mode', 'list');
    }

    Fliplet.Widget.autosize();

    switch (href) {
      case '#notifications-tab':
        saveButtonLabel = '';
        loadNotifications();
        break;
      case '#push-notifications-tab':
        saveButtonLabel = '';
        loadPushNotifications();
        break;
      case '#settings-tab':
        break;
    }

    Fliplet.Studio.emit('widget-save-label-update', {
      text: saveButtonLabel
    });
  });

  $(document).on('click', '.more-details a', function(e) {
    e.preventDefault();
    var _this = $(this);
    var placeHodlerEl = '<div class="report-placeholder-element"></div>';

    if (!$(this).parents('.report-wrapper').hasClass('show-more')) {
      $('.reports-holder').append(placeHodlerEl);
      Fliplet.Widget.autosize();
    }

    setTimeout(function() {
      $('.report-placeholder-element').remove();
      _this.parents('.report-wrapper').toggleClass('show-more');

      if (_this.parents('.report-wrapper').hasClass('show-more')) {
        _this.text('See less details');
      } else {
        _this.text('See more details');
      }
    }, 0);

    // Wait for CSS animation to finish before running
    setTimeout(function() {
      Fliplet.Widget.autosize();
    }, 500);
  });
}

function setupNewNotificationForm() {
  var tab = $('.tab-pane.active').prop('id');
  switch (tab) {
    case 'notifications-tab':
      if ($('.tab-pane.active [data-view="new"]').html().trim() !== '') {
        if(uiNotification){
          uiNotification.resetNotificationForm();
          return;
        }
      }

      $('#notifications-tab [data-view="new"]').html(Fliplet.Widget.Templates['templates.newNotification']());
      uiNotification = new UINotification();
      break;
    case 'push-notifications-tab':
      if ($('.tab-pane.active [data-view="new"]').html().trim() !== '') {
        if(uiPushNotification){
          uiPushNotification.resetNotificationForm();
          return;
        }
      }

      $('#push-notifications-tab [data-view="new"]').html(Fliplet.Widget.Templates['templates.newPushNotification']());
      uiPushNotification = new UIPushNotification();
      break;
  }
}

function readNotification(id) {
  // @TODO Find notification from allNotifications as Promise
  return Promise.resolve(_.find(allNotifications, { id: id }));
}

function openNotification(id) {
  setupNewNotificationForm();
  // @TODO Load form fields
  readNotification(id).then(function(notification) {
    if (!notification) {
      return;
    }

    uiNotification.loadNotificationForm(notification);
    $('#notifications-tab').attr('data-mode', 'new');
  });
}

function deleteNotification(id) {
  return Fliplet.Modal.confirm({
    size: 'medium',
    title: 'Delete notification',
    message: 'Are you sure you want to delete this notification?',
    buttons: {
      confirm: {
        label: 'Delete notification',
        className: 'btn-danger'
      }
    }
  }).then(function (confirmed) {
    if (!confirmed) {
      return Promise.resolve(false);
    }

    var notifications = Fliplet.Notifications.init();
    return notifications.remove(id).then(function () {
      return Promise.resolve(true);
    });
  });
}

function renderNotifications(options) {
  options = options || {};
  if (!$('#notifications-tab.active[data-mode="list"]').length) {
    return;
  }

  var notifications = options.notifications || [];
  if (!Array.isArray(notifications)) {
    notifications = [notifications];
  }

  processNotifications(notifications);

  var src = ['append', 'prepend', 'return'].indexOf(options.mode) > -1
    ? Fliplet.Widget.Templates['templates.notificationEntries']()
    : Fliplet.Widget.Templates['templates.notifications']();
  var tpl = Handlebars.compile(src);
  var html = tpl(notifications);

  if (options.mode === 'return') {
    return html;
  }

  if (notifications.length) {
    allNotifications = _.uniqBy(_.concat(allNotifications, notifications), 'id');
    notificationsOffsetDate = _.min(_.map(allNotifications, 'createdAt'));
  }

  $('#notifications-tab [data-view="list"]').removeClass('loading');
  if (!notifications.length) {
    if (options.mode === 'append') {
      removeLoadMoreNotificationsButton();
      Fliplet.Widget.autosize();
      return;
    }

    if (options.mode !== 'prepend') {
      $('#notifications-tab [data-view="list"]').html(Fliplet.Widget.Templates['templates.noNotifications']());
        Fliplet.Widget.autosize();
      return;
    }
  }

  var $html = $(html);
  $html.find('[data-toggle="tooltip"]').tooltip();

  switch (options.mode) {
    case 'append':
      $('#notifications-tab [data-view="list"] tbody').append($html);
      break;
    case 'prepend':
      $('#notifications-tab [data-view="list"] tbody').prepend($html);
      break;
    case 'html':
    default:
      $('#notifications-tab [data-view="list"]').html($html);
      break;
  }

  if (options.loadMore === false) {
    removeLoadMoreNotificationsButton();
  }

  Fliplet.Widget.autosize();
}

function updateNotifications(notifications) {
  notifications = notifications || [];
  if (!Array.isArray(notifications)) {
    notifications = [notifications];
  }

  var updates = [];

  processNotifications(notifications);
  _.forEach(notifications, function (n) {
    var i = _.findIndex(allNotifications, { id: n.id });
    if (i < 0) {
      return;
    }

    allNotifications[i] = n;
    updates.push({
      id: n.id,
      html: renderNotifications({
        notifications: n,
        mode: 'return'
      })
    });
  });

  _.forEach(updates, function (u) {
    $('#notifications-tab tr[data-id="' + u.id + '"]').replaceWith(u.html).find('[data-toggle="tooltip"]').tooltip();
  });
}

function loadNotifications(append) {
  if (!append && !$('#notifications-tab [data-view="list"]').hasClass('loading')) {
    return Promise.resolve();
  }

  return getNotifications()
    .then(function (notifications) {
      renderNotifications({
        notifications: notifications,
        mode: append ? 'append' : 'replace',
        loadMore: notifications.length >= limit
      });
    });
}

function loadPushNotifications(append) {
  if (!append && !$('#push-notifications-tab [data-view="list"]').hasClass('loading')) {
    return Promise.resolve();
  }

  return getPushNotifications()
    .then(function(results) {
      if (!$('#push-notifications-tab.active[data-mode="list"]').length) {
        return [];
      }

      results = results || {};
      var reportData = results.reportData;
      var logs = results.logs;
      var src = append
        ? Fliplet.Widget.Templates['templates.pushNotificationEntries']()
        : Fliplet.Widget.Templates['templates.pushNotifications']();
      var tpl = Handlebars.compile(src);

      pushNotificationsOffset += logs.length;

      $('#push-notifications-tab [data-view="list"]').removeClass('loading');
      if (!reportData.jobs.length) {
        if (append) {
          $('#push-notifications-tab').find('[data-load-more]').remove();
          Fliplet.Widget.autosize();
          return;
        }

        $('#push-notifications-tab [data-view="list"]').html(Fliplet.Widget.Templates['templates.noPushNotifications']());
        Fliplet.Widget.autosize();
        return;
      }

      var $html = $(tpl(reportData));
      $html.find('[data-toggle="tooltip"]').tooltip();
      if (append) {
        $('#push-notifications-tab [data-view="list"] .reports-holder').append($html);
      } else {
        $('#push-notifications-tab [data-view="list"]').html($html);
      }
    })
    .then(function () {
      Fliplet.Widget.autosize();
    });
}

function init() {
  // loadNotifications();
  Fliplet.Studio.emit('widget-save-label-update', {
    text: ''
  });
}

initializeHandlebars();
attachObservers();
init();

Fliplet.Widget.autosize();
