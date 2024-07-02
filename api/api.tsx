import { useSelector } from 'react-redux';
import AuthReactQuery from '@api/auth/auth';
import CustomersReactQuery from '@api/customers/customers';
import CustomersProps from '@interfaces/customers.interface';
import PlansReactQuery from '@api/plans/plans';
import PlansProps from '@interfaces/plans.interface';
import SubscriptionsReactQuery from '@api/subscriptions/subscriptions';
import SubscriptionsProps from '@interfaces/subscriptions.interface';
import PaymentsReactQuery from '@api/payments/payments';
import PaymentsProps from '@interfaces/payments.interface';
import ProjectsReactQuery from '@api/projects/projects';
import ProjectsProps from '@interfaces/projects.interface';
import TaskCategoriesReactQuery from '@/api/task-categories/task-categories';
import TaskCategoriesProps from '@interfaces/task-categories.interface';
import TasksReactQuery from '@api/tasks/tasks';
import TasksProps from '@interfaces/tasks.interface';
import ClientsReactQuery from '@api/clients/clients';
import ProspectsReactQuery from '@api/prospects/prospects';
import ClientsProps from '@interfaces/clients.interface';
import CustomFieldsReactQuery from '@api/custom-fields/custom-fields';
import CustomFieldsProps from '@interfaces/custom-fields.interface';
import { InvalidateQueryFilters } from '@tanstack/react-query';

export const getToken = () => {
  const token = useSelector((state) => state?.auth?.token);
  console.log(token);
  
  return token;
  
}
export const useAuthApi = () => {
  return new AuthReactQuery(getToken());
};

export const useCustomersApi = () => {
  return new CustomersReactQuery(getToken());
};

export const usePlansApi = () => {
  return new PlansReactQuery(getToken());
};

export const useSubscriptionsApi = () => {
  return new SubscriptionsReactQuery(getToken());
};

export const usePaymentsApi = () => {
  return new PaymentsReactQuery(getToken());
};

export const useProjectsApi = () => {
  return new ProjectsReactQuery(getToken());
};

export const useTaskCategoriesApi = () => {
  return new TaskCategoriesReactQuery(getToken());
};

export const useTasksApi = () => {
  return new TasksReactQuery(getToken());
};

export const useClientsApi = () => {
  return new ClientsReactQuery(getToken());
};

export const useProspectsApi = () => {
  return new ProspectsReactQuery(getToken());
};

export const useCustomFieldsApi = () => {
  return new CustomFieldsReactQuery(getToken());
};