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
  const { myPlan, subscriptionState, navigation, response, error, isLoading, handleChangePlan, hangleCancelPlan, openPaymentSheet} = usePlans();  

// TODO/ résilier

  return (
    <Template>
        <Banner title={"Abonnements"} btnBack/>

        <FetchPending isLoading={isLoading} error={error} type="Not Found"/>
   
        {(subscriptionState == "choose" || subscriptionState == "pending") && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-[30px]">
              {response?.datas?.plans && response?.datas?.plans.map((plan, index) => (
                <CardPlans subscriptionState={subscriptionState} key={index} action={() => handleChangePlan(plan?._id)}  plan={plan}/>
              ))}
            </ScrollView>
        )}

        {subscriptionState == "subscribed" && (
          <CardPlans subscriptionState={subscriptionState} plan={myPlan} action={() => hangleCancelPlan()}/>
        )}

   
      
    </Template>
  );
}

export default PlansScreen;