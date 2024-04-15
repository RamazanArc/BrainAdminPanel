import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://brain2022.brmagazacilik.com.tr:2023/api",
  // "https://brain2022.brmagazacilik.com.tr:2023/swagger/api"
});

export const API = {
  get: async (url: string, data?: any) => {
    try {
      const response = await client.get(url, {
        params: data,
      });
      return [response, null] as any;
    } catch (error) {
      return [null, error] as any;
    }
  },
  // post: async (url: string, data?: any, header?: any, responsee?: any) => {
  //   try {
  //     await axios.post(
  //       "https://brain2022.brmagazacilik.com.tr:2023/api/Login/GetMobileAuthCode?id=ramazan&mobilephone=5452642588",
  //       {}
  //     );
  //     const response = await client.post(url, data, header);
  //     console.log(data);
  //     return [response, null] as any;
  //   } catch (error) {
  //     return [null, error] as any;
  //   }
  // },
  post: async (url: string, data?: any) => {
    try {
      const response = await client.post(
        url,
        {},
        {
          params: data,
        }
      );
      return [response, null] as any;
    } catch (error) {
      return [null, error] as any;
    }
  },
};
