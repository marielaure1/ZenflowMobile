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
import ClientScreen from '@screens/(clients)/client/client.screen';
import ClientPostScreen from '@screens/(clients)/client-post/client-post.screen';
import ProspectsScreen from '@screens/(prospects)/prospects/prospects.screen';
import ProspectScreen from '@screens/(prospects)/prospect/prospect.screen';
import ProspectPostScreen from '@screens/(prospects)/prospect-post/prospect-post.screen';
import CustomFieldPostScreen from '@screens/(common)/custom-field-post/custom-field-post.screen';

import ProjectsScreen from '@screens/(projects)/projects/projects.screen';
import ProjectScreen from '@screens/(projects)/project/project.screen';
import ProjectPostScreen from '@screens/(projects)/project-post/project-post.screen';
import TaskPostScreen from '@screens/(projects)/task-post/task-post.screen';
import TaskCategoryPostScreen from '@screens/(projects)/task-category-post/task-category-post.screen';
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
      tabBarStyle: { position: 'absolute', borderWidth: 0, height: 50, shadowOffset: {width: 0, height: 0}, elevation: 0 },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <Home2  color={ color } variant="Linear" size={24} />
          ),
        }}/>
      <Tab.Screen name="Tasks" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <TaskSquare  color={ color } variant="Linear" size={24} />
          ),
        }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
          tabBarIcon: ({ color }) => (
            <NotificationBing  color={ color } variant="Linear" size={24} />
          ),
        }}/>
       <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <SearchNormal  color={ color } variant="Linear" size={24} />
          ),
        }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: ({ color }) => (
            <Profile  color={ color } variant="Linear" size={24} />
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

      {/**Clients */}
      <Stack.Screen name="Clients" component={ClientsScreen} />
      <Stack.Screen name="Client" component={ClientScreen} />
      <Stack.Screen name="ClientPost" component={ClientPostScreen} /> 

      {/**Clients */}
      <Stack.Screen name="Prospects" component={ProspectsScreen} />
      <Stack.Screen name="Prospect" component={ProspectScreen} />
      <Stack.Screen name="ProspectPost" component={ProspectPostScreen} /> 

      <Stack.Screen name="CustomFieldPost" component={CustomFieldPostScreen} /> 
      
      {/**Projects */}
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="ProjectPost" component={ProjectPostScreen} />
      
      {/* <Stack.Screen name="Task" component={TaskScreen} /> */}
      <Stack.Screen name="TaskPost" component={TaskPostScreen} />
      <Stack.Screen name="TaskCategoryPost" component={TaskCategoryPostScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
