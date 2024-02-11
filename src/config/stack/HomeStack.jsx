import { Text, View } from "react-native";
import { Icon } from "@rneui/base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../modules/trashcans/adapters/screens/Home";
import Trashcan from "../../modules/trashcans/adapters/screens/Trashcan";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Inicio"}
			screenOptions={{
				headerMode: 'screen',
				headerTintColor: 'white',
				headerStyle: { backgroundColor: '#002E60' },
				headerRight: () => (
					<View style={{ flexDirection: 'row', marginRight: 10 }}>
						<Icon name={"trash-alt"} type={"font-awesome-5"} color={"white"} size={24} />
						<Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>SIMBBA</Text>
					</View>
				)
			}}
		>
			<Stack.Screen
				name={"Home"}
				component={Home}
				options={{
					title: "Inicio",
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name={"Bote Home"}
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
