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
import styles from "@pages/account/account.styles";
import HookRegister from "@pages/account/account.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AccountScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Account'>;

interface AccountProps {
  navigation: AccountScreenNavigationProp;
}

const Account: React.FC<AccountProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" >
		    <View style={styles.container}>		
			</View>
		</ScrollView>
    </SafeAreaView>
   );
}

export default Account;