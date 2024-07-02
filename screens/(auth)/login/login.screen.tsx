import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import useLogin from '@screens/(auth)/login/login.hook';
import styles from '@screens/(auth)/login/login.styles';
import Button from "@/components/buttons/button";
import Field from "@/components/fields/field";
import Alert from '@/components/alert/alert';
import Banner from '@/components/banner/banner';

const LoginScreen = ({navigation}) => {
 
  const {
   email, setEmail, password, setPassword, error, handleLogin
  } = useLogin();

  return (
    <View className='p-md gap-md'>
       <Banner title='Connexion' btnBack />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {/* <Alert error={error} message={"Identifiants incorrects."} /> */}

        <Field get={email} set={setEmail} name="Email"/>
        <Field get={password} set={setPassword} name="Password" secureTextEntry={true}/>

        <Button text="Connexion" type="primary" action={handleLogin}/>
        {/* <Text style={styles.forgotPassword} onPress={() => navigation?.navigate("ForgetPasssword")}>Mot de passe oublié</Text> */}
    </View>
  );
};

export default LoginScreen;
