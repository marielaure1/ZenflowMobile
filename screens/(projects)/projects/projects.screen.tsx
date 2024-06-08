import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
// import TabsViewBasic from '@/components/tabs-view/tabs-view-basic/tabs-view-basic';
import useProjects from './projects.hook';

export default function Projects() {

  const { tabs, setTabs } = useProjects();
  return (
    <Template>
      <Banner title={"Projets"}/>

      {/* <TabsViewBasic tabs={tabs} setTabs={setTabs} title="Analyse" colors={{"background": "#FFF0D5", "foreground": "#FFC045"}}/> */}
    </Template>
  );
}