import {createStackNavigator} from "@react-navigation/stack";
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
                headerStyle: {backgroundColor: '#002E60'},
            }}
        >
            <Stack.Screen
                name={"Map"}
                component={Map}
                options={{title: "Mapa"}}
            />
            <Stack.Screen
                name={"Bote Map"}
                component={Trashcan}
                options={{title: "Bote de Basura"}}
            />
        </Stack.Navigator>
    )
}