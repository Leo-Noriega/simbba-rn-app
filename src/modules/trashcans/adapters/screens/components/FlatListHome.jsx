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
  const { trashcanName } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Trashcan} />
      </View>
      <Text>{trashcanName}</Text>
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
});
