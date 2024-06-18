import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ClientAxios from '@api/clients/clients.axios';
import ClientsProps from '@interfaces/clients.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ClientsReactQuery extends ApiReactQuery<ClientsProps> {
  protected apiAxios: ClientAxios;
  protected queryClient: QueryClient;

  constructor(token?: string) {
    const path = 'clients';
    const invalidateQueryFiltersClients: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersClients, path, token);
    this.apiAxios = new ClientAxios(path, token);
    this.queryClient = new QueryClient();
  }

  async findAllOwner(){
    return await this.apiAxios.findAllOwner();
  }

  async findAllOwnerCustomsFields(){
    return await this.apiAxios.findAllOwnerCustomsFields();
  }

  async findOneOwnerCustomsFields(id: string){
    const data = await this.apiAxios.findOneOwnerCustomsFields(id);
    this.queryClient.setQueryData(["client-customs-fields", id], data);
    return data;
  }

  async createCustomField(data: ClientsProps){
    return await this.apiAxios.createCustomField(data);
  }
}

export default ClientsReactQuery;
