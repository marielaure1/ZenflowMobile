import React, { useEffect, useState } from 'react';
import { useTaskCategoriesApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import TasksProps from '@interfaces/tasks.interface';
import TaskCategoriesProps from '@interfaces/task-categories.interface';

export default function KanbanSection({id}) {
  const taskCategoriesApi = useTaskCategoriesApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [taskCategories, setTaskCategories] = useState<TaskCategoriesProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);

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
  
  return { tasks, setTasks, taskCategories };
}
