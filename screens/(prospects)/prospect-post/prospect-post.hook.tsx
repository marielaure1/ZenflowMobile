import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useProspectsApi } from '@api/api';
import ProspectsProps from '@interfaces/prospects.interface';
import { useSelector } from 'react-redux';
// import useFetchData from '@hooks/useFetchData';
import FieldControl from "@components/fields/field-control";

const useProspectPost = ({ route }) => {
  const id = route?.params?.id;
  const prospect = route?.params?.prospect;
  const prospectsApi = useProspectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ProspectsProps>({
    defaultValues: {
      society: prospect ? prospect.society : "",
      lastName: prospect ? prospect.lastName : "",
      firstName: prospect ? prospect.firstName : "",
      email: prospect ? prospect.email : "",
      phone: prospect ? prospect.phone : "",
      address: prospect ? prospect.address : "",
      status: prospect ? prospect.status : "",
      lastContactDate: prospect ? prospect.lastContactDate : null,
      marketSegment: prospect ? prospect.marketSegment : "",
      needs: prospect ? prospect.needs : "",
      leadSource: prospect ? prospect.leadSource : "",
      companySize: prospect ? prospect.companySize : "",
      estimatedBudget: prospect ? prospect.estimatedBudget : null
    }
  });
  
  const me = useSelector((state) => state?.auth?.customer);
  const navigation = useNavigation();
  
  let title = id ? "Modifier" : "Créer";
  title += " un prospect";

  const handleCreate = async (data: ProspectsProps) => {

    console.log("create");
    
    
    try{
      const createdProspect = await prospectsApi.create({...data, ownerId: me?.customer?._id});
      navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };

  const handleUpdate = async (data: ProspectsProps) => {
    console.log("update");
    try{
      const updatedProspect = await prospectsApi.update(prospect._id, {...data, ownerId: me?.customer?._id});
      navigation.goBack();
      
    } catch(error){
      console.log(error);
      
    }
  };
  // useEffect(() => {
  //   if (!fetchIsLoading && response) {
  //     setProspect(response?.datas?.prospects);
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

export default useProspectPost;
