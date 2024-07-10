import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useProspects from '@screens/(prospects)/prospects/prospects.hook';
import { ScrollView, View, Text } from 'react-native';
import Fabs from '@components/fabs/fabs';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardProspect from "@components/cards/card-prospect/card-prospect";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";
import { Add, ChemicalGlass } from 'iconsax-react-native';
import SearchBar from "@/components/search-bar/search-bar";

export default function Prospects({navigation}) {
  const {
    currentTab, 
    setCurrentTab, 
    fields, 
    filteredProspects, 
    handleSearch, 
    error, 
    isLoading, 
    prospectsList, 
    refetch, 
    tabs, 
    setTabs 
  } = useProspects();

  return (
    <>
      <Template>
        <Banner title={"Prospects"} btnBack={true}/>
        {!error && !isLoading && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-[30px]">
            {tabs && tabs.map((tab, key) => (
              <TabsViewBasic key={key} view={currentTab} setView={setCurrentTab} data={tab} colors={{ background: tab?.background, foreground: tab?.foreground }} />
            ))}
          </ScrollView>
        )}
        <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
        {error && <ButtonPrimary type={"blue"} text="Ajouter un prospect" link={"ProspectPost"}/>}

        {currentTab == 2 && filteredProspects?.length > 0 && (
          <View className="flex-col gap-xl w-full">
            <AnalyseNumber title={"Nombre de prospects"} number={prospectsList.length} progress={"-10%"} color={"red"}/>
            {/* <AnalyseNumber title={"A rappeler"} number={prospectsList?.length} progress={"-10%"} color={"red"}/>
            <AnalyseNumber title={"En attente"} number={prospectsList?.length} progress={"-10%"} color={"red"}/>
            <AnalyseNumber title={"Sans contact depuis 3 mois"} number={prospectsList.length} progress={"-10%"} color={"red"}/> */}
          </View>
        )}

        {currentTab == 1 && !error && !isLoading && (
          <View className="flex-col gap-xl w-full">
            <SearchBar
              data={filteredProspects}
              allData={prospectsList}
              fields={fields}
              onSearch={handleSearch}
            />
            {filteredProspects?.length > 0 && (
              <View className="w-full gap-md">
                {filteredProspects && filteredProspects.map((prospect, key) => (
                  <CardProspect key={key} data={prospect}/>
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
            text: 'Créer un prospect', 
            delay: 220, 
            value: 200, 
            action: () => navigation.navigate("ProspectPost"), 
            colors: {background: "#E2F6FE", foreground: "#38BDF8"}
          },
          { 
            icon: <ChemicalGlass size="24" color="#A78BFA" />,
            text: 'Gérer les champs', 
            delay: 200, 
            value: 140, 
            action: () => navigation.navigate("CustomFieldManage", { schema: "prospects"}), 
            colors: {background: "#EDE9FE", foreground: "#A78BFA"}
          },
        ]}
      />
    </>
  );
}
