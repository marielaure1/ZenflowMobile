import ApiAxios from '@api/api.axios';
import CustomersProps from '@interfaces/customers.interface';

class CustomerAxios extends ApiAxios<CustomersProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findMe() {
    try {
      const response = await this.apiClient.get(`/${this.path}/me`);
      return response.data;
    } catch (error) {
      console.log("CustomerAxios > findMe >", error);
      return error.response.data;
    }
    
    
  }
}

export default CustomerAxios;
