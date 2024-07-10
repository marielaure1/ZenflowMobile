import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useTaskCategoriesApi } from '@api/api';
import { useSelector } from 'react-redux';
import TaskCategoriesProps from '@interfaces/task-categories.interface';
import queryClient from '@/api/config.react-query';

interface UseTaskCategorieProps {
  route: any; 
}

const useTaskCategorie = ({ route }: UseTaskCategorieProps) => {
  const taskCategorieData = route?.params?.taskCategorieData;
  const taskCategoriesApi = useTaskCategoriesApi();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [taskCategorie, setTaskCategorie] = useState<TaskCategoriesProps[]>([]);
  const [tabs, setTabs] = useState<string>('Infos');
  const me = useSelector((state: any) => state?.auth?.customer); 
  const projectId = route?.params?.projectId;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCategoriesProps>({
    defaultValues: {
      name: taskCategorieData ? taskCategorieData?.name : "",
      description: taskCategorieData ? taskCategorieData?.name : "",
      projectId: taskCategorieData ? taskCategorieData?.projectId : projectId
    },
  });

  const navigation = useNavigation();

  let title = taskCategoriesApi ? "Modifier" : "Créer";
  title += " une section";

  const handleCreate = async (data: TaskCategoriesProps) => {
    try {
      
      const createdTaskCategory = await taskCategoriesApi.create(data);
      await queryClient.invalidateQueries({queryKey: ["projects"]})
      await queryClient.invalidateQueries({queryKey: ["tasks"]})
      await queryClient.invalidateQueries({queryKey: ["tasks-categories"]})
      
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleUpdate = async (data: TaskCategoriesProps) => {
    try {
      const updatedTaskCategory = await taskCategoriesApi.update(id, data);
      await queryClient.invalidateQueries({queryKey: ["projects"]})
      await queryClient.invalidateQueries({queryKey: ["tasks"]})
      await queryClient.invalidateQueries({queryKey: ["tasks-categories"]})
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await taskCategoriesApi.delete(id);
      await queryClient.invalidateQueries({ queryKey: ["tasks-categories"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return { handleDelete, taskCategorie, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useTaskCategorie;
