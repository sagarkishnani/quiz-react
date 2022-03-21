/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

//Children retorna a todos los hijos del componente (pueden ser varios componentes)
const Card = ({children, style}) => {
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

export default Card;
