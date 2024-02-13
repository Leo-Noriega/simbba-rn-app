import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, TouchableOpacity } from 'react-native';
import { Button, Icon } from "@rneui/base";

export default function Login({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);

    const login = () => {
        console.log('====================================');
        console.log('email: ', email);
        console.log('password: ', password);
    
        if (!email || !password) {
            console.log('La cadena de correo electrónico o la contraseña está vacía.');
            return; 
        }

        navigation.navigate('Mi Perfil');
    }

    const mostrarEmail = (text) => {
        setEmail(text);
    }
    const mostrarPassword = (text) => {
        setPassword(text);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>

                <Text style={styles.title}>
                    {"Inicia sesión en SIMBBA"}
                </Text>

                <Text style={styles.label}>
                    {"Correo electrónico:"}
                </Text>
                <TextInput
                    style={[styles.input, { marginBottom: 30 }]}
                    placeholder={"Correo electrónico"}
                    keyboardType='email-address'
                    onChangeText={mostrarEmail}
                />

                <Text style={styles.label}>
                    {"Contraseña:"}
                </Text>
                <View style={[styles.passwordInputContainer, { marginBottom: 10 }]}>
                    <TextInput
                        placeholder={"Contraseña"}
                        style={styles.passwordInput}
                        onChangeText={mostrarPassword}
                        secureTextEntry={!showPassword} />
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye" : "eye-off"}
                        color="#7c7c7c"
                        onPress={() => setShowPassword(!showPassword)}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: '#7C7C7C', true: '#009475' }}
                        thumbColor={isEnabled ? '#002E60' : '#002E60'}
                        ios_backgroundColor="#002E60"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.switchLabel}>Recuérdame</Text>
                </View>

                <Button
                    title={"Iniciar Sesión"}
                    uppercase
                    size={"lg"}
                    buttonStyle={styles.button}
                    titleStyle={styles.titleButton}
                    onPress={() => login()}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('RecoverLogin')}
                >
                    <Text style={styles.forget}>
                        {"¿Se te ha olvidado la contraseña?"}
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    style={styles.logo}
                    name={"trash-alt"}
                    type={"font-awesome-5"}
                    color={"#FFFFFF"}
                    size={20}
                />
                <Text style={styles.logoText}>
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
    containerLogin: {
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
        marginBottom: '5%',
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
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '82%',
        borderColor: "#7C7C7C",
        backgroundColor: "#F4F9FF",
        borderWidth: 1,
        marginLeft: 30,
        paddingHorizontal: 20,
        height: 60,
        borderRadius: 5,
    },
    passwordInput: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '90%'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
    },
    switchLabel: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
    forget: {
        color: '#FFFFFF',
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 14,
        width: '100%',
        textAlign: "center"
    },
    logoContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    logo: {
        marginStart: 20,
        marginRight: 5
    },
    logoText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});
