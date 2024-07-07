import { useSelector } from 'react-redux';
import AuthReactQuery from '@api/auth/auth';
import CustomersReactQuery from '@api/customers/customers';
import PlansReactQuery from '@api/plans/plans';
import SubscriptionsReactQuery from '@api/subscriptions/subscriptions';
import PaymentsReactQuery from '@api/payments/payments';
import ProjectsReactQuery from '@api/projects/projects';
import TaskCategoriesReactQuery from '@/api/task-categories/task-categories';
import TasksReactQuery from '@api/tasks/tasks';
import ClientsReactQuery from '@api/clients/clients';
import ProspectsReactQuery from '@api/prospects/prospects';
import CustomFieldsReactQuery from '@api/custom-fields/custom-fields';
import NotesReactQuery from '@api/notes/notes';
import NoteFoldersReactQuery from '@api/notes/notes';
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

export const useProspectsApi = () => {
  return new ProspectsReactQuery(getToken());
};

export const useCustomFieldsApi = () => {
  return new CustomFieldsReactQuery(getToken());
};

export const useNotesApi = () => {
  return new NotesReactQuery(getToken());
};

export const useNoteFoldersApi = () => {
  return new NoteFoldersReactQuery(getToken());
};