import React from 'react';
import { ScrollView,Text, View, FlatList, Button } from 'react-native';
import useStyles from "@screens/(tabs)/home/home.styles";
import usePlans from "@screens/(account)/plans/plans.hook";
import Banner from "@components/banner/banner";
import CardPlans from '@widgets/plans/card-plans/card-plans';
import Template from '@components/layout/template/template';
import FetchPending from '@components/fetch-pending/fetch-pending';
import Card from '@/components/cards/card/card';
import ButtonAccount from '@/components/buttons/button-account';
import { LogoutCurve } from 'iconsax-react-native';

const PlansScreen: React.FC = () => {
  const styles = useStyles();
  const { handleLogout, myPlan, plans, subscriptionState, navigation, response, error,errorPlan,  isLoading, handleChangePlan, handleCancelPlan} = usePlans();  

// TODO/ résilier
console.log("plans", plans);
console.log("myPlan", myPlan);


  return (
    <Template>
        <Banner title={"Abonnement"} btnBack/>

        <FetchPending isLoading={isLoading} error={errorPlan.message} type="Not Found"/>
   
        {(subscriptionState == "choose" || subscriptionState == "pending") && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-[30px]">
              {plans && plans.map((plan, index) => (
                <CardPlans subscriptionState={subscriptionState} key={index} action={() => handleChangePlan(plan?._id)}  plan={plan}/>
              ))}
            </ScrollView>
        )}

        {subscriptionState == "subscribed" && (
          <CardPlans subscriptionState={subscriptionState} plan={myPlan} action={() => handleCancelPlan()}/>
        )}


        <Card speed={3}>
          <ButtonAccount 
          text="Déconnexion" 
          action={handleLogout} 
          icon={<LogoutCurve size="18" color="#181818"/>}
          />
        </Card>
   
      
    </Template>
  );
}

export default PlansScreen;