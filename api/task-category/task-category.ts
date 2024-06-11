import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import TaskCategoryAxios from '@api/task-category/task-category.axios';
import TaskCategorysProps from '@interfaces/task-category.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class TaskCategorysReactQuery extends ApiReactQuery<TaskCategorysProps> {
  protected apiAxios: TaskCategoryAxios;

  constructor(
    type: InvalidateQueryFilters,
    dataInterface: TaskCategorysProps,
    path: string,
    token?: string
  ) {
    super(type, dataInterface, path, token);
    this.apiAxios = new TaskCategoryAxios(dataInterface, path, token);
  }

  async findTasks(id: string){
    return await this.apiAxios.findTasks(id);
  }
}

export default TaskCategorysReactQuery;
