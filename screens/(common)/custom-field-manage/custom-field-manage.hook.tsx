import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomFieldsApi } from '@api/api';
import CustomFieldProps from '@interfaces/custom-fields.interface';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import useFetchData from '@hooks/useFetchData';

const useCustomFieldManage = ({ route }) => {
  const customFieldsApi = useCustomFieldsApi();
  const [customField, setCustomField] = useState([]);
  const [tabs, setTabs] = useState("Infos");
  const { response: initialCustomField, isLoading: fetchIsLoading, error: fetchError } = useFetchData(() => customFieldsApi.findAllOwnerCustomsFields("client"), ["client-customs-fields"]);

  const me = useSelector((state) => state.auth.customer);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CustomFieldProps>({
    defaultValues: {
      name: "",
      type: "text",
      options: null,
      schema: route?.params?.schema
    }
  });

  useEffect(() => {
    if (!fetchIsLoading && initialCustomField) {
      console.log(initialCustomField?.datas?.clients);
      
      setCustomField(initialCustomField?.datas?.clients);
    }
  }, [fetchIsLoading, initialCustomField]);

  useEffect(() => {
    if (fetchError) {
      console.error(fetchError.message);
    }
  }, [fetchError]);

  const keyExtractor = (item) => item._id;

  const handleDragEnd = ({ data }) => {
    setCustomField(data);
    handleUpdate(data);
  };

  const handleUpdate = async (data) => {
    try {
      await customFieldsApi.updatePositions("client", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  return { customField, keyExtractor, navigation, handleDragEnd, handleDelete, control, errors, tabs, setTabs, title: route?.params?.id ? "Modifier un champ" : "Créer un champ", handleSubmit, schema: route?.params?.schema };
};

export default useCustomFieldManage;