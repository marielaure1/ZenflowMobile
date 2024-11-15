import React from 'react';
import { View, Text } from 'react-native';
import Card from '@components/cards/card/card';
import { CustomField } from '@interfaces/clients.interface';
import useDateFormatter from '@hooks/useDateFormatter';
import statusList from "@constants/flags";
import Flag from '@components/flag/flag';

interface ProspectInfosProps {
  prospect: {
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

const ProspectInfos: React.FC<ProspectInfosProps> = ({ prospect, customFields }) => {
  const status = statusList.filter((val) => val?.status.includes(prospect?.status));

  return (
    <>
      <View className='flex-col gap-xl'>
        <Card>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Société:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.society}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Prénom:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.firstName}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Nom:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.lastName}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Email:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.email}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Téléphone:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.phone}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Adresse:</Text>
            <Text className='text-md font-[Poppins600]'>{prospect?.address}</Text>
          </View>
          <View className='flex-row gap-md justify-between'>
            <Text className='text-md font-[Poppins400]'>Statut:</Text>
            {prospect?.status && <Flag text={status[0].text} colors={{"background": status[0].background, "foreground": status[0].foreground}} />}
          </View>
          {prospect?.lastContactDate && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Dernier contact:</Text>
              <Text className='text-md font-[Poppins600]'>{useDateFormatter(prospect?.lastContactDate, 'dd MMMM, yyyy à HH:mm')}</Text>
            </View>
          )}
          {prospect?.marketSegment && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Segment de marché:</Text>
              <Text className='text-md font-[Poppins600]'>{prospect?.marketSegment}</Text>
            </View>
          )}
          {prospect?.needs && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Besoins:</Text>
              <Text className='text-md font-[Poppins600]'>{prospect?.needs}</Text>
            </View>
          )}
          {prospect?.leadSource && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Source de lead:</Text>
              <Text className='text-md font-[Poppins600]'>{prospect?.leadSource}</Text>
            </View>
          )}
          {prospect?.companySize && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Taille de l'entreprise:</Text>
              <Text className='text-md font-[Poppins600]'>{prospect?.companySize}</Text>
            </View>
          )}
          {prospect?.estimatedBudget && (
            <View className='flex-row gap-md justify-between'>
              <Text className='text-md font-[Poppins400]'>Budget estimé:</Text>
              <Text className='text-md font-[Poppins600]'>{prospect?.estimatedBudget}</Text>
            </View>
          )}
        </Card>
        {customFields && (
          <Card>
            {customFields.map((customField, key) => (
              <View className='flex-row gap-md justify-between' key={key}>
                <Text className='text-md font-[Poppins400]'>{customField?.name}:</Text>
                <Text className='text-md font-[Poppins600]'>{customField?.value}</Text>
              </View>
            ))}
          </Card>
        )}
      </View>
    </>
  );
};

export default ProspectInfos;
