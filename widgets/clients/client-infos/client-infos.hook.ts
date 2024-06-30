import { useState, useCallback } from 'react';
import { useClientsApi } from '@api/api';
import { useForm } from 'react-hook-form';
import StatusEnum from '@/common/enums/status.enum';

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

  const statusList = [
    {
      status: StatusEnum.ACTIVE,
      text: 'Actif',
      foreground: '#35BFFF',
      background: '#E5F7FF'
    },
    {
      status: StatusEnum.INACTIVE,
      text: 'Inactif',
      foreground: '#FF6666',
      background: '#FFE5E5'
    },
    {
      status: StatusEnum.PENDING,
      text: 'En attente',
      foreground: '#FFC045',
      background: '#FFF0D5'
    },
    {
      status: StatusEnum.SUSPENDED,
      text: 'Suspendu',
      foreground: '#545454',
      background: '#DEDEDE'
    },
    {
      status: StatusEnum.LOST,
      text: 'Perdu',
      foreground: '#FF6666',
      background: '#FFE5E5'
    },
    {
      status: StatusEnum.CALL_AGAIN,
      text: 'A recontacter',
      foreground: '#FFC045',
      background: '#FFF0D5'
    }
];

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
    errors,
    statusList
  };
};

export default useClientInfos;
