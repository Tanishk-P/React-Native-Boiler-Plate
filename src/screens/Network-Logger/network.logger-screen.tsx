import React from 'react';
import {SafeAreaView} from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import {safeAreaStyles} from '../../styles/safeArea.styles';

export function NetworkLoggerScreen(): JSX.Element {
  return (
    <SafeAreaView style={safeAreaStyles.fullScreen}>
      <NetworkLogger theme="dark" />;
    </SafeAreaView>
  );
}
