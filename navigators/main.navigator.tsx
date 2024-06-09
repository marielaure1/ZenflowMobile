// @navigators/MainNavigator.tsx
import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/(tabs)/home/home.screen';
import SearchScreen from '@/screens/(tabs)/search/search.screen';
import NotificationScreen from '@/screens/(tabs)/notification/notification.screen';
import AccountScreen from '@/screens/(tabs)/account/account.screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientsScreen from '@screens/(clients)/clients/clients.screen';
import ProjectsScreen from '@screens/(projects)/projects/projects.screen';
import ProjectScreen from '@screens/(projects)/project/project.screen';
import PlansScreen from '@screens/(account)/plans/plans.screen';
import { Home2, TaskSquare, NotificationBing, SearchNormal, Profile } from 'iconsax-react-native'

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Home" 
    screenOptions={{
      tabBarInactiveTintColor: '#D4D4D4',
      tabBarActiveTintColor: '#171717',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: { position: 'absolute', borderWidth: 0, padding: 10, height: 50 },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Home2  color={ color } variant="Linear" size={28} />
          ),
        }}/>
      <Tab.Screen name="Tasks" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <TaskSquare  color={ color } variant="Linear" size={28} />
          ),
        }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
          tabBarIcon: ({ color }) => (
            <NotificationBing  color={ color } variant="Linear" size={28} />
          ),
        }}/>
       <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <SearchNormal  color={ color } variant="Linear" size={28} />
          ),
        }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: ({ color }) => (
            <Profile  color={ color } variant="Linear" size={28} />
          ),
        }}/>
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
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
