import ApiAxios from '@api/api.axios';
import ClientsProps from '@interfaces/clients.interface';

class ClientAxios extends ApiAxios<ClientsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async createCustomField(data: ClientsProps){
    const response = await this.apiClient.post(`${this.path}/custom-field`, data)
    return response.data
  }
}

export default ClientAxios;
