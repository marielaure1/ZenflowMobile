import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '@screens/(auth)/onboarding/onboarding.styles';
import Button from "@/components/buttons/button"
import Template from '@/components/layout/template/template';

const OnboardingScreen = () => {
 
  return (
    <Template>
      <View className='flex-col justify-center items-center h-full'>
        <Image
          source={require('@img/logo/Logo3.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Vos activités sont désormais centralisées et toujours sous contrôle
        </Text>

        <Button text="Inscription" type="primary" link="Register"/>
        <Button text="Connexion" type="secondary" link="Login"/>

      </View>
    </Template>
  );
};

export default OnboardingScreen;
