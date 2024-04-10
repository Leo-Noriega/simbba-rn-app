import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/base";
import FlatListHome from "./components/FlatListHome";
import AxiosClient from "../../../../config/http-client/axios-client";

export default function Home({ navigation }) {
  const [botes, setBotes] = useState([]);
  const getBotes = async () => {
    try {
      const response = await AxiosClient.get("api/v1/trashcan/");
      if (response.status === "OK") {
        setBotes(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBotes();
  });

  return (
    <View style={styles.container}>
      {/*
        TODO: Cards dinámicas
        Preguntarle a Mireles si esto es mejor hacer el componente completo
        individual en su propio archivo y ya nada mas llamarlo las veces que se
        requira para lo dinámico si no, la neta no se me ocurre otra forma
        */}
      <Text style={styles.title}>Datos Botes de Basura</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={2}
          data={botes}
          renderItem={({ item }) => (
            <FlatListHome
              trashcanData={{
                name: item.trashcanName,
                level: item.level,
                serialNumber: item.serialNumber,
              }}
            ></FlatListHome>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListStyle}
        />
      </View>
      {/*<Button
        title={"Simulando que le picas a un bote"}
        onPress={() => {
          navigation.navigate("Bote Home");
        }}
      />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "start",
    backgroundColor: "#FFFFFF",
  },
  flatListStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9B9B9B",
    textAlign: "left",
    width: "80%",
    marginTop: 10,
    marginStart: 20,
  },
  flatListContainer: {
    margin: 10,
    marginBottom: 90,
    overflow: "hidden",
  },
});
