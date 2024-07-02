import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useProjectsApi, useCustomersApi } from '@api/api';
import { useSelector } from 'react-redux';
import ProjectsProps from '@interfaces/projects.interface';
import StatusEnum from '@/common/enums/status.enum';
import PriorityEnum from '@/common/enums/priority.enum';
import queryClient from '@/api/config.react-query';
import useFetchData from '@/common/hooks/useFetchData';

interface UseProjectPostProps {
  route: any; 
}

const useProjectPost = ({ route }: UseProjectPostProps) => {
  const project = route?.params?.project as ProjectsProps;
  const projectsApi = useProjectsApi();
  const customerApi = useCustomersApi()
  const [tabs, setTabs] = useState<string>('Infos');
  const { response: me, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => customerApi.findMe(), ["me"]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectsProps>({
    defaultValues: {
      name: project ? project?.name : '',
      description: project ? project.description : '',
      status: project ? project.status : StatusEnum.ACTIVE,
      priority: project ? project.priority : PriorityEnum.MEDIUM,
      picture: project ? project.picture : '',
      customFieldValues: project ? project.customFieldValues : [],
      ownerId: me?.datas?.me?.customer?._id
    },
  });

  const navigation = useNavigation();

  let title = project?._id ? 'Modifier' : 'Créer';
  title += ' un projet';

  const handleCreate = async (data: FieldValues) => {
    
    try {
      const createdProject = await projectsApi.create({...data, ownerId: me?.datas?.me?.customer?._id});
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {

      console.log(data);
      
      const updatedProject = await projectsApi.update(project._id, {...data, ownerId: me?.datas?.me?.customer?._id});
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { project, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useProjectPost;
