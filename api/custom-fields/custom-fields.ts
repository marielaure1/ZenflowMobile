import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import CustomFieldAxios from '@api/task-categories/task-categories.axios';
import CustomFieldsProps from '@interfaces/task-categories.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class CustomFieldsReactQuery extends ApiReactQuery<CustomFieldsProps> {
  protected apiAxios: CustomFieldAxios;

  constructor(token?: string) {
    const path = 'custom-fields';
    const invalidateQueryFiltersCustomFields: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersCustomFields, path, token);
    this.apiAxios = new CustomFieldAxios(path, token);
  }

  async findTasks(id: string){
    return await this.apiAxios.findTasks(id);
  }
}

export default CustomFieldsReactQuery;
