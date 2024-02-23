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
    const {image, title, description, llenado, backgroundColor, porcentaje} = props;
    const dynamicStyles = StyleSheet.create({
        listHome: {
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
            elevation: 2,
            backgroundColor: backgroundColor,
            borderRadius: 2,
            width: '100%',
        },
    });
  return (
    <View style={dynamicStyles.listHome}>
        <Image 
          source={{uri:`${image}`}}
          style={styles.image}
        ></Image>
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Progress.Bar 
            progress={llenado} 
            width={200} 
            color={'#FFFFFF'}
            borderWidth={1}
            borderColor={'black'}
            shadowColor={'black'}
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.3}
            shadowRadius={2}
            />
            <Text style={styles.porcentajeText}>{porcentaje}</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,//un entero
      //justifyContent: 'start',
      //alignItems: 'start',
      backgroundColor: '#f0f0f0',
      padding:16,
    },
    image: {
        width: 124,
        height: 124,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginRight: 8,
        color: "#000000",
        textAlign: 'start',
        lineHeight: 25,
      },
    description: {
        fontSize: 15,
        fontWeight: "normal",
        marginBottom: 20,
        color: "#0C0B0B",
        lineHeight: 20,
      },
      porcentajeText: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#0C0B0B",
        lineHeight: 20,
      },
    containerText: {
        flex: 1,
        flexDirection: "column",
        padding: 8,
    },
  })