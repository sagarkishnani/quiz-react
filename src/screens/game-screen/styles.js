/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, fontSize, margin} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexGrow: 0.4,
  },
  confirmedText: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    color: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: margin.md,
    color: colors.text,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: margin.md,
    marginVertical: margin.md,
  },
});
