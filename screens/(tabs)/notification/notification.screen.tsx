import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '@screens/(tabs)/home/home.styles';
import useLoginScreen from '@screens/(tabs)/home/home.hook';
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';

export default function HomeScreen() {

  // const {
  //   email, setEmail, password, setPassword, error, handleLogout
  // } = useLoginScreen();
  return (
    <Card>
    <Card.Title title="Bonjour Marie-Laure" />
    <Card.Content>
      <Title>Clients</Title>
      <Paragraph>Projet en cours: 12 (+18%)</Paragraph>
      <Paragraph>Projet en cours: 12 (0%)</Paragraph>
    </Card.Content>
  </Card>
    // <View>
    //   <Text>Votre token :</Text>
    //   <Button title="Déconnexion" onPress={handleLogout} />
    // </View>
  );
}