import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/base';
import ProfileStack from "../stack/ProfileStack";
import HomeStack from "../stack/HomeStack";
import GpsStack from "../stack/GpsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					const { iconName, iconType } = getIconName(route.name, focused);
					return <Icon name={iconName} type={iconType} size={30} color={color} />;
				},
				tabBarActiveTintColor: '#419277',
				/*
				Quitamos esto momentaneamente

				tabBarActiveBackgroundColor: '#419277',
				tabBarItemStyle: {
					borderTopStartRadius: 100,
					borderTopEndRadius: 100,
				},
				*/
				tabBarInactiveTintColor: 'white',
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#002E60',
					width: '100%',
					height: '9%',
					paddingBottom: 11,
					paddingTop: 11
				},
			})}
			>
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

const getIconName = (routeName, focused) => {
	let iconName = '';
	let iconType = 'material-community';

	switch (routeName) {
		case 'Perfil':
			iconName = focused ? 'account' : 'account-outline';
			break;
		case 'Inicio':
			iconName = focused ? 'home' : 'home-outline';
			break;
		case 'GPS':
			iconName = focused ? 'map-marker' : 'map-marker-outline';
			break;
	}
	return { iconName, iconType };
}
