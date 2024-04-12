import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import AxiosClient from '../../../../config/http-client/axios-client';

const INITIAL_REGION = {
    latitude: 18.850500661593863,
    longitude: -99.20063415374794,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003
}

export default function Map({ route }) {
  const { serialNumber, location: initialLocation } = route.params;
  const [markerLocation, setMarkerLocation] = useState({});

  const getLocation = async () => {
    try {
      if (serialNumber) {
        const response = await AxiosClient.get(
          `api/v1/record/location/${serialNumber}`
        );
        console.log("Respuesta del servidor:", response);
        if (response.status === "OK") {
          const  latitude  = response.data.latitude;
          const longitude = response.data.longitude;
          setMarkerLocation({ latitude, longitude });
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        } else {
          console.error("La propiedad location no está definida en la respuesta.");
        }
      } else {
        console.error("La propiedad serialNumber no está definida.");
      }
    } catch (error) {
      console.error("Error obteniendo la ubicación:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, [serialNumber]);

  console.log("Marcador actual:", markerLocation);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
      >
        {markerLocation.latitude && markerLocation.longitude && (
          <Marker
            coordinate={markerLocation}
            title={"Ubicación del bote de basura"}
          />
        )}
      </MapView>
    </View>
  );
}
