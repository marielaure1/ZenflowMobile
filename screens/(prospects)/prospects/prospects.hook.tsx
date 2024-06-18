import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProspectsApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import ProspectsProps from '@interfaces/prospects.interface';
import useFetchData from '@hooks/useFetchData';

const useProspects = () => {
  const prospectsApi = useProspectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [prospectsList, setProspectsList] = useState<ProspectsProps[]>([]);
  const [tabs, setTabs] = useState("Analyse");

  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => prospectsApi.findAllOwner(), ["prospects"]);

  const navigation = useNavigation();

  useEffect(() => {
    
    if (!fetchIsLoading && response) {

      if(response?.code == 404){
        setError("Vous n'avez pas encore de prospect")
      } else {
        setProspectsList(response?.datas?.prospects);
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

  return { navigation, error, isLoading, prospectsList, refetch, tabs, setTabs };
};

export default useProspects;