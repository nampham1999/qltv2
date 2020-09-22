import {AppNavigatorParams} from './AppNavigator';
import {AppRoute} from './AppRoute';

export type BottomTabsNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.SEARCH]: undefined;
  [AppRoute.CREATE]: undefined;
  [AppRoute.NOTIFICATION]: undefined;
  [AppRoute.ACCOUNT]: undefined;
};

export type HomeNavigatorParams = {
  [AppRoute.HOME]: undefined;
};

export type SearchNavigatorParams = {
  [AppRoute.SEARCH]: undefined;
};

export type CreateNavigatorParams = {
  [AppRoute.CREATE]: undefined;
};

export type NotificationNavigatorParams = {
  [AppRoute.NOTIFICATION]: undefined;
};

export type AccountNavigatorParams = {
  [AppRoute.ACCOUNT]: undefined;
};
