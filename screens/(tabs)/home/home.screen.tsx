import React, { useEffect, useRef, useState } from 'react';
import { ScrollView,Text, View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStyles from "@screens/(tabs)/home/home.styles";
import useHome from "@screens/(tabs)/home/home.hook";
// import CardData from "@components/cards/cardData/cardData";
import CardLeads from "@/components/cards/cardLeads/cardLeads";
import Template from "@/components/layout/template/template";
import { Appbar, Avatar, Button, Card, Title, Paragraph, Chip } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import io from 'socket.io-client';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

let LOCATION = "Maison";
let IP = LOCATION === "Maison" ? 'http://192.168.1.185:3001/api' : 'http://10.0.2.2:3001/api';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const styles = useStyles();
  // const { userList, isLoading, getClientInfos } = useHome();

  // const handleRefresh = async () => {
  //   await getClientInfos();
  // };

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   const socket = io(IP); // Remplacez par l'URL de votre serveur

  //   socket.on('receiveNotification', (notification) => {
  //     schedulePushNotification(notification);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <Template>
      {/* <Text style={[styles.title, styles.paddingLeft, styles.paddingRight]}>
        Bonjour,
        <Text style={styles.titleMedium}> Marie-Laure</Text>
      </Text>
      <View style={[styles.section, styles.paddingLeft, styles.paddingRight]}>
        <View style={[styles.col2, styles.marginBottom]}>
          <CardData title="Data" number={"60"} evolution={16}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"200"} type={"€"} evolution={-16}/>
        </View>
        <View style={styles.col2}>
          <CardData title="Data" number={"2"} type={"k"}  evolution={0}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"5"} evolution={16}/>
        </View>
      </View> */}

      {/* <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View> */}

      {/* <View style={[styles.section, styles.paddingLeft, styles.paddingRight]}>
        <Text style={[styles.sectionTitle, styles.paddingLeft, styles.paddingRight]}>Clients</Text>
        
       <View style={[styles.scrollHorizontal]} >
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          
          </ScrollView>
       </View>
      </View> */}
    </Template>
  );
}

export default Home;

async function schedulePushNotification(notification) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: notification.title || "You've got mail! 📬",
      body: notification.body || 'Here is the notification body',
      data: notification.data || { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
