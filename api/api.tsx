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
import TaskCategoryReactQuery from '@api/task-category/task-category';
import TaskCategoryProps from '@/common/interfaces/task-category.interface';
import TasksReactQuery from '@api/tasks/tasks';
import TasksProps from '@/common/interfaces/tasks.interface';
import { InvalidateQueryFilters } from '@tanstack/react-query';


/**
 * Customers
 */
const customerData: CustomersProps = {
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: ''
};

const invalidateQueryFiltersCustomers: InvalidateQueryFilters = {
  queryKey: ['customers']
};

const useCustomersApi = () => {
  const token = useSelector((state) => state?.auth?.token);
  return new CustomersReactQuery(invalidateQueryFiltersCustomers, customerData, 'customers', token);
};

const useAuthApi = () => {
  return new AuthReactQuery(invalidateQueryFiltersCustomers, customerData, 'auth');
};


/**
 * Plans
 */

const planData: PlansProps = {
  name : "",
  description : "",
  amount : 0,
  currency : "",
  interval : "",
  stripePlanId : "",
  features : []
};

const invalidateQueryFiltersPlans: InvalidateQueryFilters = {
  queryKey: ['plans']
};

const usePlansApi = () => {
  const token = useSelector((state) => state?.auth?.token);
  return new PlansReactQuery(invalidateQueryFiltersPlans, planData, 'plans', token);
};


/**
 * Subscriptions
 */
const subscriptionData: SubscriptionsProps = {
  plan : "",
  customer : ""
};

const invalidateQueryFiltersSubscriptions: InvalidateQueryFilters = {
  queryKey: ['subscriptions']
};

const useSubscriptionsApi = () => {
  const token = useSelector((state) => state?.auth?.token);
  return new SubscriptionsReactQuery(invalidateQueryFiltersSubscriptions, subscriptionData, 'subscriptions', token);
};

/**
 * Payments
 */
const paymentsData: PaymentsProps = {
  amount : 0,
  currency : "",
  customerId : ""
};

const invalidateQueryFiltersPayments: InvalidateQueryFilters = {
  queryKey: ['payments']
};

const usePaymentsApi = () => {
  const token = useSelector((state) => state?.auth?.token);
  return new PaymentsReactQuery(invalidateQueryFiltersPayments, paymentsData, 'payments', token);
};

/**
 * Projects
 */
const projectsData: ProjectsProps = {
  name: "",
  description: "",
  ownerId: "",
  clientId: "",
  priority: "",
  tasks: [],
  categoryIds: [],
  customFields: []
};

const invalidateQueryFiltersProjects: InvalidateQueryFilters = {
  queryKey: ['projects']
};

const useProjectsApi = () => {
  const token = useSelector((state) => state?.auth?.token);
  return new ProjectsReactQuery(invalidateQueryFiltersProjects, projectsData, 'projects', token);
};

/**
 * TaskCategory
 */
const taskCategoryData: TaskCategoryProps = {
  name: "",
  description: "",
  projectId: ""
};

const invalidateQueryFiltersTaskCategory: InvalidateQueryFilters = {
  queryKey: ['tasks-categories']
};

const useTaskCategoryApi = () => {
  // const token = useSelector((state) => state?.auth?.token);
  return new TaskCategoryReactQuery(invalidateQueryFiltersTaskCategory, taskCategoryData, 'tasks-categories');
};

/**
 * Tasks
 */
const tasksData: TasksProps = {
  title: "",
  description: "",
  projectId: "",
  assigneeId: "",
  status: "",
  dueDate: new Date(),
  priority: "",
  comments: [],
  flags: [],
  timeEntries: [],
  parentTaskId: "",
  subTasks: "",
  taskCategoryIds: "",
  order: 0,
};

const invalidateQueryFiltersTasks: InvalidateQueryFilters = {
  queryKey: ['tasks']
};

const useTasksApi = () => {
  // const token = useSelector((state) => state?.auth?.token);
  return new TasksReactQuery(invalidateQueryFiltersTasks, tasksData, 'tasks');
};

export {
  useCustomersApi,
  usePlansApi,
  useSubscriptionsApi,
  useAuthApi,
  usePaymentsApi,
  useProjectsApi,
  useTaskCategoryApi,
  useTasksApi
};
