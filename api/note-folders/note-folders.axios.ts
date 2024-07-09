import ApiAxios from '@api/api.axios';
import NoteFoldersProps from '@interfaces/note-folders.interface';

class NoteFoldersAxios extends ApiAxios<NoteFoldersProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findAllChildrenByParentId(id: string){
    try {
      const response = await this.apiClient.get(`${this.path}/me/${id}/children`)
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
  
}

export default NoteFoldersAxios;
