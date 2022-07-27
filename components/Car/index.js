import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Button from '../Button';

const Car = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.carImage}/>
        <View style={styles.carTitles}>
          <Text style={styles.titlesHeader}>{name}</Text>
          <Text style={styles.titlesSubtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA}>
            {taglineCTA}
            </Text>
            </Text>
        </View>  

        <View style={styles.buttonContainer}>
            <Button 
            text="Custom Order" 
            type='primary' 
            onPress={() => {
                console.warn('Primary Button pressed');
            }}
            />
            <Button 
            text="Check Inventory" 
            type='secondary'
            onPress={() => {
                console.warn('Secondary Button pressed');
            }}
            />
        </View>

      </View>
  );
}

export default Car;