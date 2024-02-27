import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import FlatListHome from "./components/FlatListHome";


export default function Home({ navigation }) {
    const botes=[
        {
          uid:1,
          image: 'https://i.pinimg.com/236x/4c/19/ee/4c19ee1534048a8776b7b7121eec09dc.jpg', 
          title: 'Nombre del Bote 1',
          //description: 'Capacidad - Lleno',
          llenado: 1.0,
          //backgroundColor: '#d5a0a0',
          //porcentaje: '100%',
        },
        {
            uid:2,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 2',
            llenado: 0.8,
          },
          {
            uid:3,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 3',
            llenado: 0.4,
          },
          {
            uid:4,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 4',
            llenado: 0.5,
          },
          {
            uid:5,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 5',
            llenado: 0.5,
          },
    ];
    return (
        <View style={styles.container}>
            {/*
            TODO: Cards dinámicas
            Preguntarle a Mireles si esto es mejor hacer el componente completo
            individual en su propio archivo y ya nada mas llamarlo las veces que se
            requira para lo dinámico si no, la neta no se me ocurre otra forma
            */}
            <Text
                style={styles.title}>
                Datos Botes de Basura
            </Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={botes}
                    renderItem={({ item }) =>
                        <FlatListHome
                            image={item.image}
                            title={item.title}
                            llenado={item.llenado}
                        ></FlatListHome>
                    }
                    keyExtractor={item => item.uid.toString()}
                />
            </View>
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
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#9B9B9B",
        textAlign: 'left',
        width: '80%',
        marginTop: 40,
        marginStart: 20,
    },
    flatListContainer: {
        margin: 10, 
        marginBottom: 90,
        //borderRadius: 90, 
        overflow: 'hidden', 
        //elevation: 2, 
    },
})
/*
flatListContainer: {
        margin: 10, 
        borderRadius: 20, // Valor de borde redondeado para esquinas redondeadas
        overflow: 'hidden', 
        width: '80%', // Ancho de la FlatList
        aspectRatio: 1, // Establece la relación de aspecto para que sea cuadrado
        elevation: 2, // Si lo necesitas
    },
*/