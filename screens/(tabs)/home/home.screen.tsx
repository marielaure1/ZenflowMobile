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

export default function TabTwoScreen() {

  const {
    email, setEmail, password, setPassword, error, handleLogout
  } = useLoginScreen();
  return (
    <View>
      <Text>Votre token :</Text>
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
}