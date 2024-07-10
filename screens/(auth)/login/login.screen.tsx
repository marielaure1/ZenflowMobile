import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import useLogin from '@screens/(auth)/login/login.hook';
import styles from '@screens/(auth)/login/login.styles';
import Button from "@/components/buttons/button";
import Field from "@/components/fields/field";
import Alert from '@/components/alert/alert';
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';

const LoginScreen = ({navigation}) => {
 
  const {
   email, setEmail, password, setPassword, error, handleLogin
  } = useLogin();

  return (
    <Template>

      <View style={styles.container}>
      <Banner title={"Connexion"} btnBack/>

        {error ? <Alert error={error} message={"Identifiants incorrects."} /> : null}

        <View className='flex-col gap-md'>
          <Field get={email} set={setEmail} name="Email"/>
          <Field get={password} set={setPassword} name="Mot de passe" secureTextEntry={true}/>
          <Button text="Connexion" type="primary" action={handleLogin}/>
        </View>
        <Text style={styles.forgotPassword} onPress={() => navigation?.navigate("ForgetPasssword")}>Mot de passe oublié</Text>
      </View>
       
    </Template>
  );
};

export default LoginScreen;
