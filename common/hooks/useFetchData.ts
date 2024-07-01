import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useFetchData = <T>(fetchDataFunction: () => Promise<T>, queryKey: string[], enabled?: any) => {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { data, isLoading: queryIsLoading, error: queryError, refetch } = useQuery<T>({
    queryKey: queryKey,
    queryFn: fetchDataFunction,
    enabled: enabled
  });

  useEffect(() => {
    console.log(data);
    
    if (!queryIsLoading && !queryError && data) {
      setResponse(data);
      setIsLoading(false);
    } else if (queryError) {
      setError(data);
      setIsLoading(false);
    }
  }, [data, queryError, queryIsLoading]);

  return { response, isLoading, error, refetch };
};

export default useFetchData;