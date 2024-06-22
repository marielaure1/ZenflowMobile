import CustomFieldProps from '@/common/interfaces/custom-fields.interface';
import ApiAxios from '@api/api.axios';
import ClientsProps from '@interfaces/clients.interface';

class ClientAxios extends ApiAxios<ClientsProps> {
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

export default ClientAxios;
