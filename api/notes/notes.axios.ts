import ApiAxios from '@api/api.axios';
import NotesProps from '@interfaces/notes.interface';

class NotesAxios extends ApiAxios<NotesProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findAllOwnerByFolder(id: string){
    try {
      const response = await this.apiClient.get(`${this.path}/me/folder/${id}`)
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
  
}

export default NotesAxios;
