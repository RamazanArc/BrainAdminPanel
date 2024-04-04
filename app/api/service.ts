import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  // "https://brain2022.brmagazacilik.com.tr:2023/swag  ger/api"
});

export const API = {
  get: async (url: string, data?: any) => {
    try {
      const response = await client.get(url, data);
      console.log(data);
      return [response, null] as any;
    } catch (error) {
      return [null, error] as any;
    }
  },
  post: async (url: string, data?: any, header?: any) => {
    try {
      const response = await client.post(url, data, header);
      console.log(data);
      return [response, null] as any;
    } catch (error) {
      return [null, error] as any;
    }
  },
};
