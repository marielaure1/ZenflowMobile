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
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";
import { Add, Layer } from 'iconsax-react-native';
import SearchBar from "@/components/search-bar/search-bar";
export default function Clients({navigation}) {
  const styles = useStyles();
  const { fields, filteredClients, handleSearch, isLoading, error, clientsList, refetch, tabs, setTabs } = useClients();

  return (
    <>
      <Template>
        <Banner title={"Clients"}/>
        <SearchBar
        data={filteredClients}
        allData={clientsList}
        fields={fields}
        onSearch={handleSearch}
      />
        <View style={styles.container}> 
   
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        
            <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
            <TabsViewBasic view={tabs} setView={setTabs} text="Liste des Clients" colors={{"background": "#E2F9E8", "foreground": "#34A853"}}/>
          </ScrollView>

          <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
          {error && <ButtonPrimary type={"blue"} text="Ajouter un client" link={"ClientPost"}/>}

          {tabs == "Analyse" && (
            <>
              <View style={styles.grid}>
                <AnalyseNumber title={"Nombre de clients"} number={clientsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"A rappeler"} number={clientsList?.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"En attente"} number={clientsList?.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"Sans contact depuis 3 mois"} number={clientsList.length} progress={"-10%"} color={"red"}/>
              </View>
            </>
          )}

          {tabs == "Liste des Clients" && (
            <>
              <View style={styles.grid}>
                {filteredClients && filteredClients.map((client, key) => (
                  <CardClient key={key} data={client}/>
                ))}
              </View>
            </>
            
          )}


          
        </View>
      
      
      </Template>

      <FabsClients
      btns={[
        { 
          icon: <Add size="24" color="#FFFFFF" />,
          text: 'Créer un client', 
          delay: 200, 
          value: 150, 
          action: () => navigation.navigate("ClientPost"), 
          colors: {background: "red", foreground: "white"}
        },
        { 
          icon: <Add size="24" color="#FFFFFF" />,
          text: 'Gérer les champs', 
          delay: 200, 
          value: 80, 
          action: () => navigation.navigate("CustomFieldManage", { schema: "client"}), 
          colors: {background: "red", foreground: "white"}
        },
      ]}
      />
    </>
  );
}