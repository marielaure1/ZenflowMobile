import { Image, StyleSheet, Platform, View, Text, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useAccount from "@screens/(tabs)/account/account.hook";

export default function AccountScreen() {

  const { navigation, customersList,  me, error, handleLogout } = useAccount();

  console.log(me);
  
  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View>
      <Button title="Générale" onPress={() => navigation.navigate("General")} />
      <Button title="Mon Abonnement" onPress={() => navigation.navigate("Plans")} />
      <Button title="Notifications" onPress={() => navigation.navigate("Notifications")} />

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

      {/* {customersList && customersList.length > 0 ? (
        customersList.map((customer) => (
          <View key={customer.email}>
            <Text>{customer.firstName} {customer.lastName}</Text>
            <Text>{customer.email}</Text>
          </View>
        ))
      ) : (
        <Text>No customers found</Text>
      )} */}
        
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
