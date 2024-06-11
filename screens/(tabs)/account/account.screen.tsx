import { ScrollView,Text, View, FlatList, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useAccount from "@screens/(tabs)/account/account.hook";
import Banner from "@/components/banner/banner";
import ButtonAccount from "@components/buttons/button-account";
import Card from "@components/cards/card/card";
import BackgroundBanner1 from "@img/banner/banner-1.jpg";

export default function AccountScreen() {

  const { navigation, customersList,  me, error, handleLogout } = useAccount();

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
<ScrollView>
    <Banner title={"Mon Compte"} image={BackgroundBanner1}/>

      <Card>
        <ButtonAccount text="Générale" link="General" icon={"ChemicalGlass"} />
        <Button title="Mon Abonnement" onPress={() => navigation.navigate("Plans")} />
        <Button title="Notifications" onPress={() => navigation.navigate("Notifications")} />
      </Card>
      
      <Button title="Aide" onPress={() => navigation.navigate("Help")} />
      <Button title="A propos" onPress={() => navigation.navigate("About")} />
      <Button title="Conditions générale" onPress={() => navigation.navigate("Terms")} />

      <Button title="Déconnexion" onPress={handleLogout} />

     {me && (
       <View key={me.user.email}>
       <Text>{me.customer.firstName} {me.customer.lastName}</Text>
       <Text>{me.user.email}</Text>
     </View>
     )}

</ScrollView>
  );
}

