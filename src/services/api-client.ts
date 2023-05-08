import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {},
});

const getData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return apiClient
    .get(endpoint, { ...requestConfig })
    .then<T[]>((res) => res.data.result);
};

const getDataPoint = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  return apiClient
    .get(endpoint, { ...requestConfig })
    .then<T>((res) => res.data.result);
};

const getProducts = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  return apiClient
    .get(endpoint, { ...requestConfig })
    .then<T>((res) => res.data.result);
};

export { getData, getProducts, getDataPoint };
