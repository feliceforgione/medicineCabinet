import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
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
