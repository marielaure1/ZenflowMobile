import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomFieldsApi } from '@api/api';
import CustomFieldProps from '@interfaces/custom-fields.interface';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

const useCustomFieldManage = ({ route }) => {
  const parentId = route?.params?.parentId;
  const schema = route?.params?.schema;
  const customFieldsApi = useCustomFieldsApi();
  const [customField, setCustomField] = useState([]);
  const [tabs, setTabs] = useState("Infos");
  const { response: initialCustomField, isLoading: fetchIsLoading, error: fetchError } = useFetchData(() => parentId ?  customFieldsApi.findOneOwnerCustomsFields(parentId, schema) : customFieldsApi.findAllOwnerCustomsFields(schema), [`${schema}-customs-fields`]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  console.log("eeeeeee", initialCustomField);
  

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
    // queryClient.invalidateQueries({queryKey: ["clients-customs-fields"]})
  }, [])
  

  useEffect(() => {
    if (!fetchIsLoading && initialCustomField) {

      if (initialCustomField?.code === 404) {
        setError("Aucun champ personnalisé n'as été trouvé.");
        setCustomField([]);
      } else {
        setCustomField(initialCustomField?.datas?.customfields);
        setError("");
      }
      setIsLoading(false);
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
      await customFieldsApi.updatePositions(schema, data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await customFieldsApi.delete(id);
      queryClient.invalidateQueries({ queryKey: [`${schema}-customs-fields`] });
    } catch (error) {
      console.error(error);
    }
  };

  return { parentId, customField, error, isLoading, keyExtractor, navigation, handleDragEnd, handleDelete, control, errors, tabs, setTabs, title: route?.params?.id ? "Modifier un champ" : "Créer un champ", handleSubmit, schema: route?.params?.schema };
};

export default useCustomFieldManage;
