import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import useCardClient from "@components/cards/card-client/card-client.hook";
import Card from '@components/cards/card/card';
import useDateFormatter from '@hooks/useDateFormatter';
import Flag from '@/components/flag/flag';

// Définir les types des props de la carte client
interface CardClientsProps {
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


const CardClients: React.FC<CardClientsProps> = ({ data }) => {
  const { navigation, statusList } = useCardClient();

  const status = statusList.filter((val) => val?.status.includes(data?.status))
  
  return (
    <Card className='w-[47%]'>
      <TouchableOpacity className="flex-col gap-md " onPress={() => navigation.navigate("Client", { id: data._id })}>
        <View className='w-full flex-row justify-between items-center'>
            {data?.lastContactDate ? (
              <Text className='text-md text-base-500'>{useDateFormatter(data?.lastContactDate, 'dd MMMM yyyy')}</Text>
            ) : (
              <Text className='text-md text-base-500'>{useDateFormatter(data?.createdAt, 'dd MMMM yyyy')}</Text>
            )}

            {data?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}}/>}
        </View>
        <View className="flex-col gap-xs">
            {data?.society && <Text className='text-lg text-neutral-900 font-[Poppins600]' >{data?.society}</Text>}

            <Text className={`text-lg text-neutral-900 ${data?.society ? "font-[Poppins400]" : "font-[Poppins600]"}`}>
              {data?.society && "Nom complet : "} {data?.firstName} {data?.lastName}
            </Text>

            {data?.email && <Text className={`text-lg text-neutral-900 font-[Poppins400]`}>Email : {data?.email}</Text>}
            {data?.phone && <Text className={`text-lg text-neutral-900 font-[Poppins400]`}>Téléphone : {data?.phone}</Text>}
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CardClients;
