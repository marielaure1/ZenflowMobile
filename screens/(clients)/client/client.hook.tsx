  import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi, useCustomFieldsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ClientsProps from '@interfaces/clients.interface';
import useFetchData from '@hooks/useFetchData';
import CustomFieldProps from '@/common/interfaces/custom-fields.interface';

const useClient = ({id}) => {
  const clientsApi = useClientsApi();
  const customFieldsApi = useCustomFieldsApi();
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [client, setClient] = useState<ClientsProps>();
  // const [customFields, setCustomFields] = useState<CustomFieldProps[]>([]);


  const { response: client, isLoading, error, refetch } = useFetchData(() => clientsApi.findOne(id), ["clients", id]);
  const { response : customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "client"), ["client-customs-fields", id]);

  return { error, client, refetch, isLoading, customFields, isLoadingCustomFields, fetchErrorCustomFields };
};

export default useClient;