import React from 'react';
import { ScrollView,Text, View, FlatList, Button } from 'react-native';
import useStyles from "@screens/(tabs)/home/home.styles";
import usePlans from "@screens/(account)/plans/plans.hook";
import Banner from "@/components/banner/banner";
import CardPlans from '@/components/cards/cardPlans/card-plans';
import BackgroundBanner1 from "@img/banner/banner-1.jpg";

const PlansScreen: React.FC = () => {
  const styles = useStyles();
  const { navigation, response, error, isLoading, handleChangePlan, openPaymentSheet} = usePlans();
  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView>
        <Banner title={"Abonnements"} image={BackgroundBanner1}/>

        {response?.datas?.plans && response?.datas?.plans.map((plan, index) => (
          <CardPlans key={index} handleChangePlan={handleChangePlan} plan={plan} index={index}/>
        ))}

      <Button
        title="Checkout"
        onPress={openPaymentSheet}
      />

    </ScrollView>
  );
}

export default PlansScreen;