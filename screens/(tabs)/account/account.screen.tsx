import { ScrollView,Text, View, FlatList, Button } from 'react-native';
import useAccount from "@screens/(tabs)/account/account.hook";
import Banner from "@/components/banner/banner";
import ButtonAccount from "@components/buttons/button-account";
import Card from "@components/cards/card/card";
import Template from '@/components/layout/template/template';
import React from 'react';
import { CardPos, DocumentText, LogoutCurve, MessageQuestion, Profile, Setting, Smileys, Tag } from 'iconsax-react-native';

export default function AccountScreen() {

  const { navigation, customersList,  me, error, handleLogout } = useAccount();

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Template>
      <Banner title={"Mon Compte"}/>

      <View className='flex-col gap-xl'>
        <Card speed={1}>
          <ButtonAccount 
          text="Générale" 
          link="General"
          icon={<Profile size="18" color="#181818"/>}
          />

          <ButtonAccount 
          text="Mon Abonnement" 
          link="Plans"
          icon={<Tag size="18" color="#181818"/>}
          />
          
          <ButtonAccount 
          text="Paramères" 
          link="Notifications"
          icon={<Setting size="18" color="#181818"/>}
          />
        </Card>

        <Card speed={2}>
          <ButtonAccount 
          text="Aide" 
          link="Help"
          icon={<MessageQuestion size="18" color="#181818"/>}
          />
          
          <ButtonAccount 
          text="A propos" 
          link="About"
          icon={<Smileys size="18" color="#181818"/>}
          />
          
          <ButtonAccount 
          text="Conditions générale" 
          link="Terms"
          icon={<DocumentText size="18" color="#181818"/>}
          />
        </Card>

        <Card speed={3}>
          <ButtonAccount 
          text="Déconnexion" 
          action={handleLogout} 
          icon={<LogoutCurve size="18" color="#181818"/>}
          />
        </Card>

      </View>
    </Template>
  );
}

