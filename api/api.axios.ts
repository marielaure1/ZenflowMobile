import axios, { AxiosInstance } from 'axios';
import { auth } from '@config/firebase';

class ApiAxios<DataInterface> {
  protected apiClient: AxiosInstance;
  protected token: string | undefined;

  constructor(public readonly path: string, token?: string) {
    this.token = token;
    this.apiClient = axios.create({
      baseURL: "http://192.168.212.184:3001/api",
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.init();
  }

  private init() {
    this.apiClient.interceptors.request.use(
      async (config) => {
        if (!this.token) {
          this.token = await auth.currentUser?.getIdToken(true);
        }
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.apiClient.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          this.token = await auth.currentUser?.getIdToken(true);
          originalRequest.headers.Authorization = `Bearer ${this.token}`;
          return this.apiClient(originalRequest);
        }
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
      const response = await this.apiClient.get(`${this.path}/me`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
}

export default ApiAxios;
