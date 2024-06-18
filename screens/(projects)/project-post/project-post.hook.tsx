import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi } from '@api/api';
import ProjectsProps from '@interfaces/projects.interface';
import { useSelector } from 'react-redux';
// import useFetchData from '@hooks/useFetchData';

const useProjectPost = ({ route }) => {
  const id = route?.params?.id;
  const taskCategoryId = route?.params?.taskCategoryId;
  const projectsApi = useProjectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState("Infos");
  const [form, setForm] = useState({ name: '', description: '', priority: 'sdsd' });
  
  const me = useSelector((state) => state.auth.customer);
  const navigation = useNavigation();
  
  let title = id ? "Modifier" : "Créer";
  title += " un projet";

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(form);
    
    try{
      const taskCategory = await projectsApi.create({ ...form, ownerId: me.customer._id });
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

export default useProjectPost;
