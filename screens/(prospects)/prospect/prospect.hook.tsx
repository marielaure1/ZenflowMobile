import { useNavigation } from '@react-navigation/native';
import { useProspectsApi, useCustomFieldsApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';

const useProspect = ({ id }) => {
  const prospectsApi = useProspectsApi();
  const customFieldsApi = useCustomFieldsApi();

  const { response: prospect, isLoading, error, refetch } = useFetchData(() => prospectsApi.findOne(id), ["prospects", id]);
  const { response: customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "prospect"), ["prospect-customs-fields", id]);

  return { error, prospect, refetch, isLoading, customFields, isLoadingCustomFields, fetchErrorCustomFields };
};

export default useProspect;
