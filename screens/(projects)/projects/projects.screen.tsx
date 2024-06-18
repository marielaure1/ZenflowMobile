import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useProjects from '@screens/(projects)/projects/projects.hook';
import useStyles from '@screens/(projects)/projects/projects.styles';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View, Text } from 'react-native';
// import CardProject from '@components/cards/card-project/card-project';
import BackgroundBanner from "@img/banner/banner-2.png";
import FabsProjects from '@components/fabs/fabs-projects/fabs-projects';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from "@components/cards/card/card";
import ButtonPrimary from "@components/buttons/button";
import CardProject from "@components/cards/card-project/card-project";
import AnalyseNumber from "@components/analyse/analyse-number/analyse-number";

export default function Projects() {
  const styles = useStyles();
  const { navigation, isLoading, error, projectsList, refetch, tabs, setTabs } = useProjects();

  return (
    <>
      <Template>
        <Banner title={"Projects"} image={BackgroundBanner}/>
        <View style={styles.container}> 
   
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        
            <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
            <TabsViewBasic view={tabs} setView={setTabs} text="Liste des Projects" colors={{"background": "#E2F9E8", "foreground": "#34A853"}}/>
          </ScrollView>
          {projectsList.length < 1 && (
            <>
              <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
              {error && <ButtonPrimary type={"blue"} text="Ajouter un project" link={"ProjectPost"}/>}
            </>
          )}

          {tabs == "Analyse" && projectsList.length > 0 && (
            <>
              <View style={styles.grid}>
                <AnalyseNumber title={"Nombre de projects"} number={projectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"A rappeler"} number={projectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"En attente"} number={projectsList.length} progress={"-10%"} color={"red"}/>
                <AnalyseNumber title={"Sans contact depuis 3 mois"} number={projectsList.length} progress={"-10%"} color={"red"}/>
              </View>
            </>
          )}

          {tabs == "Liste des Projects" &&  projectsList.length > 0  && (
            <>
              <View style={styles.grid}>
                {projectsList.length > 0 && projectsList.map((project, key) => (
                  <CardProject key={key} data={project}/>
                ))}
              </View>
            </>
            
          )}


          
        </View>
      
      
      </Template>

      <FabsProjects />
    </>
  );
}