import { useEffect, useState } from 'react';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import useFetchData from '@/common/hooks/useFetchData';
import { useCustomersApi } from '@api/api';
import queryClient from '@/api/config.react-query';

const useHome = () => {
  const customersApi = useCustomersApi();
  const [ me, setMe ] = useState(null)
  const token = useSelector((state) => state.auth.token)
  const { response, isLoading: isLoadingMe, error: fetchError, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);

  useEffect(() => {
    // console.log(token);
    // console.log(response);
    
    
    setMe(response?.datas?.me)
  }, [response])
  

    return { me }
}

export default useHome;