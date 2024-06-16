import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useClientsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ClientsProps from '@interfaces/clients.interface';
import useFetchData from '@hooks/useFetchData';

const useClients = () => {
  const clientsApi = useClientsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [clientsList, setClientsList] = useState<ClientsProps[]>([]);
  const [tabs, setTabs] = useState("Analyse");

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => clientsApi.findAll(), ["clients"]);

  const navigation = useNavigation();

  useEffect(() => {
    
    if (!fetchIsLoading && response) {

      if(response?.code == 404){
        setError("Vous n'avez pas encore de client")
      } else {
        setClientsList(response?.datas?.clients);
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

  return { navigation, error, isLoading, clientsList, refetch, tabs, setTabs };
};

export default useClients;