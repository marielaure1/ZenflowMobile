import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
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


const ProjectActionsScreen = ({ route }) => {
  const styles = useStyles();
  const { action } = route.params;
  const { tabs, setTabs, project } = useProjects({ action });
  let title;

  switch (action) {
    case "create-task":
        title = "Créer une tâche"
        break;
  
    default:
        break;
  }

  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>    
   
      <Template>
        <Banner title={title} />

        <Text>SDS</Text>
        

      </Template>
    
    </>

  );
};

export default ProjectActionsScreen;

    

      
