import ApiAxios from '@api/api.axios';
import TasksProps from '@interfaces/tasks.interface';

class TasksAxios extends ApiAxios<TasksProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  
}

export default TasksAxios;
