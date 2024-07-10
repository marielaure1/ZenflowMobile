import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTasksApi } from '@api/api';
import queryClient from '@/api/config.react-query';

const useProject = ({ route }) => {
  const id = route?.params?.id;
  const taskCategorieData = route?.params?.taskCategorieData;
  const taskCategoryId = taskCategorieData._id;
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
    setIsLoading(true);
    try {
      if (id) {
        await tasksApi.update(id, { ...form, taskCategoryId });
      } else {
        await tasksApi.create({ ...form, taskCategoryId });
      }
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      await queryClient.invalidateQueries({ queryKey: ["tasks-categories"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await tasksApi.findOne(id);
          setForm({
            title: response?.datas?.tasks?.title || '',
            description: response?.datas?.tasks?.description || '',
            status: response?.datas?.tasks?.status || ''
          });
        } catch (error) {
          console.error(error);
          setError(error.message || 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [id, tasksApi]);

  return {
    navigation,
    error,
    isLoading,
    tabs,
    setTabs,
    title,
    handleInputChange,
    handleSubmit,
    form
  };
};

export default useProject;
