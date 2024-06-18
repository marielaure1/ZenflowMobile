import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ProspectAxios from '@api/prospects/prospects.axios';
import ProspectsProps from '@interfaces/prospects.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '@api/api.react-query';

class ProspectsReactQuery extends ApiReactQuery<ProspectsProps> {
  protected apiAxios: ProspectAxios;

  constructor(token?: string) {
    const path = 'prospects';
    const invalidateQueryFiltersProspects: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersProspects, path, token);
    this.apiAxios = new ProspectAxios(path, token);
  }

  async findAllOwner(){
    return await this.apiAxios.findAllOwner();
  }

  async findAllOwnerCustomsFields(){
    return await this.apiAxios.findAllOwnerCustomsFields();
  }

  async findOneOwnerCustomsFields(id: string){
    const data = await this.apiAxios.findOneOwnerCustomsFields(id);
    this.queryClient.setQueryData(["prospect-customs-fields", id], data);
    return data;
  }

  async createCustomField(data: ProspectsProps){
    return await this.apiAxios.createCustomField(data);
  }
}

export default ProspectsReactQuery;
