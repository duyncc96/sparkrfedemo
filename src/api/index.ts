import Axios, { AxiosInstance } from "axios";

let instance: SDK;

const baseUrl = process.env.REACT_APP_API_URL || "";

class SDK {
  private request!: AxiosInstance;

  public accessToken: string | null | undefined;

  constructor() {
    if (!instance) {
      instance = this;
    }
    this.request = Axios.create({
      baseURL: `${baseUrl}`,
    });
    this.request.interceptors.request.use((config) => {
      if (this.accessToken && config?.headers) {
        config.headers.Authorization = `Bearer ${this.accessToken}`;
      }
      return config;
    });

    return instance;
  }
  setToken = (token: string | null | undefined) => {
    this.accessToken = token;
  };
}
const API = new SDK();

export default API;
