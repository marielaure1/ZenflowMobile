import { useSelector } from 'react-redux';
import AuthReactQuery from '@api/auth/auth';
import CustomersReactQuery from '@api/customers/customers';
import CustomersProps from '@/common/interfaces/customers.interface';
import PlansReactQuery from '@api/plans/plans';
import PlansProps from '@/common/interfaces/plans.interface';
import SubscriptionsReactQuery from '@api/subscriptions/subscriptions';
import SubscriptionsProps from '@/common/interfaces/subscriptions.interface';
import PaymentsReactQuery from '@api/payments/payments';
import PaymentsProps from '@/common/interfaces/payments.interface';
import ProjectsReactQuery from '@api/projects/projects';
import ProjectsProps from '@/common/interfaces/projects.interface';
import TaskCategoryReactQuery from '@/api/task-categories/task-categories';
import TaskCategoryProps from '@/common/interfaces/task-category.interface';
import TasksReactQuery from '@api/tasks/tasks';
import TasksProps from '@/common/interfaces/tasks.interface';
import ClientsReactQuery from '@api/clients/clients';
import ClientsProps from '@/common/interfaces/clients.interface';
import { InvalidateQueryFilters } from '@tanstack/react-query';

export const getToken = () => {
  return useSelector((state) => state?.auth?.token);
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