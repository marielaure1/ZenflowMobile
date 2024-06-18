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

  async findAllOwner(){
    const response = await this.apiClient.get(`${this.path}/me`)
    return response.data
  }

  async findAllOwnerCustomsFields(){
    const response = await this.apiClient.get(`${this.path}/me/custom-fields`)
    return response.data
  }

  async findOneOwnerCustomsFields(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/me/custom-fields`)
    return response.data
  }
}

export default ProjectsAxios;
