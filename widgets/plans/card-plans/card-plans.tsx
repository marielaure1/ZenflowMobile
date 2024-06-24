import { View, Text, useWindowDimensions } from "react-native"
import Button from "@components/buttons/button";
import React from "react";
import Card from "@components/cards/card/card";
import LottieView from "lottie-react-native";
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from "react-native-reanimated";
import { HuobiToken } from "iconsax-react-native";

const CardPlans = ({handleChangePlan, plan, subscriptionState}) => {
    return (
      <Card className="w-[250px]">
        <View className="w-full flex-row gap-md items-center">
          <LottieView
            source={require("@icons/lottie/starter.json")}
            style={{
              width: 100 * 0.9,
              height: 100 * 0.9,
            }}
            autoPlay
            loop
          />

        <View className="flex-col gap-sm">
          <Text className="text-2xl font-[Poppins600]">{plan?.name}</Text>
          <Text className="text-xl font-[Poppins500]">
            {plan?.amount / 100}
            <Text className="mr-5 text-xl font-[Poppins500]">{plan?.amount == 0 ? (
                "Gratuit"
              ) : (
                plan?.currency == "eur" ? "€" : "€"
              )
              }
            </Text>
          </Text>
            
        </View>
          
        </View>
        
        
        <Text>{plan?.description}</Text>
        <View>
            {plan?.features && plan?.features.map((feature, index) => (
                <Text key={index} className="text-md font-[Poppins400] text-zinc-900">
                  <HuobiToken color="#38BDF8" size="18"/>
                  {feature}
                  </Text>
            ))}
        </View>
        <Button text="Choisir" type="blue" disabled={subscriptionState == "pending"} action={() => handleChangePlan(plan._id)}/>
      </Card>
    )
}

export default CardPlans;
