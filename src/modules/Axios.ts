import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';

namespace Axios {
  export const axiosInstance: AxiosInstance = axios.create({
    // we can use a combination of baseUrl and RTK Query api baseUrl to create endpoint URL's if needed
    // baseURL: '',
    timeout: 30000,
  });

  // Axios custom baseQuery
  export type AxiosBaseQuery = BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  >;

  type RtkBaseUrl = {baseUrl: string};

  export const axiosBaseQuery =
    (
      {baseUrl}: RtkBaseUrl = {baseUrl: ''}, // set undefined baseUrl to ''
    ): AxiosBaseQuery =>
    async ({url, method, data, params, headers}) => {
      try {
        const res = await axiosInstance({
          url: baseUrl + url,
          method,
          data,
          params,
          headers,
        });
        return {data: res.data};
      } catch (error) {
        let err = error as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || 'Unknown error. please contact support',
          },
        };
      }
    };
}

export default Axios;
