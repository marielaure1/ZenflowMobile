import { useNavigation } from '@react-navigation/native';
import { useProspectsApi, useCustomFieldsApi, useClientsApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

const useProspect = ({ id }) => {
  const prospectsApi = useProspectsApi();
  const clientsApi = useClientsApi();
  const customFieldsApi = useCustomFieldsApi();
  const navigation = useNavigation();

  const { response: prospect, isLoading, error, refetch } = useFetchData(() => prospectsApi.findOne(id), ["prospects", id]);
  const { response: customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "prospect"), ["prospect-customs-fields", id]);

  const handleDelete = async (id: string) => {
    try {
      await prospectsApi.delete(id);
      await queryClient.invalidateQueries({ queryKey: ["prospects"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransformToClient = async (id: string) => {
    try {
      await clientsApi.create(prospect?.datas?.prospects)
      await prospectsApi.delete(id);
      await queryClient.invalidateQueries({ queryKey: ["prospects"] });
      await queryClient.invalidateQueries({ queryKey: ["clients"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return { handleTransformToClient, handleDelete, error, prospect, refetch, isLoading, customFields, isLoadingCustomFields, fetchErrorCustomFields };
};

export default useProspect;
