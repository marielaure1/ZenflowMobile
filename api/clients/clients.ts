import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ClientAxios from '@api/clients/clients.axios';
import ClientsProps from '@interfaces/clients.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ClientsReactQuery extends ApiReactQuery<ClientsProps> {
  protected apiAxios: ClientAxios;

  constructor(
    type: InvalidateQueryFilters,
    dataInterface: ClientsProps,
    path: string,
    token?: string
  ) {
    super(type, dataInterface, path, token);
    this.apiAxios = new ClientAxios(dataInterface, path, token);
  }
}

export default ClientsReactQuery;
