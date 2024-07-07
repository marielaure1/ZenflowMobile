import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { useNoteFoldersApi } from '@api/api';
import { useSelector } from 'react-redux';
import NoteFoldersProps from '@interfaces/note-folders.interface';

interface UseNoteFolderProps {
  route: any; 
}

const useTaskCategorie = ({ route }: UseNoteFolderProps) => {
  const id = route?.params?.id;
  const noteFoldersApi = useNoteFoldersApi();
  const [error, setError] = useState<string>('');
  const [noteFolders, setNoteFolders] = useState<NoteFoldersProps[]>([]);
  const me = useSelector((state: any) => state?.auth?.customer); 

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFoldersProps>({
    defaultValues: {
      title: route?.params?.name || '',
      description: route?.params?.description || ''
    },
  });

  const navigation = useNavigation();

  let title = id ? "Modifier" : "Créer";
  title += " un dossier";

  const handleCreate = async (datas: NoteFoldersProps) => {
    try {
      
      const createdBoteFolder = await noteFoldersApi.create(datas);
      
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleUpdate = async (datas: NoteFoldersProps) => {
    try {
      const updatedBoteFolder = await noteFoldersApi.update(id, datas);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { noteFolders, control, errors, title, handleCreate, handleUpdate, handleSubmit };
};

export default useTaskCategorie;
