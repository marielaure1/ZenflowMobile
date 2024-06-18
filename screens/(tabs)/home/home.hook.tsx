import { useEffect, useState } from 'react';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import useFetchData from '@/common/hooks/useFetchData';
import { useCustomersApi } from '@api/api';

const useLogin = () => {
  const customersApi = useCustomersApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [me, setMe] = useState(null);
    const token = useSelector((state) => state.auth.token);
    const { response, isLoading: isLoadingMe, error: fetchError, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);
    
    useEffect(() => {

      console.log(response?.datas?.me?.customer);
      
      if (!isLoadingMe && response) {
        setMe(response?.datas?.me);
        setIsLoading(false);
      }
    }, [isLoadingMe, response]);
  
    useEffect(() => {
      if (fetchError) {
        setError(fetchError.message);
        setIsLoading(false);
      }
    }, [fetchError]);


    return { me, error}
}

export default useLogin;