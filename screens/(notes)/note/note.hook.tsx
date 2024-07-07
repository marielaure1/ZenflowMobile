import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNotesApi } from '@api/api'; 
import queryClient from '@api/config.react-query';
import useFetchData from '@hooks/useFetchData';
import { useEditorBridge } from '@10play/tentap-editor';
import { useSelector } from 'react-redux';

interface UseNoteProps {
  id?: string; 
}

const useNote = ({ id }: UseNoteProps) => {
  const notesApi = useNotesApi();
  const [currentId, setCurrentId] = useState(id);
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const me = useSelector((state) => state.auth.customer);

  const { response: note, isLoading, error, refetch } = useFetchData(() => (id ? notesApi.findOne(id) : null), ["notes", id]);

  useEffect(() => {
    if (note?.datas?.note) {
      setTitle(note?.datas?.note?.title || '');
      setContent(note?.datas?.note?.content || '');
    }
  }, [note]);

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    onChange: async () => {
      const htmlContent = await editor.getHTML();
      setContent(htmlContent);
    }
  });

  const handleCreate = async () => {
    try {
      console.log(content);
      
      const createdNote = await notesApi.create({ title, content, ownerId: me?.customer?._id });

      console.log("createNote", createdNote);
      setCurrentId(createdNote?.datas?.notes?._id)
      
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log("updatedNote");
      if (currentId) {
        await notesApi.update(currentId, { title, content, ownerId: me?.customer?._id });
        queryClient.invalidateQueries({ queryKey: ["notes"] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveNote = () => {
    if (currentId) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  useEffect(() => {
    saveNote();
  }, [title, content]);

  return { title, setTitle, content, setContent, isLoading, error, editor };
};

export default useNote;