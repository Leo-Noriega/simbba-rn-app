import { Icon } from "@rneui/base";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "../../modules/gps/adapters/screens/Map";
import Trashcan from "../../modules/trashcans/adapters/screens/Trashcan";

const Stack = createStackNavigator();

export default function GpsStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Map"}
			screenOptions={{
				headerMode: 'screen',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: '#002E60',
					height: 90,
				},
				headerRight: () => (
					<View style={{ flexDirection: 'row', marginRight: 10 }}>
						<Icon name={"trash-alt"} type={"font-awesome-5"} color={"white"} size={24} />
						<Text style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10 }}>SIMBBA</Text>
					</View>
				)
			}}
		>
			<Stack.Screen
				name={"Map"}
				component={Map}
				options={{
					title: "MAPA",
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name={"Bote Map"}
				component={Trashcan}
				options={{
					title: "Bote de Basura",
					headerTitleAlign: 'left',
					headerBackTitleVisible: false,
				}}
			/>
		</Stack.Navigator>
	)
}
