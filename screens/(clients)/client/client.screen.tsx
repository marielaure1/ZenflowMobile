import React from 'react';
import { View } from 'react-native';
import useClient from './client.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import ClientInfos from '@widgets/clients/client-infos/client-infos';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Fabs from '@/components/fabs/fabs/fabs-clients';
import { ChemicalGlass, Magicpen, Trash } from 'iconsax-react-native';

const ClientScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { client, control, errors, isLoading, error, editingField, setEditingField, customFields, isLoadingCustomFields, fetchErrorCustomFields, customFieldsAll, handleDelete } = useClient({ id });

  if (isLoading || error) {
    return <FetchPending isLoading={isLoading} error={error?.message} type="Not Found" />;
  }

  return (
    <>
    <Template>
      <Banner title={client?.datas?.clients?.society || `${client?.datas?.clients?.firstName} ${client?.datas?.clients?.lastName}`} btnBack />
      <View>
        <ClientInfos
          client={client?.datas?.clients}
          customFields={customFields?.datas?.customfields}
          customFieldsAll={customFieldsAll?.datas?.customfields}
          editingField={editingField}
          setEditingField={setEditingField}
          control={control}
          errors={errors}
        />
      </View>
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
          colors: {background: "#FFE5E5", foreground: "#FF6666"}
        },
        { 
          icon: <ChemicalGlass size="24" color="#A78BFA" />,
          text: 'Gérer les champs personnalisés', 
          delay: 200, 
          value: 140, 
          action: () => navigation.navigate("CustomFieldManage", {parentId: client?.datas?.clients?._id, schema: "client"}), 
          colors: {background: "#EDE9FE", foreground: "#A78BFA"}
        },
      ]}
    />
    </>
  );
};

export default ClientScreen;
