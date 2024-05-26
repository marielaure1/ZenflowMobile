import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '@screens/(auth)/reset-password/reset-password.styles';
import useResetPasswordScreen from '@screens/(auth)/reset-password/reset-password.hook';

const ResetPasswordScreen = () => {
 
  const {
    email, setEmail, password, setPassword, error, handleResetPassword
  } = useResetPasswordScreen();

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleResetPassword} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default ResetPasswordScreen;
