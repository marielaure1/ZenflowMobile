import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useTaskCategoriesApi } from '@api/api';
import { useSelector } from 'react-redux';
import TaskCategoriesProps from '@interfaces/task-categories.interface';

interface UseTaskCategorieProps {
  route: any; 
}

const useTaskCategorie = ({ route }: UseTaskCategorieProps) => {
  const id = route?.params?.id;
  const projectId = route?.params?.projectId;
  const taskCategoriesApi = useTaskCategoriesApi();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [taskCategorie, setTaskCategorie] = useState<TaskCategoriesProps[]>([]);
  const [tabs, setTabs] = useState<string>('Infos');
  const me = useSelector((state: any) => state?.auth?.customer); 
console.log(projectId);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCategoriesProps>({
    defaultValues: {
      name: route?.params?.name || '',
      description: route?.params?.description || '',
      projectId: projectId
    },
  });

  const navigation = useNavigation();

  let title = id ? "Modifier" : "Créer";
  title += " une section";

  const handleCreate = async (data: TaskCategoriesProps) => {
    try {
      
      const createdTaskCategory = await taskCategoriesApi.create(data);
      
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleUpdate = async (data: TaskCategoriesProps) => {
    try {
      const updatedTaskCategory = await taskCategoriesApi.update(id, data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { taskCategorie, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useTaskCategorie;
