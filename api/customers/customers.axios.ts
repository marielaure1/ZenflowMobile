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
      return error.response.data;
    }
  }

  async updateMeEmail(email: string) {
    try {
      const response = await this.apiClient.put(`/${this.path}/me/email`, email);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async updateMePassword(password: string) {
    try {
      const response = await this.apiClient.put(`/${this.path}/me/password`, password);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async register(data) {
    const response = await this.apiClient.post(`/${this.path}/register`, data);
    return response.data;
  }
}

export default CustomerAxios;
