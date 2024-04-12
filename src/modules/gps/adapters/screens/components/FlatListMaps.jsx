import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "@rneui/base";
import Trashcan from "../../../../../../assets/img/trashcan.png";
import * as Progress from "react-native-progress";

export default function FlatListMaps(props) {
  const { name, level, serialNumber, onPress } = props.trashcanData;
  const barra = level / 100;
  const fondo = `${
    level >= 85
      ? "#d5a0a0"
      : level >= 75
      ? "#e6b69a"
      : level >= 50
      ? "#eddaab"
      : "#8fc2aa"
  }`;
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
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 5,
      margin: 8, 
      borderRadius: 10, 
      marginBottom: 10,
      marginRight: 10,
      elevation: 5,
      backgroundColor: fondo,
      borderRadius: 20,
      width: 160,
      height: 160,
    },
  })
  const splitTextIntoLines = (text, charactersPerLine) => {
    let result = '';
    let words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      if ((line + words[i]).length > charactersPerLine) {
        result += line.trim() + '\n';
        line = '';
      }
      line += words[i] + ' ';
    }
    result += line.trim();
    return result;
  };

  const handlePress = () => {
    onPress({ name, level, serialNumber });
  };

  return (
    <TouchableOpacity style={dynamicStyles.listHome} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Trashcan} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title} numberOfLines={3}>
          {splitTextIntoLines(name, 15)}
        </Text>

        <Text style={styles.description}>{capacidad}</Text>
        <Progress.Bar
          progress={barra}
          width={108}
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 70,
  },
  image: {
    width: 50,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
    marginTop: -10,
    marginRight: 0,
    color: "#000000",
    textAlign: "center",
    lineHeight: 15,
  },
  description: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 5,
    color: "#0C0B0B",
    lineHeight: 13,
    textAlign: "center",
  },
  porcentajeText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    color: "#0C0B0B",
    lineHeight: 15,
    textAlign: "center",
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});