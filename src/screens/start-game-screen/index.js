/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from '../start-game-screen/styles';

import Header from '../../components/header/index';
import Card from '../../components/card';
import Input from '../../components/input';

//Renderizado condicional de acuerdo a la plataforma
const isIOS = Platform.OS === 'ios';

const StartGameScreen = ({onStartGame}) => {
  const [inputValue, setInputValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleOnChange = text => {
    //validación para que solo ingrese números del 0 al 9
    setInputValue(text.replace(/[^0-9]/g, ''));
  };
  const handlerResetInput = () => {
    setInputValue('');
    setConfirmed(false);
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputValue('');
  };

  const confirmedOutput = confirmed ? (
    <Card>
      <Text style={styles.cardTitle}>Tu selección</Text>
      <Text style={styles.confirmedText}>{selectedNumber}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Empezar Juego"
          onPress={() => onStartGame(selectedNumber)}
          color="#2C43D3"
        />
      </View>
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={isIOS ? '' : 'height'}
        style={styles.container}>
        <View style={styles.container}>
          <Header title="The Guessing Game" />
          {/* Reemplazando el componente View por un componente personalizado Card */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Empezar Juego</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Elija un número</Text>
              <Input
                // style={styles.input} usar solo si deseo cambiar algunas propiedades, pero heredar el componente
                blurOnSubmit
                autoCapitalize="none"
                keyboardType="numeric"
                placeholder=""
                placeholderTextColor={'#212121'}
                maxLength={2}
                handleOnChange={value => handleOnChange(value)}
                returnKeyType="done"
                value={inputValue}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                color="#2C43D3"
                title="Limpiar"
                onPress={() => handlerResetInput()}
              />
              <Button
                color={'#2C43D3'}
                title="Confirmar"
                onPress={() => handleConfirmInput()}
              />
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
