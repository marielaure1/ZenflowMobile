import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import store from '@stores/store';
import { useColorScheme } from '@/hooks/useColorScheme';
import AuthProvider from '@/common/providers/auth-provider';
import { queryClient } from '@api/api';
import { QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
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
      <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthProvider />
      </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
