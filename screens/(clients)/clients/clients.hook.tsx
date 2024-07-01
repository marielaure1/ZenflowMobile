import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi } from '@api/api';
import ClientsProps from '@interfaces/clients.interface';
import useFetchData from '@hooks/useFetchData';
import { useDispatch } from 'react-redux';
import { loginFailure } from '@/stores/auth/auth.actions';

const useClients = () => {
  const clientsApi = useClientsApi();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState<ClientsProps[]>([]);
  const [filteredClients, setFilteredClients] = useState<ClientsProps[]>([]); 
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Liste des clients",
      foreground: "#35BFFF",
      background: "#CEF0FF",
    },
    {
      id: 2,
      text: "Analyse",
      foreground: "#FB923C",
      background: "#FFEDD5",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => clientsApi.findAllOwner(), ["clients"]);

  const navigation = useNavigation();

  const fields = ['society', 'firstName', 'lastName'];

  const handleSearch = (filteredData) => {
    setFilteredClients(filteredData);
  };

  useEffect(() => {
    console.log("response", fetchError);
    
    if (!fetchIsLoading) {
      if (response?.code === 404) {
        setError("Vous n'avez pas encore de client");
        setClientsList([]);
        setFilteredClients([]); 
      } else {
        setClientsList(response?.datas?.clients); 
        setFilteredClients(response?.datas?.clients); 
        setError("");
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
    filteredClients, 
    handleSearch, 
    error, 
    isLoading, 
    clientsList, 
    refetch, 
    tabs, 
    setTabs 
  };
};

export default useClients;
