import ApiAxios from '@api/api.axios';
import TasksProps from '@interfaces/tasks.interface';

class TasksAxios extends ApiAxios<TasksProps> {
  constructor(dataInterface: TasksProps, path: string, token?: string) {
    super(dataInterface, path, token);
  }

  
}

export default TasksAxios;
