import React, { useEffect, useReducer, useRef, useContext } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
  Dimensions,
  LogBox
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Template from "@/src/components/layout/template/template";
import Home from "@pages/home/home";
import useStyles from '@/src/components/layout/tabs/tabs.styles';
import Header from "@components/layout/header/header";

LogBox.ignoreAllLogs();
// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();



export default function BottomNavigator() {

	const styles = useStyles();
	// initialRouteName="Home"
	// activeColor="#f0edf6"
	// inactiveColor="#3e2465"
	// tabBarStyle={{ backgroundColor: '#694fad' }} // Adjust bar background color
	// tabBarOptions={{
	//   showLabel: false, // Hide tab labels
	//   style: styles?.tabBar, // Apply custom styles if available in useStyles
	// }}
	const tabBarOptions = {
		// activeTintColor: '#000000', // Adjust active (selected) icon color
		// inactiveTintColor: '#ffffff', // Adjust inactive (unselected) icon color
		tabBarShowLabel: false, // Hide tab labels
		// tabBarStyle: {
		//   height: 50, // Set the desired bottom tab height
		//   backgroundColor: '#f0f0f0', // Optionally adjust tab bar background color
		// },
	  };
	

	return (
		<>
       		<Header/>
			<Tab.Navigator
			initialRouteName="Home"
			screenOptions={tabBarOptions}
			// activeColor="#000000"
			// inactiveColor="#ffffff"
			// 
			barStyle={styles}
			screenOptions={{
				tabBarShowLabel: false,
			       headerShown: false
			  }}
			>
				<Tab.Screen
				name="Home"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="home" color={color} size={24} />
				),
				}}
				component={Home}
				/>

				<Tab.Screen
				name="Test"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="home" color={color} size={24} />
				),
				}}
				component={Home}
				/>

				<Tab.Screen
				name="Test2"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="home" color={color} size={24} />
				),
				}}
				component={Home}
				/>

				<Tab.Screen
				name="Test3"
				options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="home" color={color} size={24} />
				),
				}}
				component={Home}
				/>
				
			</Tab.Navigator>
		</>
	);
}

