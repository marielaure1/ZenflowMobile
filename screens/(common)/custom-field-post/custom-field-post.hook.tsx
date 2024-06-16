import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi } from '@api/api';
import CustomFieldProps from '@interfaces/custom-field.interface';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
// import useFetchData from '@hooks/useFetchData';

const useCustomFieldPost = ({ route }) => {
  const id = route?.params?.id;
  const type = route?.params?.type;
  const clientsApi = useClientsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");
  const [form, setForm] = useState({ name: '', description: '', priority: '' });
  
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
      type: ""
    }
  });

  const handleCreate = async (data: CustomFieldProps) => {
    try {
      if(type == "client"){
        const updatedClient = await clientsApi.createCustomField({...data, ownerId: me?.customer?._id});
        navigation.goBack();
      }
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

  return { navigation, control, errors, tabs, setTabs, title, handleCreate, handleSubmit, form };
};

export default useCustomFieldPost;
