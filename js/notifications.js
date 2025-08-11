Fliplet.Widget.register('PushNotifications', function () {
  var IOS_BACKGROUND_TRANSITION_DELAY = 300;
  var id = $('[data-push-notification-id]').data('push-notification-id');
  var data = Fliplet.Widget.getData(id);
  var key = 'push-allow';
  var $popup = $('.popup-screen');
  var askPromise;

  var waitForPageViewHooks = new Promise(function (resolve) {
    var appHooks = Fliplet.Env.get('appHooks') || [];
    var hasPageHook = appHooks.some(function (hook) {
      return hook.run && hook.run.indexOf('beforePageView') !== -1;
    });

    if (!hasPageHook) {
      return resolve();
    }

    Fliplet.Hooks.on('beforePageViewHooksSuccess', resolve);
  });

  if (!data || !data.showOnceOnPortal) {
    key += '-' + Fliplet.Env.get('appId');
  }

  function isConfigured() {
    return (Fliplet.Env.is('web') && Modernizr.pushnotification)
      || (Fliplet.Env.is('native'));
  }

  if (!data || !isConfigured()) {
    removeFromDom();
  }

  function removeFromDom() {
    $popup.remove();
  }

  function dismiss() {
    $popup.removeClass('ready');
  }

  function markAsSeen(val) {
    return Fliplet.Storage.set(key, val + '-' + Date.now());
  }

  /**
   * Inits the push subscription service so incoming notifications are handled.
   * @param {*} subscriptionDetails - Object with { id, token } or just the ID string depending on the caller
   */
  function initPushNotifications(subscriptionDetails) {
    var subscriptionId = subscriptionDetails.id || subscriptionDetails;

    /**
     * if we have subscribed successfully, get the push notification instance
     * and add the event handlers on it
     */
    var push = Fliplet.User.getPushNotificationInstance(data);

    if (push) {
      if (subscriptionId) {
        if (subscriptionDetails.token) {
          push.on('registration', function (data) {
            if (data.registrationId === subscriptionDetails.token) {
              return; // token hasn't changed
            }

            // update subscription with new token
            Fliplet.User.updateSubscription({
              token: data.registrationId
            });
          });
        }

        push.on('notification', function (data) {
          /**
           * Support for the new version of the native push component (requires framework 4.3.0+)
           */
          if (data && data.additionalData && data.additionalData.version === 2) {
            if (data.additionalData.opened) {
              Fliplet.Native.Notifications.handle(data.additionalData.customData);
            } else if (data.additionalData.foreground) {
              Fliplet.Hooks.run('pushNotification', data);
            } else if (!data.additionalData.coldstart) {
              Fliplet.Hooks.run('pushNotificationWake', data);
            }

            return;
          }

          /**
           * This hook fires when a push notification is received while the app is open.
           * Reject the hook to avoid displaying a local notification.
           */
          Fliplet.Hooks.run('pushNotification', data).then(function () {
            if (data.additionalData) {
              if (data.additionalData.foreground) {
                handleForegroundNotification(data);

                return;
              }

              /**
               * background notifications seem to open the application quite fast
               * and sometimes the transition is not applied
               * the 300ms delay we have introduced here should allow for it to animate
               */
              Fliplet.Native.Notifications.handle(
                data.additionalData.customData,
                Modernizr.ios && !data.additionalData.coldstart && !data.additionalData.foreground
                  ? IOS_BACKGROUND_TRANSITION_DELAY
                  : null
              );
            }
          });
        });
      }
    }

    return push;
  }

  function subscribeUser() {
    return Fliplet.User.subscribe(data);
  }

  function handleForegroundNotification(data) {
    Fliplet.Navigator.Notifications.schedule({
      title: data.title,
      text: data.message,
      foreground: true,
      data: data.additionalData
    }, function () {
      // notification has been scheduled
    }, this, { skipPermission: true });
  }

  function ask(options) {
    const params = new URLSearchParams(window.location.search);
    if (params.has('headless')) {
      return;
    }

    options = options || {};

    if (!data || !isConfigured()) {
      return Promise.reject({
        code: 0,
        message: T('widgets.pushNotifications.error.configureSettings')
      });
    }

    if (Fliplet.Env.get('interact')) {
      return Promise.reject({
        code: -1,
        message: 'Push notifications are not supported in Fliplet Studio while in edit mode.'
      });
    }

    if (askPromise) {
      return askPromise;
    }

    // Wait for pageView hooks before asking. This ensures that when pageView hooks navigate away
    // from the page we don't display the push notifications popup.
    askPromise = waitForPageViewHooks.then(function () {
      return Fliplet.Storage.get(key);
    }).then(function (alreadyShown) {
      // When forced by the UI we skip the popup and also mark it as seen
      if (options.userInteraction) {
        return markAsSeen('allow').then(function () {
          return false;
        });
      }

      if (!alreadyShown || typeof alreadyShown !== 'string') {
        return true;
      }

      // If the user already allowed, just subscribe it
      if (alreadyShown.indexOf('allow') === 0) {
        return false;
      }

      return Promise.reject({
        code: 4,
        message: T('widgets.pushNotifications.error.disallowed')
      });
    }).then(function (displayPopup) {
      if (!displayPopup) {
        return subscribeUser().then(function (subscriptionId) {
          initPushNotifications(subscriptionId);

          return subscriptionId;
        });
      }

      return new Promise(function (resolve, reject) {
        $popup.find('[data-allow]').one('click', function () {
          dismiss();

          markAsSeen('allow').then(function () {
            return subscribeUser();
          }).then(function (subscriptionId) {
            initPushNotifications(subscriptionId);

            return subscriptionId;
          }).then(resolve).catch(function (err) {
            console.error(err);

            reject({
              code: 1,
              message: err
            });

            askPromise = undefined;
          });
        });

        $popup.find('[data-dont-allow]').one('click', function () {
          dismiss();
          markAsSeen('disallow').then(function () {
            reject({
              code: 2,
              message: T('widgets.pushNotifications.error.disallowed')
            });

            askPromise = undefined;
          }).catch(reject);
        });

        $popup.find('[data-remind]').one('click', function () {
          dismiss();
          markAsSeen('remind').then(function () {
            reject({
              code: 3,
              message: T('widgets.pushNotifications.error.later')
            });

            askPromise = undefined;
          }).catch(reject);
        });

        $popup.addClass('ready');
      });
    });

    return askPromise;
  }

  /**
   * Once this widget loads, given it is has been configured in the settings
   * initialize the component. If it's marked for showing the popup automatically
   * then also ask for push permission straight away .
   */
  if (isConfigured()) {
    Fliplet().then(function () {
      return Fliplet.User.getSubscriptionDetails();
    }).then(function (subscriptionDetails) {
      /**
       * if the user isn't subscribed already and the push widget is set to show automatically - show it
       */
      if (subscriptionDetails) {
        initPushNotifications(subscriptionDetails);
      } else if (data.showAutomatically) {
        ask();
      }
    });
  }

  return {
    ask: ask,
    reset: function () {
      askPromise = undefined;

      return Fliplet.Storage.remove(key);
    },
    isConfigured: isConfigured
  };
});

Fliplet.Widget.instance('push-notification', function () {
  var $container = $(this);

  Fliplet().then(function () {
    $container.translate();
  });
});
