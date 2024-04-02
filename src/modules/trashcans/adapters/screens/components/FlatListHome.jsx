//rnfs
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "@rneui/base";
import Trashcan from "../../../../../../assets/img/trashcan.png";
/*
Descargue lo siguiente para la barra de progreso de nivel de llenado 
npm install react-native-progress
las barras que creo que vamos a ocupar
//
<Progress.Bar progress={0.3} width={200} />
<Progress.Pie progress={0.4} size={50} />
*/
import * as Progress from "react-native-progress";

/*
Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan nullam nisi, vitae est nibh eros orci tempus in pulvinar.
*/
export default function FlatListHome(props) {
  const { name, level, serialNumber } = props.trashcanData;
  const fondo = `${
    level >= 85
      ? "#d5a0a0"
      : level >= 75
      ? "#e6b69a"
      : level >= 50
      ? "#eddaab"
      : "#8fc2aa"
  }`; //rojo (#d5a0a0), naranja(#e6b69a), amarillo(#eddaab), verde (#8fc2aa)
  const capacidad = `${
    level >= 85
      ? "Lleno"
      : level >= 75
      ? "Casi lleno"
      : level >= 50
      ? "Medio lleno"
      : "Vacio"
  }`;
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
  })

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Trashcan} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{serialNumber}</Text>
        <Text style={styles.description}>{capacidad}</Text>
        <Progress.Bar
          progress={level}
          width={130}
          color={
            level >= 85
              ? "#a32d2d" // rojo
              : level >= 75
              ? "#c95d20" // naranja
              : level >= 50
              ? "#d8ae44" // amarillo
              : "#087943" // verde
          }
          borderWidth={1}
          borderColor={"black"}
          shadowColor={"black"}
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.3}
          shadowRadius={2}
        />
      </View>
      <Text style={styles.porcentajeText}>{level}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    margin: 8, // Añade márgenes para separar los elementos en la FlatList
    borderRadius: 10, // Opcional: Añade bordes redondeados
  },
  image: {
    width: 100, // Especifica un ancho
    height: 100, // y un alto para la imagen
    marginBottom: 8, // Espacio entre la imagen y el texto
  },
  text: {
    textAlign: "center",
    fontSize: 16, // Ajusta el tamaño del texto según necesites
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
    marginRight: 8,
    color: "#000000",
    textAlign: "center",
    lineHeight: 25,
  },
  description: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 5,
    color: "#0C0B0B",
    lineHeight: 20,
    textAlign: "center",
  },
  porcentajeText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    color: "#0C0B0B",
    lineHeight: 20,
    textAlign: "center",
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});