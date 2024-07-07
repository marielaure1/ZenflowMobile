import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProjectsApi, useCustomFieldsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ProjectsProps from '@interfaces/projects.interface';
import TaskCategoriesProps from '@interfaces/task-categories.interface';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

const useProject = ({id}) => {
  const projectsApi = useProjectsApi();
  const customFieldsApi = useCustomFieldsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<ProjectsProps[]>([]);
  const [taskCategories, setTaskCategories] = useState<TaskCategoriesProps[]>([]);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Tâches",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 2,
      text: "Infos",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => projectsApi.findTasksCategories(id), ["projects", id]);
  const { response : customFields, isLoading: isLoadingCustomFields, error: fetchErrorCustomFields, refetch: refetchCustomFields } = useFetchData(() => customFieldsApi.findOneOwnerCustomsFields(id, "project"), ["project-customs-fields", id]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!fetchIsLoading && response) {
;
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

  const handleDelete = async (id) => {
    try {
      await projectsApi.delete(id);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return { handleDelete, customFields, isLoadingCustomFields, fetchErrorCustomFields, navigation, error, project, refetch, tabs, setCurrentTab, currentTab, taskCategories, error, isLoading };
};

export default useProject;