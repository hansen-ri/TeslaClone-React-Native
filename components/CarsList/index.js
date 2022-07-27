import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import styles from "./styles";
import carsList from "./carsList";
import Car from "../Car";

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={carsList}
                renderItem={({item}) => <Car car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarsList;