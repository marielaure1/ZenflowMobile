import { useState, useCallback } from 'react';
import { useProjectsApi } from '@api/api';
import { useForm } from 'react-hook-form';
import { StatusEnum } from '@enums/status.enum';
import { Priority } from '@enums/priority.enum';
import CustomField from '@interfaces/custom-fields.interface';
import queryClient from '@/api/config.react-query';

interface Project {
  name: string;
  description: string;
  picture?: string;
  status?: StatusEnum;
  priority?: Priority;
  ownerId: string;
  teamId?: string;
  customFields?: Map<string, CustomField>;
  createdAt?: Date;
  updatedAt?: Date;
}

const useProjectInfos = (project: Project) => {
  const projectsApi = useProjectsApi();
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      name: project.name,
      description: project.description,
      picture: project.picture,
      status: project.status,
      priority: project.priority,
      ownerId: project.ownerId,
      teamId: project.teamId,
    }
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(project.createdAt ? new Date(project.createdAt) : undefined);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, []);

  const onConfirmSingle = useCallback((params) => {
    setOpen(false);
    setDate(params.date);
    setValue('createdAt', params.date);
  }, [setValue]);

  const handleEditClick = (field: string) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const onSubmit = async (data: Partial<Project>) => {
    try {
      await projectsApi.update(project.ownerId, data);
       queryClient.invalidateQueries({queryKey: ["projects"]})
    } catch (error) {
      console.log(error);
    }
    setEditingField(null);
  };

  const handleChipChange = (value: Priority) => {
    setValue('priority', value);
  };

  return {
    editingField,
    open,
    date,
    onDismissSingle,
    onConfirmSingle,
    handleEditClick,
    handleCancelClick,
    handleSubmit: handleSubmit(onSubmit),
    handleChipChange,
    setOpen,
    control,
    errors
  };
};

export default useProjectInfos;
