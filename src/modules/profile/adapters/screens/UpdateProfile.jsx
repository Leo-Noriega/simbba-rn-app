import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Icon } from "@rneui/base";

export default function UpdateProfile({ navigation }) {
    const [showPassword, setShowPassword] = useState(false)
    const regresar = () => {
        navigation.navigate('Mi Perfil');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Actualizar información
            </Text>
            <Text style={styles.text}>
                Nuevo nombre:
            </Text>
            <TextInput placeholder={"Nombre"} style={styles.input} />
            <Text style={styles.text}>
                Nueva contraseña:
            </Text>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    placeholder={"Contraseña"}
                    style={styles.passwordInput}
                    secureTextEntry={!showPassword} />
                <Icon
                    type="material-community"
                    name={showPassword ? "eye" : "eye-off"}
                    color="#7c7c7c"
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                />
            </View>
            <Text style={styles.text}>
                Repetir contraseña:
            </Text>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    placeholder={"Repetir contraseña"}
                    style={styles.passwordInput}
                    secureTextEntry={!showPassword} />
                <Icon
                    type="material-community"
                    name={showPassword ? "eye" : "eye-off"}
                    color="#7c7c7c"
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.icon}
                />
            </View>
            <Button
                title={"Guardar"}
                uppercase
                size={"lg"}
                color={"#419277"}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => regresar()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#9B9B9B",
        textAlign: 'left',
        width: '80%',
        marginBottom: 40,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        width: "80%",
        marginBottom: 10,
    },
    input: {
        width: "80%",
        fontSize: 18,
        height: 60,
        borderColor: "#C8C8C8",
        backgroundColor: "#F4F9FF",
        borderWidth: 1,
        marginBottom: 30,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontWeight: 'bold'
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginBottom: 30,
        borderColor: "#C8C8C8",
        backgroundColor: "#F4F9FF",
        borderWidth: 1,
        borderRadius: 5,
    },
    passwordInput: {
        flex: 1,
        fontSize: 18,
        height: 60,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 30,
        width: "65%",
        padding: 15,
        alignItems: "center",
        marginTop: 20
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },
    icon: {
        paddingHorizontal: 15
    }
})
