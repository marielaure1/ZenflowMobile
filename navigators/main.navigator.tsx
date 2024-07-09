// @navigators/MainNavigator.tsx
import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/(tabs)/home/home.screen';
import SearchScreen from '@screens/(tabs)/search/search.screen';
import NotificationScreen from '@screens/(tabs)/notification/notification.screen';
import AccountScreen from '@screens/(tabs)/account/account.screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientsScreen from '@screens/(clients)/clients/clients.screen';
import ClientScreen from '@screens/(clients)/client/client.screen';
import ClientPostScreen from '@screens/(clients)/client-post/client-post.screen';
import ProspectsScreen from '@screens/(prospects)/prospects/prospects.screen';
import ProspectScreen from '@screens/(prospects)/prospect/prospect.screen';
import ProspectPostScreen from '@screens/(prospects)/prospect-post/prospect-post.screen';

import CustomFieldManageScreen from '@screens/(common)/custom-field-manage/custom-field-manage.screen';
import CustomFieldPostScreen from '@screens/(common)/custom-field-post/custom-field-post.screen';

import ProjectsScreen from '@screens/(projects)/projects/projects.screen';
import ProjectScreen from '@screens/(projects)/project/project.screen';
import ProjectPostScreen from '@screens/(projects)/project-post/project-post.screen';
import TaskScreen from '@screens/(projects)/task/task.screen';
import TaskPostScreen from '@screens/(projects)/task-post/task-post.screen';
import TaskCategoriesPostScreen from '@screens/(projects)/task-category-post/task-category-post.screen';

import GeneralScreen from '@screens/(account)/general/general.screen';
import PlansScreen from '@screens/(account)/plans/plans.screen';

import NotesScreen from '@screens/(notes)/notes/notes';
import NoteScreen from '@screens/(notes)/note/note';
import NoteFolderPostScreen from '@screens/(notes)/note-folder-post/note-folder-post';

import { Home2, TaskSquare, NotificationBing, SearchNormal, Profile } from 'iconsax-react-native'

import ErrorScreen from "@screens/(common)/error/error.screen";

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
      tabBarHideOnKeyboard: true
    }}
    >
      <Tab.Screen name="TabHome" component={HomeNavigator} options={{
          tabBarIcon: ({ color }) => (
            <Home2  color={ color } variant="Linear" size={24} />
          ),
        }}/>
      <Tab.Screen name="TabTasks" component={TasksNavigator} options={{
          tabBarIcon: ({ color }) => (
            <TaskSquare  color={ color } variant="Linear" size={24} />
          ),
        }} />
      <Tab.Screen name="TabNotification" component={NotificationsNavigator} options={{
          tabBarIcon: ({ color }) => (
            <NotificationBing  color={ color } variant="Linear" size={24} />
          ),
        }}/>
       <Tab.Screen name="TabSearch" component={SearchNavigator} options={{
          tabBarIcon: ({ color }) => (
            <SearchNormal  color={ color } variant="Linear" size={24} />
          ),
        }} />
      <Tab.Screen name="TabAccount" component={AccountNavigator} options={{
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
    </Stack.Navigator>
  )
}
export default MainNavigator;

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Home" component={HomeScreen} />
      {/** Module Clients */}
      <Stack.Screen name="Clients" component={ClientsScreen} />
      <Stack.Screen name="Client" component={ClientScreen} />
      <Stack.Screen name="ClientPost" component={ClientPostScreen} /> 

      {/**Module Prospects */}
      <Stack.Screen name="Prospects" component={ProspectsScreen} />
      <Stack.Screen name="Prospect" component={ProspectScreen} />
      <Stack.Screen name="ProspectPost" component={ProspectPostScreen} /> 

      {/**Module Common */}
      <Stack.Screen name="CustomFieldManage" component={CustomFieldManageScreen} /> 
      <Stack.Screen name="CustomFieldPost" component={CustomFieldPostScreen} /> 
      <Stack.Screen name="Error" component={ErrorScreen} /> 
      
      {/**Module Projects */}
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="ProjectPost" component={ProjectPostScreen} />   
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="TaskPost" component={TaskPostScreen} />
      <Stack.Screen name="TaskCategoriesPost" component={TaskCategoriesPostScreen} />

      <Stack.Screen name="Notes" component={NotesScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
      <Stack.Screen name="NoteFolderPost" component={NoteFolderPostScreen} />
    </Stack.Navigator>
  );
};

const TasksNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tasks" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const NotificationsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="General" component={GeneralScreen} />
      <Stack.Screen name="Plans" component={PlansScreen} />
      <Stack.Screen name="Notifications" component={ClientsScreen} />
      <Stack.Screen name="Help" component={ClientsScreen} />
      <Stack.Screen name="About" component={ClientsScreen} />
      <Stack.Screen name="Terms" component={ClientsScreen} />
    </Stack.Navigator>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Clients: undefined;
  Client: { clientId: string };
  ClientPost: undefined;
};