import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlansScreen from '@screens/(account)/plans/plans.screen';

const Stack = createNativeStackNavigator();

const PlansNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
      <Stack.Screen name="Plans" component={PlansScreen} />
    </Stack.Navigator>
  );
};

export default PlansNavigator;
