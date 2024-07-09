import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useProjectsApi } from '@api/api';
import { useSelector } from 'react-redux';
import ProjectsProps from '@interfaces/projects.interface';
import StatusEnum from '@/common/enums/status.enum';
import PriorityEnum from '@/common/enums/priority.enum';
import queryClient from '@/api/config.react-query';

interface UseProjectPostProps {
  route: any; 
}

const useProjectPost = ({ route }: UseProjectPostProps) => {
  const project = route?.params?.project as ProjectsProps;
  const projectsApi = useProjectsApi();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tabs, setTabs] = useState<string>('Infos');
  const me = useSelector((state: any) => state?.auth?.customer); 

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
      customFieldValues: project ? project.customFieldValues : [],
      ownerId: me?.id
    },
  });

  const navigation = useNavigation();

  let title = project?._id ? 'Modifier' : 'Créer';
  title += ' un projet';

  const handleCreate = async (data: FieldValues) => {
    try {
      const createdProject = await projectsApi.create(data);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {
      setIsLoading(true)
      const updatedProject = await projectsApi.update(project._id, data);
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      setIsLoading(false)
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { isLoading, project, control, errors, tabs, setTabs, title, handleCreate, handleUpdate, handleSubmit };
};

export default useProjectPost;
