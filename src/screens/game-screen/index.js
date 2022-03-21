/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import Card from '../../components/card';
import Header from '../../components/header';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return rndNum;
};

const GameScreen = ({userOptions}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOptions),
  );
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <Card style={styles.cardContainer}>
        <Text style={styles.cardTitle}>La suposición del oponente</Text>
        <Text style={styles.confirmedText}>{currentGuess}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Menor" color="#2C43D3" onPress={() => null} />
          <Button title="Mayor" color="#2C43D3" onPress={() => null} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
