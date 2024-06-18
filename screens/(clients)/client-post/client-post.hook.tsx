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
  const client = route?.params?.client;
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
      society: client ? client.society : "",
      lastName: client ? client.lastName : "",
      firstName: client ? client.firstName : "",
      email: client ? client.email : "",
      phone: client ? client.phone : "",
      address: client ? client.address : "",
      status: client ? client.status : "",
      customFields: client ? client.customFields : []
    }
  });
  
  const me = useSelector((state) => state?.auth?.customer);
  const navigation = useNavigation();
  
  let title = id ? "Modifier" : "Créer";
  title += " un client";

  const handleCreate = async (data: ClientsProps) => {

    console.log("create");
    
    
    try{
      const createdClient = await clientsApi.create({...data, ownerId: me?.customer?._id});
      navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };

  const handleUpdate = async (data: ClientsProps) => {
    console.log("update");
    try{
      const updatedClient = await clientsApi.update(client._id, {...data, ownerId: me?.customer?._id});
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

  return { control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useClientPost;
