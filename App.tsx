import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen} from './src/screens/Home/home-screen';
import {NetworkLoggerScreen} from './src/screens/Network-Logger/network.logger-screen';
import navigationService from './src/services/navigation.service';
import {AppStackParams} from './src/utils/app-stack-params-list';

const Stack = createStackNavigator<AppStackParams>();
const Tab = createBottomTabNavigator<AppStackParams>();

const ScreenNavigator = (): JSX.Element => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={TabNavigator}
      options={{
        header: () => null,
      }}
    />
    <Stack.Screen
      name="NetworkLoggerScreen"
      component={NetworkLoggerScreen}
      options={{
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const TabNavigator = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{tabBarShowLabel: false}}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        header: () => null,
        tabBarLabel: 'Home',
      }}
    />
  </Tab.Navigator>
);

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationService.assignNavigator}>
        <ScreenNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
