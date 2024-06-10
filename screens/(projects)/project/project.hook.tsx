import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi, useTaskCategoryApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ProjectsProps from '@interfaces/projects.interface';
import TaskCategoryProps from '@interfaces/task-category.interface';
import useFetchData from '@hooks/useFetchData';

const useProject = ({id}) => {
  const projectsApi = useProjectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<ProjectsProps[]>([]);
  const [taskCategories, setTaskCategories] = useState<TaskCategoryProps[]>([]);
  const [tabs, setTabs] = useState("Infos");

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => projectsApi.findTasksCategories(id), ["projects", id]);
  // const { response, isLoading: fetchIsLoadingTasksCategories, error: fetchError, refetch } = useFetchData(() => taskCategoryApi.findAll(id), ["task-categories"]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!fetchIsLoading && response) {
      
      setProject(response?.datas["projects/tasks"].data);
      setTaskCategories(response?.datas["projects/tasks"].taskCategories)
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { navigation, error, project, refetch, tabs, setTabs, taskCategories };
};

export default useProject;