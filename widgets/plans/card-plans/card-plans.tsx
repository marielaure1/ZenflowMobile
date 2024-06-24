import React from "react";
import { View, Text } from "react-native";
import Button from "@components/buttons/button";
import Card from "@components/cards/card/card";
import LottieView from "lottie-react-native";
import { HuobiToken } from "iconsax-react-native";

const CardPlans = ({ action, plan, subscriptionState }: { action: () => void; plan: any; subscriptionState: string; }) => {
  return (
    <Card className="w-[250px]">
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <LottieView
          source={require("@icons/lottie/starter.json")}
          style={{
            width: 100 * 0.9,
            height: 100 * 0.9,
          }}
          autoPlay
          loop
        />

        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{plan?.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>
            {plan?.amount / 100}
            <Text style={{ marginRight: 5, fontSize: 18, fontWeight: '500' }}>
              {plan?.amount == 0 ? (
                "Gratuit"
              ) : (
                plan?.currency == "eur" ? "€" : "$"
              )}
            </Text>
          </Text>
        </View>

      </View>

      <Text>{plan?.description}</Text>

      <View>
        {plan?.features && plan?.features.map((feature: string, index: number) => (
          <Text key={index} style={{ fontSize: 16, fontWeight: '400', color: '#374151' }}>
            <HuobiToken color="#38BDF8" size={18} />
            {feature}
          </Text>
        ))}
      </View>

      {subscriptionState === "subscribed" && (
        <Button
          text="Me désabonner"
          type="red"
          action={() => action()}
        />
      )}

      {/* {(subscriptionState === "choose" || subscriptionState === "pending") && (
        <Button
          text="Choisir"
          type="blue"
          disabled={subscriptionState === "pending"}
          action={() => action()}
        />
      )} */}

    </Card>
  );
};

export default CardPlans;
