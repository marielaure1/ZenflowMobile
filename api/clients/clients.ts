import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ClientAxios from '@api/clients/clients.axios';
import ClientsProps from '@interfaces/clients.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';
import CustomFieldProps from '@/common/interfaces/custom-fields.interface';

class ClientsReactQuery extends ApiReactQuery<ClientsProps> {
  protected apiAxios: ClientAxios;

  constructor(token?: string) {
    const path = 'clients';
    const invalidateQueryFiltersClients: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersClients, path, token);
    this.apiAxios = new ClientAxios(path, token);
  }

  async findAllOwner(){
    return await this.apiAxios.findAllOwner();
  }

  async findAllOwnerCustomsFields(){
    const data = await this.apiAxios.findAllOwnerCustomsFields();
    this.queryClient.setQueryData(["client-customs-fields"], data);
    return data;
  }

  async findOneOwnerCustomsFields(id: string){
    const data = await this.apiAxios.findOneOwnerCustomsFields(id);
    this.queryClient.setQueryData(["client-customs-fields", id], data);
    return data;
  }

  async updatePositions(datas: CustomFieldProps[]){
    const data = await this.apiAxios.updatePositions(datas);
    this.queryClient.invalidateQueries("client-customs-fields");
    return data;
  }

  async createCustomField(data: ClientsProps){
    try {
      const response = await this.apiAxios.createCustomField(data);
      this.queryClient.invalidateQueries("client-customs-fields");
      return response;
    } catch (error) {
      return error?.response;
    }
  }
}

export default ClientsReactQuery;
