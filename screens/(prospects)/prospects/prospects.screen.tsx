import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useProspects from '@screens/(prospects)/prospects/prospects.hook';
import useStyles from '@screens/(prospects)/prospects/prospects.styles';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View, Text } from 'react-native';
// import CardProspect from '@components/cards/card-prospect/card-prospect';
import BackgroundBanner from "@img/banner/banner-2.png";
import FabsProspects from '@components/fabs/fabs-prospects/fabs-prospects';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardProspect from "@components/cards/card-prospect/card-prospect";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";

export default function Prospects() {
  const styles = useStyles();
  const { navigation, isLoading, error, prospectsList, refetch, tabs, setTabs } = useProspects();

  return (
    <>
      <Template>
        <Banner title={"Prospects"} image={BackgroundBanner}/>
        <View style={styles.container}> 
   
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        
            <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
            <TabsViewBasic view={tabs} setView={setTabs} text="Liste des Prospects" colors={{"background": "#E2F9E8", "foreground": "#34A853"}}/>
          </ScrollView>
          {prospectsList.length < 1 && (
            <>
              <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
              {error && <ButtonPrimary type={"blue"} text="Ajouter un prospect" link={"ProspectPost"}/>}
            </>
          )}

          {tabs == "Analyse" && prospectsList.length > 0 && (
            <>
              <View style={styles.grid}>
                <AnalyseNumber title={"Nombre de prospects"} number={prospectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"A rappeler"} number={prospectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"En attente"} number={prospectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"Sans contact depuis 3 mois"} number={prospectsList.length} progress={"-10%"} color={"red"}/>
              </View>
            </>
          )}

          {tabs == "Liste des Prospects" &&  prospectsList.length > 0  && (
            <>
              <View style={styles.grid}>
                {prospectsList && prospectsList.map((prospect, key) => (
                  <CardProspect key={key} data={prospect}/>
                ))}
              </View>
            </>
            
          )}


          
        </View>
      
      
      </Template>

      <FabsProspects />
    </>
  );
}