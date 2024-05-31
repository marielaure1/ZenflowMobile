import { useSelector } from 'react-redux';
import CustomersReactQuery from '@api/customers/customers';
import CustomersProps from '@/common/interfaces/customers.interface';
import { InvalidateQueryFilters } from '@tanstack/react-query';

const customerData: CustomersProps = {
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: ''
};

const invalidateQueryFilters: InvalidateQueryFilters = {
  queryKey: ['customers']
};

const useCustomersApi = () => {
  const token = useSelector((state) => state.auth.token);
  return new CustomersReactQuery(invalidateQueryFilters, customerData, 'customers', token);
};

export {
  useCustomersApi
};
