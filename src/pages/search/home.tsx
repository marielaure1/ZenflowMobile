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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStyles from "@pages/home/home.styles";
import useHome from "@pages/home/home.hook";
import CardData from "@/src/components/cards/cardData/cardData";
import CardLeads from "@/src/components/cards/cardLeads/cardLeads";
// import * as d3 from "d3";
// import LinePlot from "./lineplot";

import Template from "@components/layout/template/template";
import { useQuery } from "react-query";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

const styles = useStyles()

const {
  userList,
  isLoading
} = useHome();

// console.log(userList[0].name);

// const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  return (
    <Template>
      <Text style={[styles.title, styles.paddingLeft, styles.paddingRight]}>
        Bonjour,  
        <Text style={styles.titleMedium}> Marie-Laure</Text>
      </Text>
      <View style={[styles.section, styles.paddingLeft, styles.paddingRight]}>
        <View style={[styles.col2, styles.marginBottom]}>
          <CardData title="Data" number={"60"} evolution={16}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"200"} type={"€"} evolution={-16}/>
        </View>
        <View style={styles.col2}>
          <CardData title="Data" number={"2"} type={"k"}  evolution={0}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"5"} evolution={16}/>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.paddingLeft, styles.paddingRight]}>Clients</Text>
        <ScrollView style={[styles.section, styles.paddingLeft, styles.paddingRight]} horizontal={true} showsHorizontalScrollIndicator={false}>
        {isLoading ? (
          <Text>Chargement...</Text>
        ) : (
          userList.map((user, key) => (
            <React.Fragment key={key}>
              <CardLeads data={user} />
              <View style={{ width: 10 }}></View>
            </React.Fragment>
          ))
        )}

        </ScrollView>
      </View>
      
    </Template> 
   );
}
// react query
export default Home;