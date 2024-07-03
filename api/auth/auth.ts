import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import AuthAxios from '@api/auth/auth.axios';
import CustomersProps from '@interfaces/customers.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class AuthReactQuery extends ApiReactQuery<CustomersProps> {
  protected apiAxios: AuthAxios;

  constructor(token?: string) {
    const path = 'auth';
    const invalidateQueryFiltersAuths: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersAuths, path, token);
    this.apiAxios = new AuthAxios(path, token);
  }

  async register(data) {
    const response = await this.apiAxios.register(data);
    queryClient.setQueryData([this.type], response); 
    return response;
  }
}

export default AuthReactQuery;
