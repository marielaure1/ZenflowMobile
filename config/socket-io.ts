import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';

let LOCATION = "Maison";
let IP = LOCATION === "Maison" ? 'http://192.168.1.80:3001/api' : 'http://10.2.106.6:3001/api';

const socket = io(IP);

const RealTimeNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('receiveNotification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    return () => {
      socket.off('receiveNotification');
    };
  }, []);

  return (
    <View>
      {notifications.map((notification, index) => (
        <Text key={index}>{notification.message}</Text>
      ))}
    </View>
  );
};

export default RealTimeNotifications;
