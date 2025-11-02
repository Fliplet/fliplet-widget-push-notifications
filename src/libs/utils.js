/**
 * Merges a notification object with default values
 * @param {Object} notification - The notification object to merge
 * @param {Object} defaults - The default notification object
 * @returns {Object} Merged notification object
 */
export function mergeNotificationDefaults(notification, defaults) {
  var notificationData = notification && notification.data ? notification.data : {};
  var notificationMetadata = notificationData._metadata || {};

  return Object.assign({}, defaults, notification, {
    data: Object.assign({}, defaults.data, notificationData, {
      _metadata: Object.assign({}, defaults.data._metadata, notificationMetadata)
    })
  });
}
