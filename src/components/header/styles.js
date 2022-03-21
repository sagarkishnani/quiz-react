/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    backgroundColor: colors.primary,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    fontFamily: fontFamily.primaryFont,
    //Quitar font-weight para que funcione el font-family
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});
