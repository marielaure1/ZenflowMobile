import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
// import TabsViewBasic from '@/components/tabs-view/tabs-view-basic/tabs-view-basic';
import useProjects from '@screens/(projects)/project/project.hook';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Projects({route}) {
  const { id } = route.params;
  const { tabs, setTabs, project } = useProjects({id});

  console.log(project);
  
  return (
    <Template>
      <Banner title={"Projets"} image={BackgroundBanner1}/>

      <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <TabsViewBasic tabs={tabs} setTabs={setTabs} title="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/> */}
      <KanbanBoard/>
    </GestureHandlerRootView>
    </Template>
  );
}