import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProspectsApi } from '@api/api';
import ProspectsProps from '@interfaces/prospects.interface';
import useFetchData from '@hooks/useFetchData';
import queryClient from '@/api/config.react-query';

const useProspects = () => {
  const prospectsApi = useProspectsApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [prospectsList, setProspectsList] = useState<ProspectsProps[]>([]);
  const [filteredProspects, setFilteredProspects] = useState<ProspectsProps[]>([]); 
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: "Liste des prospects",
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
  const { response, isLoading: fetchIsLoading, error: fetchError, refetch } = useFetchData(() => prospectsApi.findAllOwner(), ["prospects"]);

  const navigation = useNavigation();

  const fields = ['society', 'firstName', 'lastName'];

  const handleSearch = (filteredData: ProspectsProps[]) => {
    setFilteredProspects(filteredData);
  };

  useEffect(() => {
    if (!fetchIsLoading && response) {
      if (response?.code === 404) {
        setError("Vous n'avez pas encore de prospect");
        setProspectsList([]);
        setFilteredProspects([]); 
      } else if(response?.datas?.prospects){
        setProspectsList(response?.datas?.prospects); 
        setFilteredProspects(response?.datas?.prospects); 
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
    filteredProspects, 
    handleSearch, 
    error, 
    isLoading, 
    prospectsList, 
    refetch, 
    tabs, 
    setTabs 
  };
};

export default useProspects;
