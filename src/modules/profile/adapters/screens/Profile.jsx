import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../../config/user-logged/UserLogged";

export default function Profile({ navigation }) {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const storedSession = JSON.parse(await AsyncStorage.getItem("session"));
      setSession(storedSession);
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("session");
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Icon
          style={{ marginBottom: 40 }}
          name={"user-circle-o"}
          type={"font-awesome"}
          color={"#0F2D5D"}
          size={150}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Usuario:</Text>
        <Text style={{ fontSize: 18, marginTop: 15 }}>
          {session?.user?.mail}
        </Text>
      </View>
      <View>
        <Button
          title={"Editar Información"}
          uppercase
          size={"lg"}
          color={"#419277"}
          buttonStyle={{
            marginBottom: 20,
            borderRadius: 30,
            padding: 15,
            width: "100%",
          }}
          titleStyle={{
            fontSize: 18,
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Editar Perfil")}
        />
        <Button
          title={"Cerrar Sesión"}
          uppercase
          size={"lg"}
          color={"#963732"}
          buttonStyle={{
            borderRadius: 40,
            padding: 15,
            width: "100%",
          }}
          titleStyle={{
            fontSize: 18,
            fontWeight: "bold",
          }}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 40,
  },
});
