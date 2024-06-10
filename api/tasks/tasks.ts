import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import TasksAxios from '@api/tasks/tasks.axios';
import TasksProps from '@interfaces/tasks.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class TasksReactQuery extends ApiReactQuery<TasksProps> {
  protected apiAxios: TasksAxios;

  constructor(
    type: InvalidateQueryFilters,
    dataInterface: TasksProps,
    path: string,
    token?: string
  ) {
    super(type, dataInterface, path, token);
    this.apiAxios = new TasksAxios(dataInterface, path, token);
  }

  
}

export default TasksReactQuery;
