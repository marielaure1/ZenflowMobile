import React from 'react';
import { View, Text } from 'react-native';
import useRealTimeNotifications from '@hooks/useRealTimeNotifications';

const Notifications = () => {
  const notifications = useRealTimeNotifications();

  return (
    <View>
      {notifications.map((notification, index) => (
        <Text key={index}>{notification?.message}</Text>
      ))}
    </View>
  );
};

export default Notifications;
