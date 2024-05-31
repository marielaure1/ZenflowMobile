// plans.tsx

import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { fetchPlansAxios } from '@api/plans/plans.axios';
// import PlansProps from '@interfaces/plans.interface'; // Assurez-vous que le chemin est correct

export function usePlansWithQueryClient() {
  const queryClient = useQueryClient();
  const [isFetchEnabled, setIsFetchEnabled] = useState(false);

  const getPlans = () => {
    return queryClient.getQueryData(['plans']); // Récupérez le tableau de plans
  };

  const fetchPlans = async () => {
    const data = await fetchPlansAxios();
    queryClient.setQueryData(['plans'], data); // Stockez le tableau de plans
  };

  useEffect(() => {
    if (isFetchEnabled) {
      fetchPlans();
    }
  }, [isFetchEnabled, fetchPlans]);

  return {
    getPlans, // Exposez la fonction pour récupérer les plans
    fetchPlans,
    setIsFetchEnabled,
  };
}
