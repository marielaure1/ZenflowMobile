// @navigators/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/(tabs)/home/home.screen';
// import SearchScreen from '@/screens/(tabs)/search/search.screen';
// import NotificationScreen from '@screens/n';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ClientsScreen from '@screens/clients.screen';
// import ProjectsScreen from '@screens/projects.screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
      {/* <Tab.Screen name="Notification" component={NotificationScreen} /> */}
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      {/* <Stack.Screen name="Clients" component={ClientsScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
