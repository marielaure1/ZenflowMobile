import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ClientAxios from '@api/clients/clients.axios';
import ClientsProps from '@interfaces/clients.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ClientsReactQuery extends ApiReactQuery<ClientsProps> {
  protected apiAxios: ClientAxios;

  constructor(token?: string) {
    const path = 'clients';
    const invalidateQueryFiltersClients: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersClients, path, token);
    this.apiAxios = new ClientAxios(path, token);
  }

  async createCustomField(data: ClientsProps){
    return await this.apiAxios.createCustomField(data);
  }
}

export default ClientsReactQuery;
