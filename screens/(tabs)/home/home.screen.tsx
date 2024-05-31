import React from 'react';
import { ScrollView,Text, View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStyles from "@screens/(tabs)/home/home.styles";
import useHome from "@screens/(tabs)/home/home.hook";
// import CardData from "@components/cards/cardData/cardData";
import CardLeads from "@/components/cards/cardLeads/cardLeads";
import Template from "@/components/layout/template/template";
import { Appbar, Avatar, Button, Card, Title, Paragraph, Chip } from 'react-native-paper';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const styles = useStyles();
  // const { userList, isLoading, getClientInfos } = useHome();

  // const handleRefresh = async () => {
  //   await getClientInfos();
  // };

  return (
    <Template>
      <Text style={[styles.title, styles.paddingLeft, styles.paddingRight]}>
        Bonjour,
        <Text style={styles.titleMedium}> Marie-Laure</Text>
      </Text>
      <View style={[styles.section, styles.paddingLeft, styles.paddingRight]}>
        <View style={[styles.col2, styles.marginBottom]}>
          {/* <CardData title="Data" number={"60"} evolution={16}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"200"} type={"€"} evolution={-16}/>
        </View>
        <View style={styles.col2}>
          <CardData title="Data" number={"2"} type={"k"}  evolution={0}/>
          <View style={{ width: 10 }}></View>
          <CardData title="Data" number={"5"} evolution={16}/> */}
        </View>
      </View>

      <View style={[styles.section, styles.paddingLeft, styles.paddingRight]}>
        <Text style={[styles.sectionTitle, styles.paddingLeft, styles.paddingRight]}>Clients</Text>
        
       <View style={[styles.scrollHorizontal]} >
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          <CardLeads data={{ firstName: "Marie", lastName: "Edjour", email: "edjour@mail.com", phone: "451515454841"}}/>
          
          </ScrollView>
       </View>
      </View>
    </Template>
  );
}

export default Home;