import {createStackNavigator} from "@react-navigation/stack";
import Home from "../../modules/trashcans/adapters/screens/Home";
import Trashcan from "../../modules/trashcans/adapters/screens/Trashcan";

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName={"Inicio"}
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#002E60'},
            }}
        >
            <Stack.Screen
                name={"Home"}
                component={Home}
                options={{title: "Inicio"}}
            />
            <Stack.Screen
                name={"Bote Home"}
                component={Trashcan}
                options={{title: "Bote de Basura"}}
            />
        </Stack.Navigator>
    )
}