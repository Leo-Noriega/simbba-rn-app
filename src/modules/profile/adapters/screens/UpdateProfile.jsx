import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from "@rneui/themed";

export default function UpdateProfile() {
    return(
        <View style={styles.container}>
            <Text>
                Actualizar información
            </Text>
            <Text>
                Nuevo nombre:
            </Text>
            <TextInput placeholder={"Nombre"}/>
            <Text>
                Nueva contraseña:
            </Text>
            <TextInput placeholder={"Contraseña"}/>
            <Text>
                Repetir contraseña:
            </Text>
            <TextInput placeholder={"Repetir contraseña"}/>
            <Button
                title={"Guardar"}
                uppercase
                size={"lg"}
                color={"#419277"}
                buttonStyle={{
                    borderRadius: 30
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