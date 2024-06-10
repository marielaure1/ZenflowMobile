import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ProjectAxios from '@api/projects/projects.axios';
import ProjectsProps from '@interfaces/projects.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ProjectsReactQuery extends ApiReactQuery<ProjectsProps> {
  protected apiAxios: ProjectAxios;

  constructor(
    type: InvalidateQueryFilters,
    dataInterface: ProjectsProps,
    path: string,
    token?: string
  ) {
    super(type, dataInterface, path, token);
    this.apiAxios = new ProjectAxios(dataInterface, path, token);
  }

  async findTasksCategories(id: string){
    return await this.apiAxios.findTasksCategories(id);
  }


}

export default ProjectsReactQuery;
