import { apiClient } from '@api/api.axios';
import CustomersProps from "@interfaces/customers.interface"

export async function fetchCustomerAxios(customerId: number) {
  const response = await apiClient.get<CustomersProps>(`/customers/${customerId}`);
  return response.data;
}

export async function createCustomerAxios(customer: Omit<CustomersProps, 'id'>) {
  const response = await apiClient.post<CustomersProps>('/customers', customer);
  return response.data;
}

export async function updateCustomerAxios(customerId: number, customer: CustomersProps) {
  const response = await apiClient.put<CustomersProps>(`/customers/${customerId}`, customer);
  return response.data;
}

export async function deleteCustomerAxios(customerId: number) {
  await apiClient.delete(`/customers/${customerId}`);
}
