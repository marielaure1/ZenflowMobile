import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import CustomerAxios from '@api/customers/customers.axios';
import CustomersProps from '@interfaces/customers.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class CustomersReactQuery extends ApiReactQuery<CustomersProps> {
  protected apiAxios: CustomerAxios;

  constructor(token?: string) {
    const path = 'customers';
    const invalidateQueryFiltersCustomers: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersCustomers, path, token);
    this.apiAxios = new CustomerAxios(path, token);
  }

  async findMe() {
    const response = await this.apiAxios.findMe();
    queryClient.setQueryData(["me"], response);
    return response;
  }

  async updateMeEmail(email: string) {
    const response = await this.apiAxios.updateMeEmail(email);
    queryClient.invalidateQueries({ queryKey: ["me"] });
    return response;
  }

  async updateMePassword(password: string) {
    const response = await this.apiAxios.updateMePassword(password);
    queryClient.invalidateQueries({ queryKey: ["me"] });
    return response;
  }
}

export default CustomersReactQuery;
