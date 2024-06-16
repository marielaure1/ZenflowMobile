import ApiAxios from '@api/api.axios';
import TaskCategoriesProps from '@interfaces/task-categories.interface';

class TaskCategorysAxios extends ApiAxios<TaskCategoriesProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findTasks(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/tasks`)
    return response.data
  }
}

export default TaskCategorysAxios;
