import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import navigationService from '../../services/navigation.service';
import {splashScreenStyles} from '../../styles/splash-screen.styles';
import {textStyles} from '../../styles/text.styles';

export function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      navigationService.navigateAndClear('HomeScreen');
    }, 2000);
  }, []);

  return (
    <View style={splashScreenStyles.view}>
      <Text style={textStyles.header}>{'React Native Boiler Plate'}</Text>
    </View>
  );
}
