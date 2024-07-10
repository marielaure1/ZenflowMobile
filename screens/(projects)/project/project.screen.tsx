import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProjects from '@screens/(projects)/project/project.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import TabsViewBasic from '@components/tabs-view/basic/tabs-view-basic';
import KanbanBoard from '@widgets/project/kanban/kanban';
import useStyles from "@screens/(projects)/project/project.styles";
import FabsProject from '@/components/fabs/fabs-project/fabs-project';
import BackgroundBanner from "@img/banner/banner-2.png";
import ProjectInfos from '@widgets/project/project-infos/project-infos';

const Project = ({ route }) => {
  const styles = useStyles();
  const { id } = route.params;
  const { tabs, setTabs, project, taskCategories, isLoading, error } = useProjects({ id });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>    
   
      <Template>
        <Banner title={project?.name} image={BackgroundBanner} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
          <TabsViewBasic view={tabs} setView={setTabs} text="Infos" colors={{ background: "#CEF0FF", foreground: "#35BFFF" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{ background: "#FFF0D5", foreground: "#FFC045" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Liste des tâches" colors={{ background: "#E2F9E8", foreground: "#34A853" }} />
        </ScrollView>

        {tabs === "Infos" && (
          <ProjectInfos project={project}/>
        )}

        {tabs === "Liste des tâches" && (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <KanbanBoard projectId={id} datas={taskCategories} />
          </GestureHandlerRootView>
        )}

      </Template>
     
     
      <FabsProject projectId={id}/>
    </>

  );
};

export default Project;