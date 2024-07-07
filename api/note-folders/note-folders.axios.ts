import ApiAxios from '@api/api.axios';
import NotesProps from '@interfaces/tasks.interface';

class NotesAxios extends ApiAxios<NotesProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  
}

export default NotesAxios;
