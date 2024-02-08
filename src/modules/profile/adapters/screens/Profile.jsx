import {StyleSheet, Text, View} from "react-native";
import {Icon, Button} from "@rneui/themed";

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Icon name={"user-circle-o"} type={"font-awesome"} color={"#0F2D5D"} size={150}/>
            <Text>Usuario</Text>
            <Text>usuario@utez.edu.mx</Text>
            <Button
                title={"Editar Información"}
                uppercase
                size={"lg"}
                color={"#419277"}
                buttonStyle={{
                    borderRadius: 30
                }}
                onPress={() =>
                    navigation.navigate('Editar Perfil')}
            />
            <Button
                title={"Cerrar Sesión"}
                uppercase
                size={"lg"}
                color={"#963732"}
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
        justifyContent: 'center',
        alignItems: 'center'
    }
})