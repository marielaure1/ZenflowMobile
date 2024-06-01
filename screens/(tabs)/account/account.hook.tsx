import { useEffect, useState } from 'react';
import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useCustomersApi } from '@api/api';
import { useQuery } from '@tanstack/react-query';
import CustomersProps from '@/common/interfaces/customers.interface';
import useFetchData from '@/common/hooks/useFetchData';

const useAccount = () => {
  const customersApi = useCustomersApi();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [customersList, setCustomersList] = useState<CustomersProps[]>([]);
  const [me, setMe] = useState(null);

  const { response, isLoading: isLoadingMe, error: fetchError, refetch } = useFetchData(() => customersApi.findMe(), ["me"]);

  const navigation = useNavigation();

  useEffect(() => {
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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Successfully logged out');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { navigation, error, me, handleLogout, customersList, refetch };
};

export default useAccount;