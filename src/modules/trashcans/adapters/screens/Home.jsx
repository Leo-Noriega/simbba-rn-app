import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button} from "@rneui/themed";

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            {/*
            TODO: Cards dinámicas
            Preguntarle a Mireles si esto es mejor hacer el componente completo
            individual en su propio archivo y ya nada mas llamarlo las veces que se
            requira para lo dinámico si no, la neta no se me ocurre otra forma
            */}
            <Text>HOME</Text>
            <Button
                title={"Simulando que le picas a un bote"}
                onPress={() => {
                    navigation.navigate("Bote Home")
                }}
            />
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