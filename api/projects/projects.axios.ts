import ApiAxios from '@api/api.axios';
import ProjectsProps from '@interfaces/projects.interface';

class ProjectsAxios extends ApiAxios<ProjectsProps> {
  constructor(dataInterface: ProjectsProps, path: string, token?: string) {
    super(dataInterface, path, token);
  }

  async findTasksCategories(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/tasks-categories`)
    return response.data
  }
}

export default ProjectsAxios;
