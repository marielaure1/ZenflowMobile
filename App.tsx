import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import store from '@stores/store';
import { useColorScheme } from '@/hooks/useColorScheme';
import AuthProvider from '@/common/providers/auth-provider';
import queryClient from '@api/config.react-query';
import { QueryClientProvider } from '@tanstack/react-query';
// import StripeProvider from '@providers/stripe.provider';
import { StripeProvider } from '@stripe/stripe-react-native';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PoppinsBlack: require('./assets/fonts/Poppins-Black.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StripeProvider
      publishableKey="pk_test_51PIXSSBeBuYyYbKHcwP5cVEURIOhPgHfZKJClwMx89Zel4YWKEa4PWgI57c1J4Ny1ZTqx12RbM1S3wCktFUWwpNG00eDHtPVGy"
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
