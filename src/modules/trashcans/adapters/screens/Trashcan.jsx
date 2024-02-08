import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default function Trashcan() {
    return (
        <View style={styles.container}>
            <Text>
                HOLA ESTE ES TRASHCAN
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})