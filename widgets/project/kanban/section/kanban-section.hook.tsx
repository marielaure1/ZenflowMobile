import React, { useEffect, useState } from 'react';
import { useTaskCategoriesApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import TasksProps from '@interfaces/tasks.interface';
import TaskCategoriesProps from '@interfaces/task-categories.interface';
import { useNavigation } from '@react-navigation/native';
import queryClient from '@/api/config.react-query';

export default function KanbanSection({id}) {
  const taskCategoriesApi = useTaskCategoriesApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [taskCategories, setTaskCategories] = useState<TaskCategoriesProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const navigation = useNavigation();

 const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => taskCategoriesApi.findTasks(id), ["tasks-categories", id]);
  useEffect(() => {
    if (!fetchIsLoading && response) {
      setTaskCategories(response?.datas?.tasks?.data);
      setTasks(response?.datas?.tasks?.tasks)
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  const handleDelete = async (id: string) => {
    try {
      await taskCategoriesApi.delete(id);
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      await queryClient.invalidateQueries({ queryKey: ["tasks-categories"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
  
  return { handleDelete, tasks, setTasks, taskCategories };
}
