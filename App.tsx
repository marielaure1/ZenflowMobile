import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import store from '@stores/store';
import { useColorScheme } from '@/hooks/useColorScheme';
import AuthProvider from '@/common/providers/auth-provider';
import queryClient from '@api/config.react-query';
import { QueryClientProvider } from '@tanstack/react-query';
// import StripeProvider from '@providers/stripe.provider';
import { StripeProvider } from '@stripe/stripe-react-native';
import {  
  useFonts, 
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black

} from '@expo-google-fonts/poppins';

import "@theme/global.css";

import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [fontsLoaded] = useFonts({
  //   Poppins_100Thin,
  //   Poppins_200ExtraLight,
  //   Poppins_300Light,
  //   Poppins_400Regular,
  //   Poppins_500Medium,
  //   Poppins_600SemiBold,
  //   Poppins_700Bold,
  //   Poppins_800ExtraBold,
  //   Poppins_900Black
  // });
  

  // if (!fontsLoaded) {
  //   return <Text>sdsd</Text>;
  // }

  const EXPO_PUBLIC_STRIPE_PUBLIC_KEY: string = process.env.EXPO_PUBLIC_STRIPE_PUBLIC_KEY || "abc";
  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Provider store={store}>
      <StripeProvider
      publishableKey={EXPO_PUBLIC_STRIPE_PUBLIC_KEY}
      //   urlScheme="your-url-scheme" 
      //   merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
      >
    
        <QueryClientProvider client={queryClient}>
          
            <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <AuthProvider />
            </NavigationContainer>
        </QueryClientProvider>
      </StripeProvider>
    </Provider>
  );
};

export default App;
