import { Text, View } from "react-native";
import { Icon } from "@rneui/base";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../../modules/profile/adapters/screens/Profile";
import UpdateProfile from "../../modules/profile/adapters/screens/UpdateProfile";

const Stack = createStackNavigator();

export default function ProfileStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Mi Perfil"}
			screenOptions={{
				headerTintColor: 'white',
				headerStyle: { backgroundColor: '#002E60' },
				// El header de lado izquierdo tiene el titulo de la screen y el lado derecho un icon y un text
				headerRight: () => (
					<View style={{ flexDirection: 'row', marginRight: 10 }}>
						<Icon name={"trash-alt"} type={"font-awesome-5"} color={"white"} size={24} />
						<Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>SIMBBA</Text>
					</View>
				)

			}}
		>
			<Stack.Screen
				name={"Mi Perfil"}
				component={Profile}
				options={{
					title: "Mi perfil",
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name={"Editar Perfil"}
				component={UpdateProfile}
				options={{
					title: "Mi perfil",
					headerTitleAlign: 'left',
					headerBackTitleVisible: false,
				}}
			/>
		</Stack.Navigator>
	)
}
