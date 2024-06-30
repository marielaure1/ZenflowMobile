import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomFieldsApi } from '@api/api';
import CustomFieldProps from '@interfaces/custom-field.interface';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import CustomFieldEnum from '@/common/enums/custom-field.enum';
// import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';
const useCustomFieldPost = ({ route }) => {
  const parentId = route?.params?.parentId;
  const item = route?.params?.item;
  const schema = route?.params?.schema;
  const customFieldsApi = useCustomFieldsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");
  const [selectedType, setSelectedType] = useState(item ? item?.type : null);

  const me = useSelector((state) => state.auth.customer);
  const navigation = useNavigation();
  
  let title = item ? "Modifier" : "Créer";
  title += " un champ";

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors  }
  } = useForm<CustomFieldProps>({
    defaultValues: {
      name: item ? item?.name : "",
      type: item ? item?.type : CustomFieldEnum.TEXT,
      options: item ? item?.options : null,
      schema,
      schemaIds: parentId ? [parentId] : null
    }
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      {
        setSelectedType(value.type)
        console.log("option", value.options)
      }
    )
    return () => subscription.unsubscribe()
  }, [watch])
  

  const handleCreate = async (data: CustomFieldProps) => {
    
    try {
        const updatedCustomFieldsApi = await customFieldsApi.createForOne(schema, {...data, ownerId: me?.customer?._id});
        queryClient.invalidateQueries({ queryKey: [`${schema}-customs-fields`] });
        navigation.goBack();
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleUpdate = async (data: CustomFieldProps) => {
    try {
        const updatedCustomFieldsApi = await customFieldsApi.update(item?._id, {...data, ownerId: me?.customer?._id});
        queryClient.invalidateQueries({ queryKey: [`${schema}-customs-fields`] });
        navigation.goBack();
    } catch (error) {
      console.log(error);
      
    }
  }


  // useEffect(() => {
  //   if (!fetchIsLoading && response) {
  //     setCustomField(response?.datas?.custom-fields);
  //     setIsLoading(false);
  //   }
  // }, [fetchIsLoading, response]);

  // useEffect(() => {
  //   if (fetchError) {
  //     setError(fetchError.message);
  //     setIsLoading(false);
  //   }
  // }, [fetchError]);

  return { selectedType, item, navigation, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useCustomFieldPost;
