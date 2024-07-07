  import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi, useCustomFieldsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ClientsProps from '@interfaces/clients.interface';
import useFetchData from '@hooks/useFetchData';
import CustomFieldProps from '@interfaces/custom-fields.interface';
import queryClient from '@api/config.react-query';

const useClient = ({id}: {id: string }) => {
  const clientsApi = useClientsApi();
  const customFieldsApi = useCustomFieldsApi();
  const navigation = useNavigation();
  const { response: client, isLoading, error, refetch } = useFetchData(() => clientsApi.findOne(id), ["clients", id]);
  const { response : customFieldsAll, isLoading: isLoadingCustomFieldsAll, error: fetchErrorCustomFieldsAll, refetch: refetchCustomFieldsAll } = useFetchData(() => customFieldsApi.findAllOwnerCustomsFields("clients"), ["clients-all-customs-fields", id]);
  const { response : customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "client"), ["client-customs-fields", id]);

  const handleDelete = async (id: string) => {
    try {
      await clientsApi.delete(id);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return { handleDelete, error, client, refetch, isLoading, customFields, isLoadingCustomFields, fetchErrorCustomFields, customFieldsAll };
};

export default useClient;