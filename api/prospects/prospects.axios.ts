import ApiAxios from '@api/api.axios';
import ProspectsProps from '@interfaces/prospects.interface';

class ProspectAxios extends ApiAxios<ProspectsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findAllOwner(){
    try {
      const response = await this.apiClient.get(`${this.path}/me`)
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
}

export default ProspectAxios;
