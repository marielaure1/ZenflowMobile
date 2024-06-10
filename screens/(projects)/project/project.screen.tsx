import React, { useRef } from 'react';
import { ScrollView, View, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProjects from '@screens/(projects)/project/project.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import TabsViewBasic from '@components/tabs-view/basic/tabs-view-basic';
import KanbanBoard from '@components/kanban/kanban';
import useStyles from "@screens/(projects)/project/project.styles";
import FabsProjects from '@components/fabs/fabs-projects/fabs-projects';
import BackgroundBanner from "@img/banner/banner-2.png";
import BottomSheet from "@components/bottom-sheet/bottom-sheet";


const Project = ({ route }) => {
  const styles = useStyles();
  const { id } = route.params;
  const { tabs, setTabs, project, taskCategories } = useProjects({ id });

  
  

  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>    
   
      <Template>
        <Banner title={project?.name} image={BackgroundBanner} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
          <TabsViewBasic view={tabs} setView={setTabs} text="Infos" colors={{ background: "#CEF0FF", foreground: "#35BFFF" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{ background: "#FFF0D5", foreground: "#FFC045" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Liste des tâches" colors={{ background: "#E2F9E8", foreground: "#34A853" }} />
        </ScrollView>
        {tabs === "Liste des tâches" && (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <KanbanBoard projectId={id} datas={taskCategories} />
          </GestureHandlerRootView>
        )}

      </Template>
     
     
      <FabsProjects projectId={id}/>
    </>

  );
};

export default Project;

    

      
