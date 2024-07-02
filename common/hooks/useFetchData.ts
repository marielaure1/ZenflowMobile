import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from 'react-redux';
import { auth } from '@config/firebase';
import { loginSuccess, logout } from '@stores/auth/auth.actions';

const useFetchData = <T>(fetchDataFunction: () => Promise<T>, queryKey: string[], enabled?: any) => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { data, isLoading: queryIsLoading, error: queryError, refetch } = useQuery<T>({
    queryKey: queryKey,
    queryFn: fetchDataFunction,
    enabled: enabled
  });

  useEffect(() => {
    const handleInvalidToken = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const newToken = await user.getIdToken(true);
          dispatch(loginSuccess(newToken));
          refetch(); 
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.error('Error refreshing token:', err);
        dispatch(logout());
      }
    };

    if (!queryIsLoading && !queryError && data) {
      if ((data as any).message === "Invalid Token") {
        handleInvalidToken();
      } else {
        setResponse(data);
        setIsLoading(false);
      }
    } else if (queryError) {
      setError(queryError);
      setIsLoading(false);
    }
  }, [data, queryError, queryIsLoading, dispatch, refetch]);

  return { response, isLoading, error, refetch };
};

export default useFetchData;
