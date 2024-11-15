import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import CustomFieldAxios from '@api/custom-fields/custom-fields.axios';
import CustomFieldsProps from '@interfaces/custom-fields.interface';
import queryClient from '@api/config.react-query';
import ApiReactQuery from '../api.react-query';

class CustomFieldsReactQuery extends ApiReactQuery<CustomFieldsProps> {
  protected apiAxios: CustomFieldAxios;

  constructor(token?: string) {
    const path = 'custom-fields';
    const invalidateQueryFiltersCustomFields: InvalidateQueryFilters = { queryKey: [path] };
    super(invalidateQueryFiltersCustomFields, path, token);
    this.apiAxios = new CustomFieldAxios(path, token);
  }

  async findAllOwnerCustomsFields(schema: string){
    const data = await this.apiAxios.findAllOwnerCustomsFields(schema);
    this.queryClient.setQueryData([`${schema}-all-customs-fields`], data);
    return data;
  }

  async findOneOwnerCustomsFields(id: string, schema: string){
    const data = await this.apiAxios.findOneOwnerCustomsFields(id, schema);
    this.queryClient.setQueryData([`${schema}-customs-fields`, id], data);
    return data;
  }

  async updatePositionsAll(schema: string, datas: CustomFieldsProps[]){
    const data = await this.apiAxios.updatePositions(schema, datas);
    this.queryClient.invalidateQueries({ queryKey: [`${schema}-all-customs-fields`] });
    return data;
  }

  async updatePositions(schema: string, datas: CustomFieldsProps[]){
    const data = await this.apiAxios.updatePositions(schema, datas);
    this.queryClient.invalidateQueries({ queryKey: [`${schema}-customs-fields`] });
    return data;
  }

  async createForAll(schema: string, data: CustomFieldsProps){
    try {
      const response = await this.apiAxios.createAxios(data);
      this.queryClient.invalidateQueries({ queryKey: [`${schema}-all-customs-fields`] });
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async createForOne(schema: string, data: CustomFieldsProps){
    try {
      const response = await this.apiAxios.createAxios(data);
      this.queryClient.invalidateQueries({ queryKey: [`${schema}-customs-fields`] });
      return response;
    } catch (error) {
      return error?.response;
    }
  }
}

export default CustomFieldsReactQuery;
