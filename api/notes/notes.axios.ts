import ApiAxios from '@api/api.axios';
import NotesProps from '@interfaces/notes.interface';

class NotesAxios extends ApiAxios<NotesProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  
}

export default NotesAxios;
