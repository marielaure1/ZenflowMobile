// @navigators/AuthNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/(auth)/login/login.screen';
import RegisterScreen from '@screens/(auth)/register/register.screen';
import OnboardingScreen from '@screens/(auth)/onboarding/onboarding.screen';
import ResetPasswordScreen from '@screens/(auth)/reset-password/reset-password.screen';
import ForgetPasswordScreen from '@screens/(auth)/forget-password/forget-password.screen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
