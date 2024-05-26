import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import useRegister from '@screens/(auth)/register/register.hook';
import styles from '@screens/(auth)/register/register.styles';
import Button from "@components/buttons/button";
import Field from "@components/fields/field";

const RegisterScreen = () => {
 
  const {
    navigation, firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm, error, handleRegister
  } = useRegister();

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Inscription</Text>


        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Field get={firstName} set={setFirstName} name="Nom"/>
        <Field get={lastName} set={setLastName} name="Prénom"/>
        <Field get={email} set={setEmail} name="Email"/>
        <Field get={password} set={setPassword} name="Password" secureTextEntry/>
        <Field get={passwordConfirm} set={setPasswordConfirm} name="Confirmation du mot de passe" secureTextEntry/>

      <Button text="Connexion" type="primary" action={handleRegister}/>
      <Text style={styles.forgotPassword} onPress={() => navigation?.navigate("ForgetPasssword")}>Mot de passe oublié</Text>
    </View>
  );
};

export default RegisterScreen;
