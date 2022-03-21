/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize, margin, colors, fontFamily} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTitle: {
    fontFamily: fontFamily.primaryFont,
    fontSize: fontSize.title,
    textAlign: 'center',
    marginVertical: margin.md,
    color: colors.text,
  },
  inputContainer: {
    flex: 1,
    flexGrow: 0.6,
    marginHorizontal: margin.medium,
    marginVertical: margin.medium,
  },
  label: {
    fontFamily: fontFamily.textFont,
    fontSize: fontSize.text,
    color: colors.text,
    marginBottom: margin.sm,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexGrow: 0.18,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: margin.md,
  },
  containerConfirmed: {
    flex: 1,
    flexGrow: 0.2,
    justifyContent: 'center',
    marginVertical: margin.md,
  },
  confirmedText: {
    fontFamily: fontFamily.primaryFont,
    fontSize: fontSize.title,
    color: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
