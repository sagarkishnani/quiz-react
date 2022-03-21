/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, margin} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexGrow: 0.4,
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginHorizontal: 30,
    marginTop: margin.md,
    borderRadius: 20,
    //IOS SHADOW
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});
