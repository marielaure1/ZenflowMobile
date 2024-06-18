import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomFieldsApi } from '@api/api';
import CustomFieldProps from '@interfaces/custom-field.interface';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
// import useFetchData from '@hooks/useFetchData';

const useCustomFieldPost = ({ route }) => {
  const id = route?.params?.id;
  const schema = route?.params?.schema;
  const customFieldsApi = useCustomFieldsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");
  
  const me = useSelector((state) => state.auth.customer);
  const navigation = useNavigation();
  
  let title = id ? "Modifier" : "Créer";
  title += " un champ";

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CustomFieldProps>({
    defaultValues: {
      name: "",
      type: "text",
      options: null,
      schema
    }
  });

  const handleCreate = async (data: CustomFieldProps) => {
    try {


      data.type = data.type[0]
      
  console.log(data);
  
      
      // if(type == "client"){
        const updatedCustomFieldsApi = await customFieldsApi.create({...data, schemaIds: null, ownerId: me?.customer?._id});
        console.log(updatedCustomFieldsApi);
        
        navigation.goBack();

      // }
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

  return { navigation, control, errors, tabs, setTabs, title, handleCreate, handleSubmit };
};

export default useCustomFieldPost;
