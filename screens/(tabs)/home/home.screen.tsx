import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import io from 'socket.io-client';
import useStyles from "@screens/(tabs)/home/home.styles";
import useHome from "@screens/(tabs)/home/home.hook";
import Template from '@/components/layout/template/template';
import CardCatagory from '@/components/cards/card-category/card-category';
import LineChart from '@/components/charts/charts-lines';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Note, TaskSquare, UserSearch, UserTick } from 'iconsax-react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const { me } = useHome();

  const data = [50, 30, 70, 100, 60]; 

  return (
    <Template>

      <View className='pb-[10px] pt-[50px]'>
        <Text className='text-2xl'>
          Bonjour  
          {me?.customer && <Text className='font-[Poppins600]'> {me?.customer?.firstName}</Text>}
        </Text>
      </View>

      <View className='py-[30px] gap-md flex-row flex-wrap'>
        <CardCatagory title="Clients" link="Clients" icon={<UserTick size="20" color="#34A853"/>} color={{ background: "#E6F4F1", foreground: "#34A853" }}/>
        <CardCatagory title="Prospects" link="Prospects" icon={<UserSearch size="20" color="#FFC045"/>} color={{ background: "#FFF0D5", foreground: "#FFC045" }}/>
        <CardCatagory title="Projets" link="Projects" icon={<TaskSquare size="20" color="#35BFFF"/>} color={{ background: "#CEF0FF", foreground: "#35BFFF" }}/>
        <CardCatagory title="Notes" link="Note" icon={<Note size="20" color="#A78BFA"/>} color={{ background: "#EDE9FE", foreground: "#A78BFA" }}/>
      </View>

      {/* <GestureHandlerRootView style={{ flex: 1 }}>
      
        <LineChart data={data} />
    </GestureHandlerRootView> */}

      {/* <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification({
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
          });
        }}
      /> */}
      {/* <View>
        {notifications.map((notification, index) => (
          <Text key={index}>{notification?.message}</Text>
        ))}
      </View> */}
    </Template>
  );
};

export default Home;

// async function schedulePushNotification(notification) {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: notification.title || "You've got mail! 📬",
//       body: notification.body || 'Here is the notification body',
//       data: notification.data || { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }
