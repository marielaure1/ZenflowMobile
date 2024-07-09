import queryClient from '@/api/config.react-query';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useHome = () => {
  const customer = useSelector((state) => state.auth.customer);
  const [me, setMe] = useState(customer);

  useEffect(() => {
    setMe(customer);
    if(!customer){
      queryClient.clear()
    }
  }, [customer]);

  return { me };
}

export default useHome;
