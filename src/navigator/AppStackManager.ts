import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {AppRoute} from './AppRoute';
import {
  BottomTabsNavigatorParams,
  HomeNavigatorParams,
  CreateNavigatorParams,
  SearchNavigatorParams,
  NotificationNavigatorParams,
  AccountNavigatorParams,
} from './AppParamList';
import { AppNavigatorParams } from './AppNavigator';

// BottomTabs
export type HomeTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.HOME
>;
export type SearchTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.SEARCH
>;
export type CreateTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.CREATE
>;
export type NotificationTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.NOTIFICATION
>;
export type AccountTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.ACCOUNT
>;

//Home
export interface HomeDetailProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.HOMEDETAIL>;
  route: RouteProp<AppNavigatorParams, AppRoute.HOMEDETAIL>;
}
