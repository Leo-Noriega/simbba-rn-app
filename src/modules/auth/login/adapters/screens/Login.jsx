import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Icon} from "@rneui/themed";

export function Login() {
    return (
        <View style={styles.container}>
            <View style={{flex: 4, flexDirection: 'column', justifyContent: 'center'}}>
                <Text>{"Inicia sesión en SIBBAI"}</Text>
                <Text>{"Correo electrónico:"}</Text>
                <TextInput placeholder={"leonardo@correo.com"}/>
                <Text>{"Contraseña:"}</Text>
                <TextInput placeholder={"********"}/>
                <Button title={"Iniciar sesión"}>
                </Button>
                <Text>{"¿Olvidaste tu contraseña?"}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text>{"SIMBBA"}</Text>
                <Icon style={{marginStart: 20}} name={"trash-alt"} type={"font-awesome-5"} color={"#2f2f2f"} size={24}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
})