import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTasksApi } from '@api/api';
import { useSelector } from 'react-redux';
import TasksProps from '@interfaces/tasks.interface';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@api/config.react-query';
import PriorityEnum from '@/common/enums/priority.enum';

interface UseTaskProps {
  route: object;
}

const useTask = ({ route }: UseTaskProps) => {
  const { id } = route.params;
  const tasksApi = useTasksApi();
  const navigation = useNavigation();
  const [editingField, setEditingField] = useState<string | null>(null);
  const { response: task, isLoading, error, refetch } = useFetchData(() => tasksApi.findOne(id), ["tasks", id]);

  console.log(task?.datas?.tasks?.title);
  
  const { control, watch, handleSubmit, formState: { errors }, reset } = useForm<TasksProps>();

  useEffect(() => {
    if (task) {
      reset({
        title: task?.datas?.tasks?.title ?? '',
        description: task?.datas?.task?.description ?? '',
        dueDate: task?.datas?.task?.dueDate ? new Date(task?.datas?.task?.dueDate).toISOString().split('T')[0] : '',
        priority: task?.datas?.task?.priority ?? PriorityEnum.MEDIUM,
        // completed: task?.datas?.task?.completed || '',
        // flags: task?.datas?.task?.flags || '',
        // parentTaskId: task?.datas?.task?.parentTaskId || '',
        // subTasks: task?.datas?.task?.subTasks || [],
        // taskCategoryId: task?.datas?.task?.taskCategoryId || ''
      });
    }
  }, [task, reset]);

  const handleUpdate = async (data: TasksProps) => {
    try {
      await tasksApi.update(id, data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await tasksApi.delete(id);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change') {
        handleSubmit(handleUpdate)();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit]);

  return { errors, control, task, isLoading, error, editingField, setEditingField, handleUpdate, handleDelete, refetch };
};

export default useTask;
