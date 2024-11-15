import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi } from '@api/api';
import useFetchData from '@hooks/useFetchData';
import ProjectsProps from '@interfaces/projects.interface';

const useCardProject = ({ id }) => {
  const projectsApi = useProjectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<ProjectsProps[]>([]);
  const [taskPourcent, setTaskPourcent] = useState(0);
  const [tabs, setTabs] = useState("Infos");

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => projectsApi.findTasks(id), ["projects", id]);
  const navigation = useNavigation();

  useEffect(() => {
    if (!fetchIsLoading && response) {
      const totalTasks = response?.datas["projects/tasks"].tasks?.length || 0;
      const completedTasks = response?.datas["projects/tasks"].tasks?.filter(task => task.completed).length || 0;
      const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

      setProject(response?.datas["projects/tasks"].data || []);
      setTaskPourcent(completionPercentage);
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { navigation, error, project, refetch, tabs, setTabs, taskPourcent };
};

export default useCardProject;
