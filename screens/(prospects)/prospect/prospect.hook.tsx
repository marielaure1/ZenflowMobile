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
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);
  // const [prospect, setProspect] = useState<ProspectsProps>();
  // const [customFields, setCustomFields] = useState<CustomFieldProps[]>([]);


  const { response: prospect, isLoading, error, refetch } = useFetchData(() => prospectsApi.findOne(id), ["prospects", id]);
  const { response : customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "prospect"), ["prospect-customs-fields", id]);

  return { error, prospect, refetch, isLoading, customFields, isLoadingCustomFields, fetchErrorCustomFields };
};

export default useProspect;