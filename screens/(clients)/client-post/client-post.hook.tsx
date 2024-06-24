// client-post.hook.ts

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useClientsApi } from '@api/api';
import { useSelector } from 'react-redux';
import ClientsProps from '@interfaces/clients.interface';
import StatusEnum from '@/common/enums/status.enum';

interface UseClientPostProps {
  route: any; 
}

const useClientPost = ({ route }: UseClientPostProps) => {
  const client = route?.params?.client as ClientsProps;
  const clientsApi = useClientsApi();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState<string>('Infos');
  const me = useSelector((state: any) => state?.auth?.customer); 
console.log(client);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientsProps>({
    defaultValues: {
      society: client ? client?.society : '',
      lastName: client ? client.lastName : '',
      firstName: client ? client.firstName : '',
      email: client ? client.email : '',
      phone: client ? client.phone : '',
      address: client ? client.address : '',
      status: client ? client.status : StatusEnum.ACTIVE,
      lastContactDate: client ? client.lastContactDate : undefined,
      marketSegment: client ? client.marketSegment : undefined,
      needs: client ? client.needs : undefined,
      leadSource: client ? client.leadSource : undefined,
      companySize: client ? client.companySize : undefined,
      estimatedBudget: client ? client.estimatedBudget : undefined,
      customFieldValues: client ? client.customFieldValues : [],
      ownerId: me?.customer?._id
    },
  });


  const navigation = useNavigation();

  let title = client._id ? 'Modifier' : 'Créer';
  title += ' un client';

  const handleCreate = async (data: FieldValues) => {
    try {
      const createdClient = await clientsApi.create(data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {
      const updatedClient = await clientsApi.update(client._id, data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { client, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useClientPost;
