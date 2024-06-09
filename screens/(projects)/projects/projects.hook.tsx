import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ProjectsProps from '@interfaces/projects.interface';
import useFetchData from '@hooks/useFetchData';

const useProjects = () => {
  const projectsApi = useProjectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [projectsList, setProjectsList] = useState<ProjectsProps[]>([]);
  const [tabs, setTabs] = useState("Analyse");

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => projectsApi.findAll(), ["projects"]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!fetchIsLoading && response) {
      setProjectsList(response?.datas?.projects);
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { navigation, error, projectsList, refetch, tabs, setTabs };
};

export default useProjects;