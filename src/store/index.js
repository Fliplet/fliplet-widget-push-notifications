import Cookies from 'js-cookie';

const COOKIE = {
  showTimezone: '_show_timezone'
};
const COOKIE_EXPIRE_DAYS = 30;

// Define here the initial state of the app
export function getDefaultNotification() {
  return {
    data: {
      title: '',
      message: '',
      navigate: {},
      audience: '',
      _metadata: {
        filters: [],
        schedule: 'now',
        notes: ''
      }
    }
  };
}

export const state = {
  appPages: [],
  view: 'list',
  notification: getDefaultNotification(),
  assetRoot: location.origin,
  pageNumber: 1, // 1-based
  showTimezone: Cookies.get(COOKIE.showTimezone) === 'true'
};

export function setAppPages(appPages) {
  state.appPages = appPages;
}

export function getAppPages() {
  return state.appPages;
}

export function getView() {
  return state.view;
}

export function setView(view) {
  if (['list', 'form'].indexOf(view) === -1) {
    return;
  }

  state.view = view;
}

export function setNotification(notification) {
  state.notification = _.defaultsDeep(notification, getDefaultNotification());
}

export function getNotification() {
  return state.notification;
}

export function getNotificationLinkAction() {
  return _.get(state.notification, 'data.navigate.action', '');
}

export function getPageNumber() {
  return state.pageNumber || 1;
}

export function setPageNumber(number) {
  state.pageNumber = Math.max(1, parseInt(number, 10) || 1);
}

export function setAssetRoot(url) {
  state.assetRoot = url || location.origin;
}

export function getAssetRoot() {
  return state.assetRoot;
}

export function getShowTimezone() {
  return state.showTimezone;
}

export function setShowTimezone(show) {
  state.showTimezone = !!show;

  Cookies.set(COOKIE.showTimezone, state.showTimezone, {
    expires: COOKIE_EXPIRE_DAYS
  });
}
