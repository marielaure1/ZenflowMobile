import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useProjects from '@screens/(projects)/projects/projects.hook';
import useStyles from '@screens/(projects)/projects/projects.styles';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View, Text } from 'react-native';
import CardProject from '@components/cards/card-project/card-project';
import BackgroundBanner1 from "@img/banner/banner-1.jpg";

export default function Projects() {
  const styles = useStyles();
  const { navigation, error, projectsList, refetch, tabs, setTabs } = useProjects();
console.log(projectsList);

  return (
    <Template>
      <Banner title={"Projets"} image={BackgroundBanner1}/>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
        {/* <TabsViewBasic view={tabs} setView={setTabs} text="Infos" colors={{"background": "#CEF0FF", "foreground": "#35BFFF"}}/> */}
        <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/>
        <TabsViewBasic view={tabs} setView={setTabs} text="Liste des projets" colors={{"background": "#E2F9E8", "foreground": "#34A853"}}/>
      </ScrollView>

      <View style={styles.grid}>
        {tabs == "Liste des projets" && projectsList && projectsList.map((project, key) => (
          <CardProject key={key} data={project}/>
        ))}
      </View>
     
    </Template>
  );
}