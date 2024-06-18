import ApiAxios from '@api/api.axios';
import ClientsProps from '@interfaces/clients.interface';

class ClientAxios extends ApiAxios<ClientsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findAllOwner(){
    const response = await this.apiClient.get(`${this.path}/me`)
    return response.data
  }

  async findAllOwnerCustomsFields(){
    const response = await this.apiClient.get(`${this.path}/me/custom-fields`)
    return response.data
  }

  async findOneOwnerCustomsFields(id: string){
    const response = await this.apiClient.get(`${this.path}/${id}/me/custom-fields`)
    return response.data
  }

  async createCustomField(data: ClientsProps){
    const response = await this.apiClient.post(`${this.path}/custom-field`, data)
    return response.data
  }
}

export default ClientAxios;
