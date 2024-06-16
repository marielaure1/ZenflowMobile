import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ProjectAxios from '@api/projects/projects.axios';
import ProjectsProps from '@interfaces/projects.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ProjectsReactQuery extends ApiReactQuery<ProjectsProps> {
  protected apiAxios: ProjectAxios;

  constructor(token?: string) {
    const path = 'projects';
    const invalidateQueryFiltersProjects: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersProjects, path, token);
    this.apiAxios = new ProjectAxios(path, token);
  }

  async findTasksCategories(id: string){
    return await this.apiAxios.findTasksCategories(id);
  }

  async findTasks(id: string){
    return await this.apiAxios.findTasks(id);
  }


}

export default ProjectsReactQuery;
