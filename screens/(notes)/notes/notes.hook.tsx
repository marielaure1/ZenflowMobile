import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNotesApi } from '@api/api';
import NotesProps from '@interfaces/notes.interface';
import useFetchData from '@hooks/useFetchData';

const useNotes = () => {
  const notesApi = useNotesApi();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notesList, setNotesList] = useState<NotesProps[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<NotesProps[]>([]); 
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Liste des notes",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 2,
      text: "Analyse",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => notesApi.findAllOwner(), ["notes"]);

  const navigation = useNavigation();

  const fields = ['title'];

  const handleSearch = (filteredData: NotesProps[]) => {
    setFilteredNotes(filteredData);
  };

  useEffect(() => {
    if (!fetchIsLoading) {
      if (response?.code === 404) {
        setError({type: "Not Found", message: "Vous n'avez pas encore de note"});
        setNotesList([]);
        setFilteredNotes([]); 
      } else if (response?.statusCode) {
        setError({type: "error", message: "Une erreur c'est produite"});
        setNotesList([]);
        setFilteredNotes([]); 
      } else if(response?.datas?.notes?.notes){
        setNotesList(response?.datas?.notes?.notes); 
        setFilteredNotes(response?.datas?.notes?.notes); 
        setError(null);
      }
      setIsLoading(false);
    }
  }, [fetchIsLoading, response]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
    }
  }, [fetchError]);

  return { 
    currentTab, 
    setCurrentTab, 
    fields, 
    filteredNotes, 
    handleSearch, 
    error, 
    isLoading, 
    notesList, 
    refetch, 
    tabs, 
    setTabs 
  };
};

export default useNotes;
