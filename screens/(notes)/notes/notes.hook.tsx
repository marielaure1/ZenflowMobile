import { useEffect, useState } from 'react';
import { useNotesApi, useNoteFoldersApi } from '@api/api';
import NotesProps from '@interfaces/notes.interface';
import NoteFoldersProps from '@interfaces/note-folders.interface';
import queryClient from '@/api/config.react-query';

const useNotes = () => {
  const notesApi = useNotesApi();
  const noteFoldersApi = useNoteFoldersApi();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<NoteFoldersProps[]>([]);
  const [notesList, setNotesList] = useState<NotesProps[]>([]);
  const [noteFoldersList, setNoteFoldersList] = useState<NoteFoldersProps[]>([]);

  const fetchNotesAndFolders = async (folderId: string | null) => {
    setIsLoading(true);
    setError(null);
    try {
      queryClient.clear()
      queryClient.invalidateQueries({queryKey: ["notes"]})
      let foldersResponse, notesResponse;
      if (folderId) {
        foldersResponse = await noteFoldersApi.findAllChildrenByParentId(folderId);
        notesResponse = await notesApi.findAllOwnerByFolder(folderId);
      } else {
        foldersResponse = await noteFoldersApi.findAllOwner();
        notesResponse = await notesApi.findAllOwner();
        console.log("notesResponse", notesResponse?.datas?.notes?.notes);
      }
      if (foldersResponse?.code === 404) {
        setNoteFoldersList([]);
      } else if (foldersResponse?.datas?.noteFolders) {
        setNoteFoldersList(foldersResponse?.datas?.noteFolders || []);
      }

      if (notesResponse?.code === 404) {
        setNotesList([]);
      } else if (notesResponse?.datas?.notes?.notes) {
        setNotesList(notesResponse?.datas?.notes?.notes || []);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotesAndFolders(currentFolderId);
  }, [currentFolderId]);

  const navigateToFolder = (folder: NoteFoldersProps) => {
    setBreadcrumbs([...breadcrumbs, folder]);
    setCurrentFolderId(folder._id);
  };

  const navigateBack = () => {
    const newBreadcrumbs = [...breadcrumbs];
    newBreadcrumbs.pop();
    setBreadcrumbs(newBreadcrumbs);
    setCurrentFolderId(newBreadcrumbs.length ? newBreadcrumbs[newBreadcrumbs.length - 1]._id : null);
  };

  return {
    notesList,
    noteFoldersList,
    navigateToFolder,
    navigateBack,
    breadcrumbs,
    error,
    isLoading,
    currentFolderId
  };
};

export default useNotes;
