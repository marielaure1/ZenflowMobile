import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useProspects from '@screens/(prospects)/prospect/prospect.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import useStyles from "@screens/(prospects)/prospect/prospect.styles";
import FabsProspect from '@components/fabs/fabs-prospect/fabs-prospect';
import BackgroundBanner from "@img/banner/banner-2.png";
import ProspectInfos from '@/widgets/prospects/prospect-infos/prospect-infos';

const Prospect = ({ route }) => {
  const styles = useStyles();
  const { id } = route.params;
  const {  prospect, isLoading, error } = useProspects({ id });

  console.log(prospect);
  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>    
   
      <Template>
        <></>
        <Banner title={(prospect?.society ? prospect?.society : prospect?.firstName)} image={BackgroundBanner} />
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
          <TabsViewBasic view={tabs} setView={setTabs} text="Infos" colors={{ background: "#CEF0FF", foreground: "#35BFFF" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{ background: "#FFF0D5", foreground: "#FFC045" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Liste des tâches" colors={{ background: "#E2F9E8", foreground: "#34A853" }} />
        </ScrollView> */}

      <ProspectInfos prospect={prospect}/>

      </Template>
     
     
      <FabsProspect prospect={prospect}/>
    </>

  );
};

export default Prospect;

    

      
