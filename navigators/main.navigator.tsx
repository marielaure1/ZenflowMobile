// @navigators/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/(tabs)/home/home.screen';
import SearchScreen from '@/screens/(tabs)/search/search.screen';
import NotificationScreen from '@/screens/(tabs)/notification/notification.screen';
import AccountScreen from '@/screens/(tabs)/account/account.screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientsScreen from '@screens/(clients)/clients/clients.screen';
import ProjectsScreen from '@screens/(projects)/projects/projects.screen';
import PlansScreen from '@screens/(account)/plans/plans.screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />

      {/*Account*/}
      <Stack.Screen name="General" component={ClientsScreen} />
      <Stack.Screen name="Plans" component={PlansScreen} />
      <Stack.Screen name="Notifications" component={ClientsScreen} />
      <Stack.Screen name="Help" component={ClientsScreen} />
      <Stack.Screen name="About" component={ClientsScreen} />
      <Stack.Screen name="Terms" component={ClientsScreen} />




      <Stack.Screen name="Clients" component={ClientsScreen} />
      
      <Stack.Screen name="Projects" component={ProjectsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
