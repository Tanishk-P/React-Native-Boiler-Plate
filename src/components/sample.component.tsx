// Here is your sample component
import React from 'react';
import {Text, View} from 'react-native';
import {textStyles} from '../styles/text.styles';

interface Props {
  label: string;
}

export const SampleComponent = ({label}: Props) => {
  return (
    <View>
      <Text style={textStyles.header}>Hey, I'm Sample label</Text>
      <Text style={textStyles.text}>{label}</Text>
    </View>
  );
};
