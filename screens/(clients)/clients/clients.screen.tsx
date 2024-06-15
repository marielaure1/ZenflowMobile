import * as React from "react";
import Template from '@/components/layout/template/template';
import Banner from '@/components/banner/banner';
import TabsViewBasic from '@/components/tabs-view/basic/tabs-view-basic';
import useClients from '@screens/(clients)/clients/clients.hook';
import useStyles from '@screens/(clients)/clients/clients.styles';
import KanbanBoard from '@/components/kanban/kanban';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, View, Text } from 'react-native';
// import CardClient from '@components/cards/card-client/card-client';
import BackgroundBanner from "@img/banner/banner-2.png";
import FabsClients from '@components/fabs/fabs-clients/fabs-clients';
import FetchPending from '@components/fetch-pending/fetch-pending';

export default function Clients() {
  const styles = useStyles();
  const { navigation, isLoading, error, clientsList, refetch, tabs, setTabs } = useClients();

  
 

  return (
    <>
      <Template>
        <Banner title={"Clients"} image={BackgroundBanner}/>

       <FetchPending isLoading={isLoading} error={error} />
      
      </Template>

      <FabsClients />
    </>
  );
}