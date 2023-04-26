import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  params: {},
});

interface FetchResponse<T> {
  message: string;
  result: T[];
}

const getData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return apiClient
    .get<FetchResponse<T>>(endpoint, { ...requestConfig })
    .then((res) => res.data.result);
};

export { getData };
