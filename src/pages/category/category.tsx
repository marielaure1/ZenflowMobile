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
import styles from "@pages/discover/discover.styles";
import HookDiscover from "@pages/discover/discover.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DiscoverScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Discover'>;

interface DiscoverProps {
  navigation: DiscoverScreenNavigationProp;
}

const Discover: React.FC<DiscoverProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
		    <View style={styles.container}>		
			</View>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Discover;