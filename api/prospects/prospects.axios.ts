import ApiAxios from '@api/api.axios';
import ProspectsProps from '@interfaces/prospects.interface';

class ProspectAxios extends ApiAxios<ProspectsProps> {
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

  async createCustomField(data: ProspectsProps){
    const response = await this.apiClient.post(`${this.path}/custom-field`, data)
    return response.data
  }
}

export default ProspectAxios;
