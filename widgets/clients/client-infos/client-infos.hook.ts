import { useState, useCallback } from 'react';
import { useClientsApi } from '@api/api';
import { useForm } from 'react-hook-form';

const useClientInfos = (client) => {
  const clientsApi = useClientsApi();
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
        society: client.society,
        lastName: client.lastName,
        firstName: client.firstName,
        email: client.email,
        phone: client.phone,
        address: client.address,
        status: client.status,
    }
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(client.dueDate ? new Date(client.dueDate) : undefined);

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
      await clientsApi.update(client._id, data);
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

export default useClientInfos;
