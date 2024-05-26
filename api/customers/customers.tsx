import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  fetchCustomerAxios,
  createCustomerAxios,
  updateCustomerAxios,
  deleteCustomerAxios,
} from '@api/customers/customers.axios';
import CustomersProps from '@interfaces/customers.interface';

export function useCustomersWithQueryClient() {
  const queryClient = useQueryClient();
  const [isFetchEnabled, setIsFetchEnabled] = useState(false);

  const getCustomers = () => {
    return queryClient.getQueryState(['customers'])
  };

  const fetchCustomer = async (customerId: number) => {
    const data = await fetchCustomerAxios(customerId);
    return queryClient.setQueryData(['customer', customerId], data);
  };

  const createCustomer = async (customer: CustomersProps) => {
    await createCustomerAxios(customer);
    return queryClient.invalidateQueries(['customers']);
  };

  const updateCustomer = async (customerId: number, customer: CustomersProps) => {
    await updateCustomerAxios(customerId, customer);
    queryClient.invalidateQueries(['customers']);
    return queryClient.invalidateQueries(['customer', customerId]);
  };

  const deleteCustomer = async (customerId: number) => {
    await deleteCustomerAxios(customerId);
    return queryClient.invalidateQueries(['customers']);
  };

  // useEffect(() => {
  //   if (isFetchEnabled) {
  //     fetchCustomer();
  //   }
  // }, [isFetchEnabled, fetchCustomer]);

  return {
    getCustomers,
    fetchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    setIsFetchEnabled,
  };
}
