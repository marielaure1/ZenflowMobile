import ApiAxios from '@api/api.axios';
import TaskCategorysProps from '@interfaces/task-category.interface';

class TaskCategorysAxios extends ApiAxios<TaskCategorysProps> {
  constructor(dataInterface: TaskCategorysProps, path: string, token?: string) {
    super(dataInterface, path, token);
  }

  async findTasks(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/tasks`)
    return response.data
  }
}

export default TaskCategorysAxios;
