import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTaskCategoryApi } from '@api/api';
import ProjectsProps from '@interfaces/projects.interface';
// import useFetchData from '@hooks/useFetchData';

const useProject = ({ route }) => {
  const id = route?.params?.id;
  const projectId = route?.params?.projectId;
  const taskCategoryApi = useTaskCategoryApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<ProjectsProps[]>([]);
  const [tabs, setTabs] = useState("Infos");
  const [form, setForm] = useState({ name: '', description: '' });
  const navigation = useNavigation();

  let title = id ? "Modifier" : "Créer";
  title += " une section";

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try{
      console.log("taskCategory", { ...form, projectId });
      
      const taskCategory = await taskCategoryApi.create({ ...form, projectId });
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

  return { navigation, error, project, tabs, setTabs, title, handleInputChange, handleSubmit, form };
};

export default useProject;
