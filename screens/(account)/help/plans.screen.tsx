import React from 'react';
import { ScrollView,Text, View, FlatList, Button } from 'react-native';
import useStyles from "@screens/(tabs)/home/home.styles";
import usePlans from "@screens/(account)/plans/plans.hook";
import Banner from "@components/banner/banner";
import CardPlans from '@widgets/plans/card-plans/card-plans';
import Template from '@components/layout/template/template';
import FetchPending from '@components/fetch-pending/fetch-pending';

const PlansScreen: React.FC = () => {
  const styles = useStyles();
  const { navigation, response, error, isLoading, handleChangePlan, openPaymentSheet} = usePlans();
  

  return (
    <Template>
        <Banner title={"Abonnements"} btnBack/>

        <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
        
        {response?.datas?.plans && response?.datas?.plans.map((plan, index) => (
          <CardPlans key={index} handleChangePlan={handleChangePlan} plan={plan} index={index}/>
        ))}

      <Button
        title="Checkout"
        onPress={openPaymentSheet}
      />

    </Template>
  );
}

export default PlansScreen;