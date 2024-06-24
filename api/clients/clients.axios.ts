import CustomFieldProps from '@/common/interfaces/custom-fields.interface';
import ApiAxios from '@api/api.axios';
import ClientsProps from '@interfaces/clients.interface';

class ClientAxios extends ApiAxios<ClientsProps> {
  constructor(path: string, token?: string) {
    super(path, token);
  }

 
}

export default ClientAxios;
