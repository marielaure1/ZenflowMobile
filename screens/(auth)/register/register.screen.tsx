import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useRegister from '@screens/(auth)/register/register.hook';
import styles from '@screens/(auth)/register/register.styles';
import Button from "@components/buttons/button";
import FieldControl from "@components/fields/field-control";
import Regex from "@constants/regex";



const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit, handleRegister, errors, validatePasswordConfirm } = useRegister();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      
      <FieldControl 
      control={control} 
      name="lastName" 
      label="Nom" 
      error={errors.lastName} 
      rules={{ 
        required: 'Ce champ est requis'
      }} />

      <FieldControl 
      control={control} 
      name="firstName" 
      label="Prénom" 
      error={errors.firstName} 
      rules={{ 
        required: 'Ce champ est requis'
      }} />

      <FieldControl 
      control={control} 
      name="email" 
      label="Email" 
      error={errors.email} 
      rules={{ 
        required: 'Ce champ est requis',
        pattern: {
            value: Regex.email,
            message: 'Veuillez saisir un email valide'
        }
      }} />

      <FieldControl 
      control={control} 
      name="password" 
      label="Mot de passe" 
      error={errors.password} 
      secureTextEntry={true}
      rules={{ 
        required: 'Ce champ est requis', 
        minLength: { 
          value: 8,
          message: 'Le mot de passe doit contenir au moins 8 caractères'
        },
        maxLength: {
            value: 25,
            message: 'Le mot de passe ne peut pas dépasser 25 caractères'
        },
        pattern: {
            value: Regex.password,
            message: 'Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un nombre et un symbole (@, $, !, %, *, ?, &)'
        }
      }} />
      
      <FieldControl 
      control={control} 
      name="passwordConfirm" 
      label="Confirmer le mot de passe" 
      error={errors.passwordConfirm} 
      secureTextEntry={true}
      rules={{ 
        required: 'Ce champ est requis',
        validate: validatePasswordConfirm
      }} />

      <Button text="Inscription" type="primary" action={handleSubmit(handleRegister)} />
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgetPassword')}>Mot de passe oublié</Text>
    </View>
  );
};

export default RegisterScreen;
