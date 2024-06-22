import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi } from '@api/api';
import ClientsProps from '@interfaces/clients.interface';
import useFetchData from '@hooks/useFetchData';

const useClients = () => {
  const clientsApi = useClientsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState<ClientsProps[]>([]);
  const [tabs, setTabs] = useState("Analyse");
  const [filteredClients, setFilteredClients] = useState<ClientsProps[]>([]); // Initialisez filteredClients avec un tableau vide

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => clientsApi.findAllOwner(), ["clients"]);

  const navigation = useNavigation();

  const fields = ['society', 'firstName', 'lastName'];

  const handleSearch = (filteredData) => {
    console.log("filteredData", filteredData);
    
    setFilteredClients(filteredData);
  };

  useEffect(() => {
    if (!fetchIsLoading && response) {
      if (response?.code === 404) {
        setError("Vous n'avez pas encore de client");
        setClientsList([]);
        setFilteredClients([]); 
      } else {
        setClientsList(response?.datas?.clients || []); 
        setFilteredClients(response?.datas?.clients || []); 
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

  return { fields, filteredClients, handleSearch, navigation, error, isLoading, clientsList, refetch, tabs, setTabs };
};

export default useClients;
