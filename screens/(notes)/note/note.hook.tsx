import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNotesApi } from '@api/api'; 
import queryClient from '@api/config.react-query';
import useFetchData from '@hooks/useFetchData';
import { useEditorBridge } from '@10play/tentap-editor';
import { useSelector } from 'react-redux';

const useNote = ({ route }) => {
  const { id, folderId } = route.params;
  const notesApi = useNotesApi();
  const [currentId, setCurrentId] = useState(id);
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const me = useSelector(state => state.auth.customer);

  const { response: note, isLoading, error, refetch } = useFetchData(() => (id ? notesApi.findOne(id) : null), ["notes", id]);

  useEffect(() => {
    if (note?.datas?.notes) {
      setTitle(note?.datas?.notes?.title || '');
      setContent(note?.datas?.notes?.content || '');
    }
  }, [note]);

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: content,
    onChange: async () => {
      const htmlContent = await editor.getHTML();
      setContent(htmlContent);
    }
  });

  const handleCreate = async () => {
    try {
      if (title && content) {
        const createdNote = await notesApi.create({ title, content, ownerId: me?.id, folderId });
        setCurrentId(createdNote?.datas?.notes?._id);
        queryClient.invalidateQueries(["notes"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      if (currentId) {
        await notesApi.update(currentId, { title, content, ownerId: me?.id, folderId });
        queryClient.invalidateQueries(["notes"]);
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
