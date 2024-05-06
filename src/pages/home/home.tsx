import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useStyles from "@pages/home/home.styles";
import useHome from "@pages/home/home.hook";
import CardData from "@/src/components/cards/cardData/cardData";
import CardLeads from "@/src/components/cards/cardLeads/cardLeads";
import Template from "@components/layout/template/template";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const styles = useStyles();
  const { userList, isLoading, getClientInfos } = useHome();

  const handleRefresh = async () => {
    await getClientInfos();
  };

  return (
    <Template onRefresh={handleRefresh}>
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

        <FlatList
          data={userList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <React.Fragment>
              <CardLeads data={item} />
              <View style={{ width: 10 }}></View>
            </React.Fragment>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              {isLoading && <Text>Chargement...</Text> }
              {userList.length < 1 && <Text>Aucun client trouvé</Text>}
            </View>
          )}
        />
      </View>
    </Template>
  );
}

export default Home;
