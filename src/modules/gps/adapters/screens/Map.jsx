import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";
import AxiosClient from "../../../../config/http-client/axios-client";

const INITIAL_REGION = {
  latitude: 18.850500661593863,
  longitude: -99.20063415374794,
  latitudeDelta: 0.003,
  longitudeDelta: 0.003,
};

export default function Map({ navigation }) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    AxiosClient.get("/api/v1/record/lastLocations")
      .then((response) => {
        if (response.status === "OK") {
          setLocations(Object.values(response.data));
          console.log(locations);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={INITIAL_REGION}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        ))}
      </MapView>
      {/*<Button
                title={"Simulando que le picas a un bote"}
                onPress={() => {
                    navigation.navigate("Bote Map")
                }}
            />*/}
    </View>
  );
}
