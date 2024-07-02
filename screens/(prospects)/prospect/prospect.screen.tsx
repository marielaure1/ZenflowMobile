import React from 'react';
import { View } from 'react-native';
import useProspect from '@screens/(prospects)/prospect/prospect.hook';
import Template from '@components/layout/template/template';
import Banner from '@components/banner/banner';
import ProspectInfos from '@widgets/prospects/prospect-infos/prospect-infos';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Fabs from '@components/fabs/fabs';
import { ChemicalGlass, Magicpen, Trash } from 'iconsax-react-native';

const Prospect = ({ navigation, route }) => {
  const { id } = route.params;
  const { prospect, isLoading, error, customFields, isLoadingCustomFields, fetchErrorCustomFields } = useProspect({ id });

  if (isLoading || error) {
    return <FetchPending isLoading={isLoading} error={error?.message} type="Not Found" />;
  }

  return (
    <>    
      <Template>
        <Banner title={prospect?.datas?.prospects?.society || prospect?.datas?.prospects?.firstName} btnBack />

        {prospect?.datas?.prospects && <ProspectInfos prospect={prospect?.datas?.prospects} customFields={customFields?.datas?.prospects} />}

        {(isLoadingCustomFields || fetchErrorCustomFields) && 
        <FetchPending isLoading={isLoadingCustomFields} error={"Aucun champ personnalisé n'as été trouvé."} type="Not Found" />
        }
      </Template>

      <Fabs
        btns={[
          { 
            icon: <Magicpen size="24" color="#FB923C" />,
            text: 'Modifier le prospect', 
            delay: 240, 
            value: 260, 
            action: () => navigation.navigate("ProspectPost", {prospect: prospect?.datas?.prospects}), 
            colors: {background: "#FFEDD5", foreground: "#FB923C"}
          },
          { 
            icon: <Trash size="24" color="#FF6666" />,
            text: 'Supprimer le prospect', 
            delay: 220, 
            value: 200, 
            action: () => navigation.navigate("ProspectPost"), 
            colors: {background: "#FFE5E5", foreground: "#FF6666"}
          },
          { 
            icon: <ChemicalGlass size="24" color="#A78BFA" />,
            text: 'Gérer les champs personnalisés', 
            delay: 200, 
            value: 140, 
            action: () => navigation.navigate("CustomFieldManage", { parentId: prospect._id, schema: "prospect" }), 
            colors: {background: "#EDE9FE", foreground: "#A78BFA"}
          },
        ]}
      />
    </>
  );
};

export default Prospect;
