// src/hooks/useRealTimeNotifications.ts
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let LOCATION = "Maison";
let IP = LOCATION === "Maison" ? 'https://84e2-89-84-44-89.ngrok-free.app/api' : 'http://10.2.106.6:3001/api';


const useRealTimeNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io(IP); // Remplacez par l'URL de votre serveur

    socket.on('receiveNotification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    return () => {
      socket.off('receiveNotification');
      socket.disconnect();
    };
  }, []);

  return notifications;
};

export default useRealTimeNotifications;
