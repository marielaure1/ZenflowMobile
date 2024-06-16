import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useClientsApi } from '@api/api';
import ClientsProps from '@interfaces/clients.interface';
import { useSelector } from 'react-redux';
// import useFetchData from '@hooks/useFetchData';
import FieldControl from "@components/fields/field-control";

const useClientPost = ({ route }) => {
  const id = route?.params?.id;
  const taskCategoryId = route?.params?.taskCategoryId;
  const clientsApi = useClientsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ClientsProps>({
    defaultValues: {
      society: "",
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      address: "",
      status: "",
      ownerId: "",
      customFields: []
    }
  });
  
  const me = useSelector((state) => state?.auth?.customer);
  const navigation = useNavigation();
  
  let title = id ? "Modifier" : "Créer";
  title += " un client";

  const handleCreate = async (data: ClientsProps) => {
    
    try{
      const createdClient = await clientsApi.create({...data, ownerId: me?.customer?._id});
      navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };
  // useEffect(() => {
  //   if (!fetchIsLoading && response) {
  //     setClient(response?.datas?.clients);
  //     setIsLoading(false);
  //   }
  // }, [fetchIsLoading, response]);

  // useEffect(() => {
  //   if (fetchError) {
  //     setError(fetchError.message);
  //     setIsLoading(false);
  //   }
  // }, [fetchError]);

  return { control, errors, tabs, setTabs, title, handleCreate, handleSubmit };
};

export default useClientPost;
