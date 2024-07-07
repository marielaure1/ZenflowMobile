import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useClientsApi, useCustomFieldsApi } from '@api/api';
import { useSelector } from 'react-redux';
import ClientsProps from '@interfaces/clients.interface';
import StatusEnum from '@enums/status.enum';
import queryClient from '@api/config.react-query';
import useFetchData from '@hooks/useFetchData';

interface UseClientProps {
  id: string;
}

const useClient = ({ id }: UseClientProps) => {
  const clientsApi = useClientsApi();
  const customFieldsApi = useCustomFieldsApi();
  const navigation = useNavigation();
  const { response: client, isLoading, error, refetch } = useFetchData(() => clientsApi.findOne(id), ["clients", id]);
  const { response : customFieldsAll, isLoading: isLoadingCustomFieldsAll, error: fetchErrorCustomFieldsAll } = useFetchData(() => customFieldsApi.findAllOwnerCustomsFields("clients"), ["clients-all-customs-fields", id]);
  const { response : customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "client"), ["client-customs-fields", id]);
  const me = useSelector((state: any) => state?.auth?.customer); 
  const [editingField, setEditingField] = useState<string | null>(null);

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<ClientsProps>();

  useEffect(() => {
    if (client) {
      reset({
        society: client?.datas?.clients?.society || '',
        lastName: client?.datas?.clients?.lastName || '',
        firstName: client?.datas?.clients?.firstName || '',
        email: client?.datas?.clients?.email || '',
        phone: client?.datas?.clients?.phone || '',
        address: client?.datas?.clients?.address || '',
        status: client?.datas?.clients?.status || StatusEnum.ACTIVE,
        lastContactDate: client?.datas?.clients?.lastContactDate ? new Date(client?.datas?.clients?.lastContactDate).toISOString().split('T')[0] : '',
        marketSegment: client?.datas?.clients?.marketSegment || '',
        needs: client?.datas?.clients?.needs || '',
        leadSource: client?.datas?.clients?.leadSource || '',
        companySize: client?.datas?.clients?.companySize || '',
        estimatedBudget: client?.datas?.clients?.estimatedBudget || '',
        customFieldValues: client?.datas?.clients?.customFieldValues || [],
        ownerId: me?.customer?._id
      });
    }
  }, [client, reset, me]);

  const handleUpdate = async (datas: ClientsProps) => {
    try {
      const updatedClient = await clientsApi.update(id, datas);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await clientsApi.delete(id);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change') {
        handleSubmit(handleUpdate)();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit]);

  return { client, control, errors, isLoading, error, editingField, setEditingField, handleDelete, customFields, isLoadingCustomFields, fetchErrorCustomFields, customFieldsAll, refetch };
};
 
export default useClient;
 