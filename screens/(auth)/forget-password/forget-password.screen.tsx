import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '@screens/(auth)/forget-password/forget-password.styles';
import useForgetPasswordScreen from '@screens/(auth)/forget-password/forget-password.hook';

const ForgetPasswordScreen = () => {
 
  const {
    email, setEmail, password, setPassword, error, handleForgetPassword
  } = useForgetPasswordScreen();

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleForgetPassword} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default ForgetPasswordScreen;
