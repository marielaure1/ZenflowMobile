import ApiAxios from '@api/api.axios';
import CustomersProps from '@interfaces/customers.interface';

class CustomerAxios extends ApiAxios<CustomersProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

  async findMe() {
    const response = await this.apiClient.get(`/${this.path}/me`);
    return response.data;
  }
}

export default CustomerAxios;
