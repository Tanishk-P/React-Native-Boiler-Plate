/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen} from './src/screens/Home/home-screen';
import {NetworkLoggerScreen} from './src/screens/Network-Logger/network.logger-screen';
import {AppStackParams} from './src/utils/app-stack-params-list';

export function App() {
  const Stack = createStackNavigator<AppStackParams>();

  const ScreenNavigator = (): JSX.Element => (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ScreenNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
