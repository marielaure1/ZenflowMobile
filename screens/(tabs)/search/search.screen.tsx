import Template from '@/components/layout/template/template';
import React from "react";
import { Image, StyleSheet, Platform, View ,Text} from 'react-native';

export default function HomeScreen() {
  return (
    <Template >
      <View style={[{ width: 350, height: 350, flexDirection: "col", justifyContent: "center", alignItems: "center" }]}>
        <Text className='text-[30px]'>Coming Soon!</Text>
      </View>
   </Template>
  );
}

