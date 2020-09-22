import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './BottomTabNavigator';
import {
    HomeNavigatorParams,
    AccountNavigatorParams,
    SearchNavigatorParams,
    CreateNavigatorParams,
    NotificationNavigatorParams
} from './AppParamList';
import { AppRoute } from './AppRoute';
import {HomeDetailScreen} from '@screens';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
    [AppRoute.APP]: undefined;
    [AppRoute.HOMEDETAIL]: {
        ID:string;
        location: string;
        star:number;
        totalRate: number;
        phone: string;
        time: string;
        likeByMe:boolean;
      };
}
    & HomeNavigatorParams
    & SearchNavigatorParams
    & CreateNavigatorParams
    & NotificationNavigatorParams
    & AccountNavigatorParams;

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (props: Partial<StackNavigatorProps>): React.ReactElement => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={AppRoute.APP}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
                {...props}
                headerMode='none'
            >
                <Stack.Screen name={AppRoute.APP} component={BottomTabsNavigator} options={{ gestureEnabled: false }} />
                <Stack.Screen name={AppRoute.HOMEDETAIL} component={HomeDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}