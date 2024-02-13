import React from "react";
import { Text, View } from "react-native";
import { Icon } from "@rneui/base";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../../modules/profile/adapters/screens/Profile";
import UpdateProfile from "../../modules/profile/adapters/screens/UpdateProfile";
import Login from "../../modules/auth/login/adapters/screens/Login";
import RecoverLogin from "../../modules/auth/login/adapters/screens/RecoverLogin";

const Stack = createStackNavigator();

export default function ProfileStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Login"}
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#002E60',
					height: 90,
				},
				// El header de lado izquierdo tiene el titulo de la screen y el lado derecho un icon y un text
				headerRight: () => (
					<View style={{ flexDirection: 'row', marginRight: 10 }}>
						<Icon name={"trash-alt"} type={"font-awesome-5"} color={"white"} size={24} />
						<Text style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10}}>SIMBBA</Text>
					</View>
				)

			}}
		>
			<Stack.Screen
				name={"Mi Perfil"}
				component={Profile}
				options={{
					title: "MI PERFIL",
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name={"Editar Perfil"}
				component={UpdateProfile}
				options={{
					title: "EDITAR PERFIL",
					headerTitleAlign: 'left',
					headerBackTitleVisible: false,
				}}
			/>
			<Stack.Screen
				name="Login"
                component={Login}
				options={{
					headerShown: false,
					title: "CERRAR SESIÓN",
					headerTitleAlign: 'left',
					headerBackTitleVisible: false,
				}}
			/>
			<Stack.Screen
				name={'RecoverLogin'}
				component={RecoverLogin}
				options={{
					headerShown: false,
					title: "Recuperar Contraseña",
					headerTitleAlign: 'left',
					headerBackTitleVisible: false,
				}}
			/>
		</Stack.Navigator>
	)
}
