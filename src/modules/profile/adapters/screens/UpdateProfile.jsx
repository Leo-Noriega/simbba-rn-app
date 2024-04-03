import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Icon } from "@rneui/base";
import AxiosClient from "../../../../config/http-client/axios-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../../../../kernel/components/CustomAlert";

export default function UpdateProfile() {

    // Inicio de alerta
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertInfo, setAlertInfo] = useState({ title: '', message: '' });

    const showCustomAlert = (title, message) => {
        setAlertInfo({ title, message });
        setAlertVisible(true);
    };
    // Fin de alerta

    const [showPassword, setShowPassword] = useState(false);

    const [session, setSession] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const storedSession = JSON.parse(await AsyncStorage.getItem("session"));
            setSession(storedSession);
            setMail(storedSession?.user?.mail);
        };
        fetchSession();
    }, []);



    // Inicio de Cambio de contraseña
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState("");
    const changePassword = async () => {
        if (password.length > 0) {
            setShowErrorMessage("");
            console.log(mail);
            console.log(password);
            try {
                const response = await AxiosClient.post("api/user/change-password", {
                    mail: mail,
                    password: password,
                });
                if (response.status === "OK") {
                    showCustomAlert("¡Contraseña actualizada!", "Has actualizado tu contraseña correctamente");
                } else {
                    showCustomAlert('Error', 'No se ha podido actualizar tu contraseña');
                    console.log(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    // Fin de Cambio de contraseña

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Actualizar información
            </Text>
            <Text style={styles.text}>
                Nueva contraseña:
            </Text>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    placeholder={"Contraseña"}
                    style={styles.passwordInput}
                    onChangeText={(text) => setPassword(text)}
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
                onPress={changePassword}
                titleStyle={styles.buttonTitle}
            />
            <CustomAlert
                visible={alertVisible}
                title={alertInfo.title}
                message={alertInfo.message}
                onConfirm={() => setAlertVisible(false)}
                onCancel={() => setAlertVisible(false)}
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
});
