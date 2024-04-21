import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TextInput,
  View,
  ImageBackground,
  Text,
  Image
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStyles from "@components/layout/template/template.styles";
// import useHome from "@pages/home/home.hook";

const Template = ({ children }) => {
  const styles = useStyles()

  return (
    <>
      <ScrollView style={[styles.scrollView, styles.container]} contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </>
   );
}

export default Template;