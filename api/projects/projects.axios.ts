import ApiAxios from '@api/api.axios';
import ProjectsProps from '@interfaces/projects.interface';

class ProjectsAxios extends ApiAxios<ProjectsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findTasksCategories(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/tasksCategories`)
    return response.data
  }

  async findTasks(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/tasks`)
    return response.data
  }


}

export default ProjectsAxios;
