import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useClients from '@screens/(clients)/clients/clients.hook';
import useStyles from '@screens/(clients)/clients/clients.styles';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View, Text } from 'react-native';
// import CardClient from '@components/cards/card-client/card-client';
import BackgroundBanner from "@img/banner/banner-2.png";
import FabsClients from '@components/fabs/fabs-clients/fabs-clients';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardClient from "@components/cards/card-client/card-client";

export default function Clients() {
  const styles = useStyles();
  const { navigation, isLoading, error, clientsList, refetch, tabs, setTabs } = useClients();

  console.log(clientsList);
  
 

  return (
    <>
      <Template>
        <Banner title={"Clients"} image={BackgroundBanner}/>
        <View style={styles.container}> 
          <FetchPending isLoading={isLoading} error={error} type="Not Found"/>

          {error && <ButtonPrimary type={"blue"} text="Ajouter un client" link={"ClientPost"}/>}
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        
            <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
            <TabsViewBasic view={tabs} setView={setTabs} text="Liste des Clients" colors={{"background": "#E2F9E8", "foreground": "#34A853"}}/>
          </ScrollView>

{tabs == "Liste des Clients" && (
  <View style={styles.grid}>
            {clientsList && clientsList.map((client, key) => (
              <CardClient key={key} data={client}/>
            ))}
          </View>
)}
          
        </View>
      
      
      </Template>

      <FabsClients />
    </>
  );
}