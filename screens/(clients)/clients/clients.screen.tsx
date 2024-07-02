import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useClients from '@screens/(clients)/clients/clients.hook';
import { ScrollView, View, Text } from 'react-native';
import Fabs from '@components/fabs/fabs';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardClient from "@components/cards/card-client/card-client";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";
import { Add, ChemicalGlass, Layer, Magicpen } from 'iconsax-react-native';
import SearchBar from "@/components/search-bar/search-bar";

export default function Clients({navigation}) {
  const {
    currentTab, 
    setCurrentTab, 
    fields, 
    filteredClients, 
    handleSearch, 
    error, 
    isLoading, 
    clientsList, 
    refetch, 
    tabs, 
    setTabs 
   } = useClients();
  
   console.log("filteredClients",filteredClients);
   
  return (
    <>
      <Template>
        <Banner title={"Clients"} btnBack={true}/>
        {!error && !isLoading && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-[30px]">
          {tabs && tabs.map((tab, key) => (
            <TabsViewBasic key={key} view={currentTab} setView={setCurrentTab} data={tab} colors={{ background: tab?.background, foreground: tab?.foreground }} />
          ))}
          </ScrollView>
          )}
          <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
          {error && <ButtonPrimary type={"blue"} text="Ajouter un client" link={"ClientPost"}/>}

            {currentTab == 2 && filteredClients?.length > 0 && (
              <View className="flex-col gap-xl w-full">
                <AnalyseNumber title={"Nombre de clients"} number={clientsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"A rappeler"} number={clientsList?.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"En attente"} number={clientsList?.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"Sans contact depuis 3 mois"} number={clientsList.length} progress={"-10%"} color={"red"}/>
              </View>
            )}

            {currentTab == 1 && !error && !isLoading && (
            <View className="flex-col gap-xl w-full">
              
              <SearchBar
                data={filteredClients}
                allData={clientsList}
                fields={fields}
                onSearch={handleSearch}
              />

              {filteredClients?.length > 0 && (
              <View className="w-full gap-md">
                {filteredClients && filteredClients.map((client, key) => (
                  <CardClient key={key} data={client}/>
                ))}
              </View>
              )}
            </View>
            )}
      
      </Template>

      <Fabs
      btns={[
        { 
          icon: <Add size="24" color="#38BDF8" />,
          text: 'Créer un client', 
          delay: 220, 
          value: 200, 
          action: () => navigation.navigate("ClientPost"), 
          colors: {background: "#E2F6FE", foreground: "#38BDF8"}
        },
        { 
          icon: <ChemicalGlass size="24" color="#A78BFA" />,
          text: 'Gérer les champs', 
          delay: 200, 
          value: 140, 
          action: () => navigation.navigate("CustomFieldManage", { schema: "clients"}), 
          colors: {background: "#EDE9FE", foreground: "#A78BFA"}
        },
      ]}
      />
    </>
  );
}