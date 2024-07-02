import React, { useRef } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useClients from '@screens/(clients)/client/client.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import FabsClient from '@/components/fabs/fabs-client/fabs-client';
import ClientInfos from '@/widgets/clients/client-infos/client-infos';
import FetchPending from '@/components/fetch-pending/fetch-pending';
import Fabs from '@/components/fabs/fabs';
import { Add, ChemicalGlass, Magicpen, Trash } from 'iconsax-react-native';

const Client = ({ navigation, route }) => {
  const { id } = route.params;
  const { handleDelete, client, isLoading, error, customFields, isLoadingCustomFields, fetchErrorCustomFields, customFieldsAll  } = useClients({ id });
  
 console.log("customFieldsAll", customFieldsAll);
 
  if(isLoading || error){
    return(
      <FetchPending isLoading={isLoading} error={error?.message} type="Not Found"/>
    )
  }

  return (
    <>    
      <Template>
        <Banner title={(client?.datas?.clients?.society ? client?.datas?.clients?.society : client?.datas?.clients?.firstName)} btnBack />

        {client?.datas?.clients && <ClientInfos client={client?.datas?.clients} customFields={customFields?.datas?.clients} />}

        {isLoadingCustomFields || fetchErrorCustomFields && 
        <FetchPending isLoading={isLoadingCustomFields} error={"Aucun champ personnalisé n'as été trouvé."} type="Not Found"/>
        }
      </Template>

      <Fabs
      btns={[
        { 
          icon: <Magicpen size="24" color="#FB923C" />,
          text: 'Modifier le client', 
          delay: 240, 
          value: 260, 
          action: () => navigation.navigate("ClientPost", {client: client?.datas?.clients}), 
          colors: {background: "#FFEDD5", foreground: "#FB923C"}
        },
        { 
          icon: <Trash size="24" color="#FF6666" />,
          text: 'Supprimer le client', 
          delay: 220, 
          value: 200, 
          action: () => handleDelete(client?.datas?.clients?._id), 
          action: () => handleDelete(client?.datas?.clients?._id), 
          colors: {background: "#FFE5E5", foreground: "#FF6666"}
        },
        { 
          icon: <ChemicalGlass size="24" color="#A78BFA" />,
          text: 'Gérer les champs personnalisés', 
          delay: 200, 
          value: 140, 
          action: () => navigation.navigate("CustomFieldManage", {parentId: client?.datas?.clients?._id, schema: "client"}), 
          action: () => navigation.navigate("CustomFieldManage", {parentId: client?.datas?.clients?._id, schema: "client"}), 
          colors: {background: "#EDE9FE", foreground: "#A78BFA"}
        },
      ]}
      />
    
    </>

  );
};

export default Client;
