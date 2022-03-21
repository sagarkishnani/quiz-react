/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, margin} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: margin.md,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    color: colors.primary,
    marginBottom: margin.sm,
    fontSize: 30,
    alignSelf: 'center',
  },
});
