import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import ApiAxios from '@api/api.axios';
import queryClient from '@api/config.react-query';

class ApiReactQuery<DataInterface> {
  protected queryClient: QueryClient;
  protected apiAxios: ApiAxios<DataInterface>;

  constructor(
    protected readonly type: InvalidateQueryFilters,
    private readonly path: string,
    token?: string
  ) {
    this.queryClient = queryClient;
    this.apiAxios = new ApiAxios<DataInterface>(this.path, token);
  }

  async findAll() {
    try {
      const response = await this.apiAxios.findAllAxios();
      this.queryClient.setQueryData([this.type], response); 
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async create(datas: DataInterface) {
    try {
      const response = await this.apiAxios.createAxios(datas);
      this.queryClient.invalidateQueries(this.type);
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async findOne(id: string) {
    try {
      console.log(id);
      
      const response = await this.apiAxios.findOneAxios(id);
      this.queryClient.setQueryData([this.type, id], response); 
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async update(id: string, datas: DataInterface) {
    try {
      const response = await this.apiAxios.updateAxios(id, datas);
      this.queryClient.invalidateQueries(this.type);
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async delete(id: string) {
    try {
      const response = await this.apiAxios.deleteAxios(id);
      this.queryClient.invalidateQueries(this.type);
      return response;
    } catch (error) {
      return error?.response;
    }
  }
}

export default ApiReactQuery;
