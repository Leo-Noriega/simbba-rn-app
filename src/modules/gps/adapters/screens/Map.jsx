import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "@rneui/themed";
import MapView from 'react-native-maps';

const INITIAL_REGION = {
    latitude: 18.850500661593863,
    longitude: -99.20063415374794,
    latitudeDelta: 0.004,
    longitudeDelta: 0.005
}

export default function Map({navigation}) {
    return (
        <View style={{flex: 1}}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={INITIAL_REGION}
            />
            <Button
                title={"Simulando que le picas a un bote"}
                onPress={() => {
                    navigation.navigate("Bote Map")
                }}
            />
        </View>
    )
}
