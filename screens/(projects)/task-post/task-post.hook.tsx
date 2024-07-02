import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTasksApi } from '@api/api';
import ProjectsProps from '@interfaces/projects.interface';
import queryClient from '@/api/config.react-query';
// import useFetchData from '@hooks/useFetchData';

const useProject = ({ route }) => {
  const id = route?.params?.id;
  const taskCategoryId = route?.params?.taskCategoryId;
  const tasksApi = useTasksApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");
  const [form, setForm] = useState({ title: '', description: '', status: '' });
  const navigation = useNavigation();

  let title = id ? "Modifier" : "Créer";
  title += " une tache";

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try{
      
      const taskCategories = await tasksApi.create({ ...form, taskCategoryId });
      queryClient.invalidateQueries({queryKey: ["projects"]})
      queryClient.invalidateQueries({queryKey: ["tasks"]})
      navigation.goBack();
      
    } catch(error){
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (!fetchIsLoading && response) {
  //     setProject(response?.datas?.projects);
  //     setIsLoading(false);
  //   }
  // }, [fetchIsLoading, response]);

  // useEffect(() => {
  //   if (fetchError) {
  //     setError(fetchError.message);
  //     setIsLoading(false);
  //   }
  // }, [fetchError]);

  return { navigation, error, tabs, setTabs, title, handleInputChange, handleSubmit, form };
};

export default useProject;
