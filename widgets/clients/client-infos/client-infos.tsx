import React from 'react';
import { View, Text } from 'react-native';
import Card from '@components/cards/card/card';
import { CustomField } from '@interfaces/clients.interface';
import useDateFormatter from '@hooks/useDateFormatter';
import statusList from "@constants/flags";
import Flag from '@components/flag/flag';

interface ClientInfosProps {
  client: {
    society?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    status?: string;
    lastContactDate?: Date;
    marketSegment?: string;
    needs?: string;
    leadSource?: string;
    companySize?: string;
    estimatedBudget?: number;
  };
  customFields?: CustomField[];
}

const ClientInfos: React.FC<ClientInfosProps> = ({ client, customFields }) => {
  
  const status = statusList.filter((val) => val?.status.includes(client?.status))
  

  return (
    <>
      <View className='flex-col gap-xl'>
        <Card>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Société:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.society}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Prénom:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.firstName}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Nom:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.lastName}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Email:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.email}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Téléphone:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.phone}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Adresse:</Text>
            <Text className='text-md font-[Poppins600]'>{client?.address}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Statut:</Text>
            {client?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}}/>}
            {client?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}}/>}
          </View>
          {client?.lastContactDate && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Dernier contact:</Text>
              <Text className='text-md font-[Poppins600]'>{useDateFormatter(client?.lastContactDate, 'dd MMMM, yyyy à HH:mm')}</Text>
            </View>
          )}
          {client?.marketSegment && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Segment de marché:</Text>
              <Text className='text-md font-[Poppins600]'>{client?.marketSegment}</Text>
            </View>
          )}
          {client?.needs && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Besoins:</Text>
              <Text className='text-md font-[Poppins600]'>{client?.needs}</Text>
            </View>
          )}
          {client?.leadSource && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Source de lead:</Text>
              <Text className='text-md font-[Poppins600]'>{client?.leadSource}</Text>
            </View>
          )}
          {client?.companySize && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Taille de l'entreprise:</Text>
              <Text className='text-md font-[Poppins600]'>{client?.companySize}</Text>
            </View>
          )}
          {client?.estimatedBudget && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Budget estimé:</Text>
              <Text className='text-md font-[Poppins600]'>{client?.estimatedBudget}</Text>
            </View>
          )}
        </Card>
        {customFields && (
          <Card>
            {customFields.map((customField, key) => (
              <View className='flex-row gap-md justify-between' key={key}>
                <Text className='text-md font-[Poppins400]'>{customField?.name}:</Text>
                {customField?.type === "text" && (
                  <Text className='text-md font-[Poppins600]'>{customField?.value}</Text>
                )}
                {customField?.type === "number" && (
                  <Text className='text-md font-[Poppins600]'>{customField?.value}</Text>
                )}
                {customField?.type === "select" && (
                  <Text className='text-md font-[Poppins600]'>{customField?.value}</Text>
                )}
              </View>
            ))}
          </Card>
        )}
      </View>
    </>
  );
};

export default ClientInfos;
