/**
 * Merges a notification object with default values
 * @param {Object} notification - The notification object to merge
 * @param {Object} defaults - The default notification object
 * @returns {Object} Merged notification object
 */
export function mergeNotificationDefaults(notification, defaults) {
  return {
    ...defaults,
    ...notification,
    data: {
      ...defaults.data,
      ...notification?.data,
      _metadata: {
        ...defaults.data._metadata,
        ...notification?.data?._metadata
      }
    }
  };
}
