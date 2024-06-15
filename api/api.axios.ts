import axios, { AxiosInstance } from 'axios';

let LOCATION = "Maison";
let IP = LOCATION === "Maison" ? 'http://192.168.1.80:3001/api' : 'http://10.2.106.6:3001/api';

class ApiAxios<DataInterface> {
  protected apiClient: AxiosInstance;
  protected token: string | undefined;

  constructor(
    private readonly dataInterface: DataInterface,
    public readonly path: string,
    token?: string
  ) {
    this.dataInterface = dataInterface;
    this.path = path;
    this.token = token;

    this.apiClient = axios.create({
      baseURL: IP,
      timeout: 10000,
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
    const response = await this.apiClient.get(`/${this.path}`);
    console.log("ee", response.data);
    
    return response.data;
  }

  async createAxios(datas: DataInterface) {
    const response = await this.apiClient.post(`/${this.path}`, datas);
    return response.data;
  }

  async findOneAxios(id: string) {
    const response = await this.apiClient.get(`/${this.path}/${id}`);
    return response.data;
  }

  async updateAxios(id: string, datas: DataInterface) {
    const response = await this.apiClient.put(`/${this.path}/${id}`, datas);
    return response.data;
  }

  async deleteAxios(id: string) {
    await this.apiClient.delete(`/${this.path}/${id}`);
  }
}

export default ApiAxios;
