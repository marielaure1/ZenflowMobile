import ApiAxios from '@api/api.axios';
import CustomersProps from '@interfaces/customers.interface';

class AuthAxios extends ApiAxios<CustomersProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async register(data: CustomersProps) {
    const response = await this.apiClient.post(`/${this.path}/register`, data);
    return response.data;
  }
  
  async verifToken(token: string) {
    const response = await this.apiClient.get(`/${this.path}/verif-token/${token}`);
    return response.data;
  }
}

export default AuthAxios;
