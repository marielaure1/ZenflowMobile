import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProspectsApi, useCustomFieldsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ProspectsProps from '@interfaces/prospects.interface';
import useFetchData from '@hooks/useFetchData';
import CustomFieldProps from '@/common/interfaces/custom-fields.interface';

const useProspect = ({id}) => {
  const prospectsApi = useProspectsApi();
  const customFieldsApi = useCustomFieldsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [prospect, setProspect] = useState<ProspectsProps[]>([]);
  const [customFields, setCustomFields] = useState<CustomFieldProps[]>([]);
console.log(id);

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => prospectsApi.findOne(id), ["prospects", id]);
  const { response : responseCustomFields, isLoading: fetchIsLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findAll(), ["custom-fields"]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!fetchIsLoading && !fetchIsLoadingCustomFields && responseCustomFields && response) {
      setProspect(response?.datas.prospects);
      setCustomFields(response?.datas["custom-fields"])
      setIsLoading(false);
    }
  }, [fetchIsLoading, fetchIsLoadingCustomFields, response, responseCustomFields]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { navigation, error, prospect, refetch, isLoading };
};

export default useProspect;