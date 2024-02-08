import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../../modules/profile/adapters/screens/Profile";
import UpdateProfile from "../../modules/profile/adapters/screens/UpdateProfile";

const Stack = createStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName={"Mi Perfil"}
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#002E60'},
            }}
        >
            <Stack.Screen
                name={"Mi Perfil"}
                component={Profile}
                options={{title: "Mi perfil"}}
            />
            <Stack.Screen
                name={"Editar Perfil"}
                component={UpdateProfile}
                options={{title: "Editar perfil"}}
            />
        </Stack.Navigator>
    )
}