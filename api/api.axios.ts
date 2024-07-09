import axios, { AxiosInstance } from 'axios';

let LOCATION = "Maison";
let IP = LOCATION === "Maison" ? 'http://192.168.1.80:3001/api' : 'http://10.2.106.6:3001/api';

class ApiAxios<DataInterface> {
  protected apiClient: AxiosInstance;
  protected token: string | undefined;

  constructor(public readonly path: string, token?: string) {
    this.token = token;
    this.apiClient = axios.create({
      baseURL: IP,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.init();
  }

  private init() {
    this.apiClient.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public getApiClient() {
    return this.apiClient;
  }

  async findAllAxios() {
    try {
      const response = await this.apiClient.get(`/${this.path}`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async createAxios(datas: DataInterface) {
    try {
      const response = await this.apiClient.post(`/${this.path}`, datas);
      console.log("response", response);
      
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async findOneAxios(id: string) {
    try {
      const response = await this.apiClient.get(`/${this.path}/${id}`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async updateAxios(id: string, datas: DataInterface) {
    try {
      const response = await this.apiClient.put(`/${this.path}/${id}`, datas);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async deleteAxios(id: string) {
    try {
      const response = await this.apiClient.delete(`/${this.path}/${id}`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async findAllOwner(){
    try {
      console.log("path : ", this.path);
      const response = await this.apiClient.get(`${this.path}/me/all`)
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
}

export default ApiAxios;
