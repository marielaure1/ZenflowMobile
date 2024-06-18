import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useClients from '@screens/(clients)/client/client.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import useStyles from "@screens/(clients)/client/client.styles";
import FabsClient from '@/components/fabs/fabs-client/fabs-client';
import BackgroundBanner from "@img/banner/banner-2.png";
import ClientInfos from '@components/clients/client-infos/client-infos';
import FetchPending from '@/components/fetch-pending/fetch-pending';

const Client = ({ route }) => {
  const styles = useStyles();
  const { id } = route.params;
  const {  client, isLoading, error, customFields, isLoadingCustomFields, fetchErrorCustomFields  } = useClients({ id });
  
  if(isLoading || error){
    return(
      <FetchPending isLoading={isLoading} error={error?.message} type="Not Found"/>
    )
  }

  return (
    <>    
   
      <Template>
        <Banner title={(client?.datas?.clients?.society ? client?.datas?.clients?.society : client?.datas?.clients?.firstName)} image={BackgroundBanner} />

        
        
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.list}>
          <TabsViewBasic view={tabs} setView={setTabs} text="Infos" colors={{ background: "#CEF0FF", foreground: "#35BFFF" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Analyse" colors={{ background: "#FFF0D5", foreground: "#FFC045" }} />
          <TabsViewBasic view={tabs} setView={setTabs} text="Liste des tâches" colors={{ background: "#E2F9E8", foreground: "#34A853" }} />
        </ScrollView> */}

        {client?.datas?.clients && <ClientInfos client={client?.datas?.clients} customFields={customFields?.datas?.clients} />}

        {isLoadingCustomFields || fetchErrorCustomFields && 
        <FetchPending isLoading={isLoadingCustomFields} error={"Aucun champ personnalisé n'as été trouvé."} type="Not Found"/>
        }
        

      </Template>
     
      {client?.datas?.clients && <FabsClient client={client?.datas?.clients}/>}
      
    </>

  );
};

export default Client;

    

      
