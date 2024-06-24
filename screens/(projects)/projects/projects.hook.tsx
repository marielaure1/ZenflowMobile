import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi } from '@api/api';
import ProjectsProps from '@interfaces/projects.interface';
import useFetchData from '@hooks/useFetchData';

const useProjects = () => {
  const projectsApi = useProjectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [projectsList, setProjectsList] = useState<ProjectsProps[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectsProps[]>([]); 
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Liste des projects",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 2,
      text: "Analyse",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => projectsApi.findAllOwner(), ["projects"]);

  const navigation = useNavigation();

  const fields = ['society', 'firstName', 'lastName'];

  const handleSearch = (filteredData) => {
    console.log("filteredData", filteredData);
    
    setFilteredProjects(filteredData);
  };
  console.log(response);
  useEffect(() => {
    if (!fetchIsLoading && response) {
      if (response?.code === 404) {
        setError("Vous n'avez pas encore de project");
        setProjectsList([]);
        setFilteredProjects([]); 
      } else {
        setProjectsList(response?.datas?.projects || []); 
        setFilteredProjects(response?.datas?.projects || []); 
        setError("");
      }
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { 
    currentTab, 
    setCurrentTab, 
    fields, 
    filteredProjects, 
    handleSearch, 
    error, 
    isLoading, 
    projectsList, 
    refetch, 
    tabs, 
    setTabs 
  };
};

export default useProjects;
