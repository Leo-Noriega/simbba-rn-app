import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import FlatListHome from "./components/FlatListHome";


export default function Home({ navigation }) {
    const botes=[
        {
          uid:1,
          image: 'https://i.pinimg.com/236x/4c/19/ee/4c19ee1534048a8776b7b7121eec09dc.jpg', 
          title: 'Nombre Bote 1',
          //description: 'Capacidad - Lleno',
          llenado: 1.0,
          //backgroundColor: '#d5a0a0',
          //porcentaje: '100%',
        },
        {
            uid:2,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 2',
            llenado: 0.5,
          },
          {
            uid:3,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 3',
            llenado: 0.2,
          },
          {
            uid:4,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 4',
            llenado: 0.8,
          },
          {
            uid:5,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 5',
            llenado: 0.75,
          },
          {
            uid:6,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 6',
            llenado: 0.05,
          },
          {
            uid:7,
            image: 'https://s1.eestatic.com/2018/07/09/actualidad/actualidad_321231184_86199176_1706x960.jpg', 
            title: 'Nombre Bote 7',
            llenado: 0.2,
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
                    numColumns={2}
                    data={botes}
                    renderItem={({ item }) =>
                        <FlatListHome
                            uid={item.uid}
                            image={item.image}
                            title={item.title}
                            llenado={item.llenado}
                        ></FlatListHome>
                    }
                    keyExtractor={item => item.uid.toString()}
                    contentContainerStyle={styles.latListStyle}
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
    flatListStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#9B9B9B",
        textAlign: 'left',
        width: '80%',
        marginTop: 10,
        marginStart: 20,
    },
    flatListContainer: {
        margin: 10, 
        marginBottom: 90,
        overflow: 'hidden',
    },
});