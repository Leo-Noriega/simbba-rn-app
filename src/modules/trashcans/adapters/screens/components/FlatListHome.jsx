//rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AirbnbRating, Image, Rating } from '@rneui/base';
/*
Descargue lo siguiente para la barra de progreso de nivel de llenado 
npm install react-native-progress
las barras que creo que vamos a ocupar
//
<Progress.Bar progress={0.3} width={200} />
<Progress.Pie progress={0.4} size={50} />
*/
import * as Progress from 'react-native-progress';

/*
Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan nullam nisi, vitae est nibh eros orci tempus in pulvinar.
*/
export default function FlatListHome(props) {
    const {image, title, llenado,} = props;
    const fondo = `${llenado >= 0.85 ? '#d5a0a0' : llenado >= 0.75 ? '#e6b69a' : llenado >= 0.5 ? '#eddaab' : '#8fc2aa'}`;//rojo (#d5a0a0), naranja(#e6b69a), amarillo(#eddaab), verde (#8fc2aa)
    const capacidad = `${llenado >= 0.85 ? 'Lleno' : llenado >= 0.75 ? 'Casi lleno' : llenado >= 0.5 ? 'Media' : 'Baja'}`;
    const dynamicStyles = StyleSheet.create({
      listHome: {
        flex: 1,
        flexDirection: 'column', // Cambiado a columna para alinear los elementos verticalmente
        alignItems: 'center', // Centra los elementos horizontalmente
        marginBottom: 10,
        marginRight: 10,
        elevation: 5,
        backgroundColor: fondo,
        borderRadius: 20,
        width: '45%',
        height: 160,
    },
    });
    return (
      <View style={dynamicStyles.listHome}>
          <View style={styles.imageContainer}>
              <Image
                  source={{uri:`${image}`}}
                  style={styles.image}
              ></Image>
          </View>
          <View style={styles.containerText}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>Capacidad - {capacidad}</Text>
              <View style={dynamicStyles.progressBarContainer}>
                  <Progress.Bar
                      progress={llenado}
                      width={130}
                      color={
                          llenado >= 0.85
                              ? '#a32d2d' // rojo
                              : llenado >= 0.75
                              ? '#c95d20' // naranja
                              : llenado >= 0.5
                              ? '#d8ae44' // amarillo
                              : '#087943' // verde
                      }
                      borderWidth={1}
                      borderColor={'black'}
                      shadowColor={'black'}
                      shadowOffset={{ width: 0, height: 2 }}
                      shadowOpacity={0.3}
                      shadowRadius={2}
                  />
              </View>
              <Text style={styles.porcentajeText}>{`${llenado*100}%`}</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,//un entero
      //justifyContent: 'start',
      //alignItems: 'start',
      backgroundColor: '#f0f0f0',
      padding:16,
    },
    imageContainer: {
      marginTop: 5,
      //marginBottom: 5,
      //alignItems: 'center',
  },
  image:{
    width:60,
    height:70,
  },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 0,
        marginTop: 0,
        marginRight: 8,
        color: "#000000",
        textAlign: 'center',
        lineHeight: 25,
      },
    description: {
        fontSize: 15,
        fontWeight: "normal",
        marginBottom: 5,
        color: "#0C0B0B",
        lineHeight: 20,
        textAlign: 'center',
      },
      porcentajeText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
        color: "#0C0B0B",
        lineHeight: 20,
        textAlign: 'center',
      },
    containerText: {
        flex: 1,
        flexDirection: "column",
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBarContainer: {
      marginTop: 10,
      marginBottom: 10,
  },
  })