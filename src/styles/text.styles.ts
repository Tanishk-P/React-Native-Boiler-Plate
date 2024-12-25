import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

export const textStyles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 500,
    color: colors.headerTextColor,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.baseTextColor,
  },
});
