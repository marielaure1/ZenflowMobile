import ApiAxios from '@api/api.axios';
import ClientsProps from '@interfaces/clients.interface';

class ClientAxios extends ApiAxios<ClientsProps> {
  constructor(dataInterface: ClientsProps, path: string, token?: string) {
    super(dataInterface, path, token);
  }
}

export default ClientAxios;
