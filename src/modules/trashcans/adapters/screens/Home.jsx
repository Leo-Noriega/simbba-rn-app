import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import FlatListHome from "./components/FlatListHome";


export default function Home({ navigation }) {
    const botes=[
        {
          uid:1,
          image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
          title: 'Nombre del Bote 1',
          description: 'Capacidad - lleno',
          llenado: 1.0,
          backgroundColor: '#BC3737',
          /*
          Queria ocupar algo asi pero al chile no jalo y no se como hacer que jale, solo es para cambiar el color automaticamente
          backgroundColor: llenado >= 0.75 ? '#BC3737' : (llenado >= 0.5 ? 'orange' : '#37BC45'),
            */
           porcentaje: '100%',
        },
        {
            uid:2,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 2',
            description: 'Capacidad - medio lleno',
            llenado: 0.8,
            backgroundColor: '#D7D53E',
            porcentaje: '80%',
          },
          {
            uid:3,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre del Bote 3',
            description: 'Capacidad - medio vacio',
            llenado: 0.4,
            backgroundColor: '#37BC45',
            porcentaje: '40%',
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
            <View style={styles.flatListContainer}>
                <FlatList
                    data={botes}
                    renderItem={({ item }) =>
                        <FlatListHome
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            llenado={item.llenado}
                            backgroundColor={item.backgroundColor}
                            porcentaje={item.porcentaje}
                        ></FlatListHome>
                    }
                    keyExtractor={item => item.uid.toString()}
                />
            </View>
            <Text
                style={styles.title}>
                Datos Botes de Basura
            </Text>

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
        marginTop: 40
    },
    flatListContainer: {
        margin: 10, 
        //borderRadius: 90, 
        overflow: 'hidden', 
        //elevation: 2, 
    },
})