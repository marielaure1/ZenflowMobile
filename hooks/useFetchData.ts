import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query"; // Import useQueryClient

const useFetchData = <T>(fetchDataFunction: () => Promise<T>) => {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const queryClient = useQueryClient(); // Obtenez le queryClient

  const refetch = async () => { // Fonction pour recharger les données
    setIsLoading(true);
    try {
      const data = await fetchDataFunction();
      setResponse(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refetch(); // Déclenchez la requête initiale
  }, [fetchDataFunction, refetch]); // Incluez refetch dans les dépendances

  return { response, isLoading, error, refetch }; // Retournez refetch
};

export default useFetchData;
