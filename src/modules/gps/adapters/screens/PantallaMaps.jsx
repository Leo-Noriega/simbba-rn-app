import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/base";
import FlatListMaps from "./components/FlatListMaps";
import AxiosClient from "../../../../config/http-client/axios-client";

export default function PantallaMaps({ navigation }) {
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
  }, []);

  const handleCardPress = (data) => {
    navigation.navigate("Map", { serialNumber: data.serialNumber, location: data.location });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos Botes de Basura</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={2}
          data={botes}
          renderItem={({ item }) => (
            <FlatListMaps
              trashcanData={{
                name: item.trashcanName,
                level: item.level,
                serialNumber: item.serialNumber,
                onPress: handleCardPress
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListStyle}
        />
      </View>
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
