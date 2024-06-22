import ApiAxios from '@api/api.axios';
import CustomFieldsProps from '@interfaces/custom-fields.interface';

class CustomsFieldsAxios extends ApiAxios<CustomFieldsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findAllOwnerCustomsFields(schema: string){
    try {
      const response = await this.apiClient.get(`${this.path}/me/${schema}`)
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async findOneOwnerCustomsFields(id: string, schema: string){
    const response = await this.apiClient.get(`${this.path}/${id}/me/${schema}`)
    return response.data
  }

  async updatePositions(schema: string, datas: CustomFieldsProps){
    const response = await this.apiClient.put(`${this.path}/me/${schema}`, datas)
    return response.data
  }

  async createCustomField(schema: string, data: CustomFieldsProps){
    const response = await this.apiClient.post(`${this.path}/${schema}`, data)
    return response.data
  }
}

export default CustomsFieldsAxios;
