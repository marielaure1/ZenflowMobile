import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import TaskAxios from '@api/tasks/tasks.axios';
import TasksProps from '@interfaces/tasks.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class TasksReactQuery extends ApiReactQuery<TasksProps> {
  protected apiAxios: TaskAxios;

  constructor(token?: string) {
    const path = 'tasks';
    const invalidateQueryFiltersTasks: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersTasks, path, token);
    this.apiAxios = new TaskAxios(path, token);
  }
}

export default TasksReactQuery;
