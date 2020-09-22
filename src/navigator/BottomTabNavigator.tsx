import React from 'react';
import { View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeNavigatorParams,
  SearchNavigatorParams,
  CreateNavigatorParams,
  NotificationNavigatorParams,
  AccountNavigatorParams,
} from './AppParamList';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsNavigatorParams} from './AppParamList';
import {AppRoute} from './AppRoute';
import {Colors} from '@shared';
import {
  HomeScreen,
  AccountScreen,
  CreateScreen,
  SearchScreen,
  NotificationScreen,
} from '@screens';
import {Icon, Badge} from 'react-native-elements';
import {Create} from '@components';

const BottomTab = createBottomTabNavigator<BottomTabsNavigatorParams>();

const HomStack = createStackNavigator<HomeNavigatorParams>();
const SearchStack = createStackNavigator<SearchNavigatorParams>();
const CreateStack = createStackNavigator<CreateNavigatorParams>();
const NotificationStack = createStackNavigator<NotificationNavigatorParams>();
const AccountStack = createStackNavigator<AccountNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => {
  return (
    <HomStack.Navigator headerMode="none" initialRouteName={AppRoute.HOME}>
      <HomStack.Screen  name={AppRoute.HOME} component={HomeScreen} />
    </HomStack.Navigator>
  );
};

export const SearchNavigator = (): React.ReactElement => {
  return (
    <SearchStack.Navigator headerMode="none" initialRouteName={AppRoute.SEARCH}>
      <SearchStack.Screen name={AppRoute.SEARCH} component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export const CreateNavigator = (): React.ReactElement => {
  return (
    <CreateStack.Navigator headerMode="none" initialRouteName={AppRoute.CREATE}>
      <CreateStack.Screen name={AppRoute.CREATE} component={CreateScreen} />
    </CreateStack.Navigator>
  );
};

export const NotificationNavigator = (): React.ReactElement => {
  return (
    <NotificationStack.Navigator
      headerMode="none"
      initialRouteName={AppRoute.NOTIFICATION}>
      <NotificationStack.Screen
        name={AppRoute.NOTIFICATION}
        component={NotificationScreen}
      />
    </NotificationStack.Navigator>
  );
};

export const AccountNavigator = (): React.ReactElement => {
  return (
    <AccountStack.Navigator
      headerMode="none"
      initialRouteName={AppRoute.ACCOUNT}>
      <AccountStack.Screen name={AppRoute.ACCOUNT} component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

export const BottomTabsNavigator = (): React.ReactElement => {
  return (
    <React.Fragment>
      <BottomTab.Navigator
        initialRouteName={AppRoute.HOME}
        tabBarOptions={{
          activeTintColor: Colors.tabBar.Active,
          showLabel: false
        }}>
        <BottomTab.Screen
          name={AppRoute.HOME}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name={'home'} type={'foundation'} color={color} size={25} />
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.SEARCH}
          component={SearchNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name={'ios-search'}
                type={'ionicon'}
                size={25}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.CREATE}
          component={CreateNavigator}
          options={{
            tabBarIcon: () => <Create />,
          }}
        />
        <BottomTab.Screen
          name={AppRoute.NOTIFICATION}
          component={NotificationNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <View>
                <Badge
                  badgeStyle={{width: 8, height: 8}}
                  status="success"
                  containerStyle={{
                    position: 'absolute',
                    top: -1,
                    right: -2,
                    zIndex: 1,
                  }}
                />
                <Icon name={'square-o'} type={'font-awesome'} color={color} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.ACCOUNT}
          component={AccountNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name={'user'} color={color} size={25} type={'feather'} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </React.Fragment>
  );
};
