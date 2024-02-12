import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { Button, Icon } from '@rneui/base';

export function RecoverLogin({ navigation }) {
    const handleEnviar = () => {
        setTimeout(() => {
            Alert.alert(
                'Correo Enviado',
                'Se ha enviado un correo con su contraseña.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('Login');
                        }
                    }
                ]
            );
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerRecover}>

                <Text
                    style={styles.title}>
                    {"Recuperar Contraseña"}
                </Text>

                <Text
                    style={styles.label}>
                    {"Correo electrónico:"}
                </Text>

                <TextInput
                    style={[styles.input, { marginBottom: 30 }]}
                    placeholder={"Correo electrónico"}
                />

                <Button
                    title={"Enviar"}
                    uppercase
                    size={"lg"}
                    buttonStyle={styles.button}
                    titleStyle={styles.titleButton}
                    onPress={handleEnviar}
                />

                <View
                    style={styles.alertContainer}>
                    <Icon
                        style={styles.logo}
                        name={"exclamation-circle"}
                        type={"font-awesome-5"}
                        color={"#B49E68"}
                        size={30}
                    />

                    <Text
                        style={styles.alert}>
                        {"Se le hará llegar un correo con su contraseña a la cuenta que puso en caso de que se encuentre su cuenta en el sistema."}
                    </Text>
                </View>
            </View>
            <View
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    style={styles.logo}
                    name={"trash-alt"}
                    type={"font-awesome-5"}
                    color={"#FFFFFF"}
                    size={20}
                />
                <Text
                    style={styles.logoText}>
                    {"SIMBBA"}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#002E60",
        justifyContent: "start",
        alignItems: "center",
    },
    containerRecover: {
        backgroundColor: 'rgba(38, 94, 155, 0.9)',
        marginTop: '8%',
        marginBottom: '7%',
        borderRadius: 15,
        width: '85%',
        height: '85%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '15%',
        marginBottom: '10%',
        paddingHorizontal: 30
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    input: {
        width: "82%",
        fontSize: 16,
        height: 60,
        borderColor: "#7C7C7C",
        backgroundColor: "#F4F9FF",
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#002E60',
        width: '82%',
        borderRadius: 25,
        paddingVertical: 15,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: '5%'
    },
    titleButton: {
        fontWeight: 'bold'
    },
    alertContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFEDBF',
        borderRadius: 5,
        width: '82%',
        paddingHorizontal: 20,
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    alert: {
        color: '#B49E68',
        fontWeight: 'bold',
        fontSize: 12,
        paddingVertical: 15,
        width: '90%',
        paddingHorizontal: 15,
        textAlign: 'justify'
    },
    logo: {
        paddingHorizontal: 5,
    },
    logoText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});
