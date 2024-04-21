import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  View,
  ImageBackground,
  Text
} from 'react-native';
import styles from "@pages/live/live.styles";
import HookLive from "@pages/live/live.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LiveScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Live'>;

interface LiveProps {
  navigation: LiveScreenNavigationProp;
}

const Live: React.FC<LiveProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
		    <View style={styles.container}>		
			</View>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Live;