import React from 'react';
import {View, Text, Pressable } from 'react-native';
import styles from './styles';

const Button = (props) => {

    const { type, text, onPress } = props;
      
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const color = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.buttonContainer}>
        <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()}
        > 
            <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
        </Pressable>
    </View>
  );
}

export default Button;