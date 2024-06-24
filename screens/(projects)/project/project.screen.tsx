import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProjects from '@screens/(projects)/project/project.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import ProjectInfos from '@/widgets/project/project-infos/project-infos';
import FetchPending from '@/components/fetch-pending/fetch-pending';
import Fabs from '@components/fabs/fabs';
import { Add, ChemicalGlass, Magicpen, Trash } from 'iconsax-react-native';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import KanbanBoard from '@widgets/project/kanban/kanban';

const Project = ({ navigation, route }) => {
  const { id } = route.params;
  const {  handleDelete, project, tabs, currentTab, setCurrentTab, taskCategories, isLoading, error, customFields, isLoadingCustomFields, fetchErrorCustomFields  } = useProjects({ id });
  console.log(project);
  

  return (
    <>    
      <Template>
        <Banner title={project?.name} btnBack /> 
        
        <View className='flex-col gap-md'>
        {isLoadingCustomFields || fetchErrorCustomFields && 
        <FetchPending isLoading={isLoadingCustomFields} error={"Aucun champ personnalisé n'as été trouvé."} type="Not Found"/>
        }

        {project && (
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {tabs && tabs.map((tab, key) => (
             <TabsViewBasic key={key} view={currentTab} setView={setCurrentTab} data={tab} colors={{ background: tab?.background, foreground: tab?.foreground }} />
           ))}
         </ScrollView>
        )}

        {project && (
          <>

           {currentTab == 1 && (
            <GestureHandlerRootView style={{ flex: 1 }}>
              <KanbanBoard projectId={id} datas={taskCategories} />
            </GestureHandlerRootView>
           )}

           {currentTab == 2 && (
             <ProjectInfos project={project} customFields={customFields?.datas?.projects} />
           )}

          </>
        )}
        </View>
        
       


      </Template>

      <Fabs
      btns={[
        { 
          icon: <Magicpen size="24" color="#FB923C" />,
          text: 'Modifier le project', 
          delay: 240, 
          value: 260, 
          action: () => navigation.navigate("ProjectPost", {project: project}), 
          colors: {background: "#FFEDD5", foreground: "#FB923C"}
        },
        { 
          icon: <Trash size="24" color="#FF6666" />,
          text: 'Supprimer le project', 
          delay: 220, 
          value: 200, 
          action: () => handleDelete(project?._id), 
          colors: {background: "#FFE5E5", foreground: "#FF6666"}
        },
        { 
          icon: <ChemicalGlass size="24" color="#A78BFA" />,
          text: 'Gérer les champs personnalisés', 
          delay: 200, 
          value: 140, 
          action: () => navigation.navigate("CustomFieldManage", {parentId: project?._id, schema: "project"}), 
          colors: {background: "#EDE9FE", foreground: "#A78BFA"}
        },
      ]}
      />
    
    </>

  );
};

export default Project;