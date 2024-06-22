import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '@screens/(auth)/onboarding/onboarding.styles';
import Button from "@/components/buttons/button"

const OnboardingScreen = () => {
 
  return (
    <View style={styles.container}>
    <Image
      source={require('@img/logo/Logo3.png')}
      style={styles.logo}
    />
    <Text style={styles.text}>
      Vos activités sont désormais centralisées et toujours sous contrôle
    </Text>

    <Button text="Inscription" type="primary" link="Register"/>
    <Button text="Connexion" type="secondary" link="Login"/>

    <Button text="Connexion" type="secondary" link="Login" icon={require("@icons/fournisseurs/Google.png")}/>
   
  </View>
  );
};

export default OnboardingScreen;
