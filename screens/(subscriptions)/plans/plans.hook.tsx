// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { usePlansWithQueryClient } from "@api/plans/plans";
// import { useSubscriptionsWithQueryClient } from "@api/subscriptions/subscriptions";
// import { useCustomersWithQueryClient } from "@api/customers/customers";
// import useFetchData from '@/hooks/useFetchData';
// import { useAxiosWithAuth } from '@/api/api.axios'; // Importez le hook custom

// const useLogin = () => {
//   const [error, setError] = useState('');
//   const token = useSelector((state) => state.auth.token);
//   const { getPlans, setIsFetchEnabled } = usePlansWithQueryClient();
//   const { createSubscription } = useSubscriptionsWithQueryClient();
//   const { fetchMeCustomer, setIsFetchEnabled: setIsFetchEnabledCustomer } = useCustomersWithQueryClient();
//   const { response } = useFetchData(() => fetchMeCustomer(token));
//   const [plans, setPlans] = useState(null);
//   const apiClient = useAxiosWithAuth(); // Utilisez le hook custom pour obtenir apiClient

//   useEffect(() => {
//     setIsFetchEnabled(true);
//     setIsFetchEnabledCustomer(true);
//     // console.log(response);
//   }, [response]);

//   useEffect(() => {
//     const fetchedPlans = getPlans();
//     if (fetchedPlans) {
//       if (fetchedPlans?.success) {
//         setPlans(fetchedPlans?.datas?.plans);
//       }
//     }
//   }, [getPlans]);

//   const handleChangePlan = async (planId) => {
//     try {
//       const subscription = await createSubscription({ planId, customer: "555" });
//       console.log(subscription);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const navigation = useNavigation();

//   return { navigation, getPlans, plans, handleChangePlan, error };
// }

// export default useLogin;
