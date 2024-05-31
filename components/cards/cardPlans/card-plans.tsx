import { View, Text } from "react-native"
import Button from "@/components/buttons/button";

const CardPlans = ({handleChangePlan, plan, index}) => {
    return (
        <View key={index}>
            <Text>{plan?.name}</Text>
            <View>
              <Text>{plan?.amount}</Text>
              <Text>{plan?.amount == 0 ? (
                  "Gratuit"
                ) : (
                  plan?.currency == "eur" ? "€" : "$"
                )
                }
              </Text>
            </View>
            
            <Text>{plan?.description}</Text>
            <View>
                {plan?.features && plan?.features.map((feature, index) => (
                    <Text key={index}>{feature}</Text>
                ))}
            </View>
            <Button text="Choisir" type="blue" action={() => handleChangePlan(plan._id)}/>
        </View>
    )
}

export default CardPlans;