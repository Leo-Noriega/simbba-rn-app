import {StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileStack from "../stack/ProfileStack";
import HomeStack from "../stack/HomeStack";
import GpsStack from "../stack/GpsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen
                    name={"Perfil"}
                    component={ProfileStack}
                />
                <Tab.Screen
                    name={"Inicio"}
                    component={HomeStack}
                />
                <Tab.Screen
                    name={"GPS"}
                    component={GpsStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})