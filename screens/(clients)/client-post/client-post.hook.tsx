// client-post.hook.ts

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useClientsApi, useCustomersApi } from '@api/api';
import { useSelector } from 'react-redux';
import ClientsProps from '@interfaces/clients.interface';
import StatusEnum from '@enums/status.enum';
import queryClient from '@api/config.react-query';
import useFetchData from '@hooks/useFetchData';

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
      lastContactDate: client && client.lastContactDate ? new Date(client.lastContactDate).toISOString().split('T')[0] : undefined,
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

  let title = client?._id ? 'Modifier' : 'Créer';
  title += ' un client';

  const handleCreate = async (datas: ClientsProps) => {
    try {
      const createdClient = await clientsApi.create(datas);
      queryClient.invalidateQueries({ queryKey: ["clients"]})
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (datas: ClientsProps) => {
    try {
      const clientId = client?._id ?? "";
      const updatedClient = await clientsApi.update(clientId, datas);
      queryClient.invalidateQueries({ queryKey: ["clients"]})
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { client, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useClientPost;
