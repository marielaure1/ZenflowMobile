import React, { useEffect, useState } from 'react';
import { useTaskCategoryApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import TasksProps from '@interfaces/tasks.interface';
import TaskCategoryProps from '@interfaces/task-category.interface';

export default function KanbanSection({id}) {
  console.log(id);
  
  const taskCategoryApi = useTaskCategoryApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [taskCategories, setTaskCategories] = useState<TaskCategoryProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);

 const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => taskCategoryApi.findTasks(id), ["tasks-categories", id]);
  useEffect(() => {
    if (!fetchIsLoading && response) {
      console.log(response);
      
      
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
