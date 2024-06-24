import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import TaskCategorieAxios from '@api/task-categories/task-categories.axios';
import TaskCategoriesProps from '@interfaces/task-categories.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class TaskCategoriessReactQuery extends ApiReactQuery<TaskCategoriesProps> {
  protected apiAxios: TaskCategorieAxios;

  constructor(token?: string) {
    const path = 'taskCategories';
    const invalidateQueryFiltersTaskCategories: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersTaskCategories, path, token);
    this.apiAxios = new TaskCategorieAxios(path, token);
  }

  async findTasks(id: string){
    return await this.apiAxios.findTasks(id);
  }
}

export default TaskCategoriessReactQuery;
