import { useState, useCallback } from 'react';
import { useProspectsApi } from '@api/api';
import { useForm } from 'react-hook-form';

const useProspectInfos = (prospect) => {
  const prospectsApi = useProspectsApi();
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
        society: prospect.society,
        lastName: prospect.lastName,
        firstName: prospect.firstName,
        email: prospect.email,
        phone: prospect.phone,
        address: prospect.address,
        status: prospect.status,
        lastContactDate: prospect.lastContactDate,
        marketSegment: prospect.marketSegment,
        needs: prospect.needs,
        leadSource: prospect.leadSource,
        companySize: prospect.companySize,
        estimatedBudget: prospect.estimatedBudget,
    }
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(prospect.dueDate ? new Date(prospect.dueDate) : undefined);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, []);

  const onConfirmSingle = useCallback((params) => {
    setOpen(false);
    setDate(params.date);
    setValue('dueDate', params.date);
  }, [setValue]);

  const handleEditClick = (field: string) => {
    setEditingField(field);
  };

  const handleCancelClick = () => {
    setEditingField(null);
  };

  const onSubmit = async (data) => {
    try {
      await prospectsApi.update(prospect._id, data);
    } catch (error) {
      console.log(error);
    }
    setEditingField(null);
  };

  const handleChipChange = (value: string) => {
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

export default useProspectInfos;
