import React from 'react';
import { ScrollView,Text, View, FlatList } from 'react-native';
import useStyles from "@screens/(tabs)/home/home.styles";
// import usePlans from "@screens/(subscriptions)/plans/plans.hook";
import Banner from "@/components/banner/banner";
import CardPlans from '@/components/cards/cardPlans/card-plans';

const PlansScreen: React.FC = () => {
  const styles = useStyles();
  // const { navigation, plans, handleChangePlan, error} = usePlans();

  // console.log(plans);
  
  // const handleRefresh = async () => {
  //   await getClientInfos();
  // };

  return (
    <ScrollView>
        <Banner title={"Abonnements"}/>

        {/* {plans && plans.map((plan, index) => (
          <CardPlans handleChangePlan={handleChangePlan} plan={plan} index={index}/>
        ))} */}
    </ScrollView>
  );
}

export default PlansScreen;