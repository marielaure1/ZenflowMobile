import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import useCardProspect from "@components/cards/card-prospect/card-prospect.hook";
import Card from '@components/cards/card/card';
import useDateFormatter from '@hooks/useDateFormatter';

// Définir les types des props de la carte prospect
interface CardProspectsProps {
  data: {
    _id: string;
    society?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: Date | string
  };
}

const CardProspects: React.FC<CardProspectsProps> = ({ data }) => {
  const { navigation } = useCardProspect();
  const createdAt = useDateFormatter(data?.createdAt, 'dd MMMM yyyy');
  return (
    <Card className='w-[47%]'>
      <TouchableOpacity className="flex-col gap-md " onPress={() => navigation.navigate("Prospect", { id: data._id })}>
        <View className='w-full'>
            {data?.society && <Text className='text-md text-base-500'>{createdAt}</Text>}
        </View>
        <View className="flex-col gap-xs">
            {data?.society && <Text className='text-lg text-neutral-900 font-[Poppins600]' >{data?.society}</Text>}

            <Text className={`text-lg text-neutral-900 ${data?.society ? "font-[Poppins400]" : "font-[Poppins600]"}`}>
                {data?.firstName} {data?.lastName}
            </Text>
        </View>
        {/* <View className="flex-col gap-xs">
            {data?.society && <Text className='text-lg text-neutral-900 font-[Poppins600]' >{data?.society}</Text>}

            <Text className={`text-lg text-neutral-900 ${data?.society ? "font-[Poppins400]" : "font-[Poppins600]"}`}>
                {data?.firstName} {data?.lastName}
            </Text>
        </View> */}
      </TouchableOpacity>
    </Card>
  );
};

export default CardProspects;
