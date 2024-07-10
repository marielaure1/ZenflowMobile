import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '@screens/(tabs)/home/home.styles';
import useLoginScreen from '@screens/(tabs)/home/home.hook';
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import React = require('react');
import Template from '@/components/layout/template/template';

export default function NotificationScreen() {

  // const {
  //   email, setEmail, password, setPassword, error, handleLogout
  // } = useLoginScreen();
  return (
   <Template >
    <View style={[{ width: 350, height: 350, flexDirection: "col", justifyContent: "center", alignItems: "center" }]}>
      <Text className='text-[30px]'>Coming Soon!</Text>
    </View>
      
   </Template>
    // <View>
    //   <Text>Votre token :</Text>
    //   <Button title="Déconnexion" onPress={handleLogout} />
    // </View>
  );
}