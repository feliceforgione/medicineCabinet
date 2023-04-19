import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  message: string;
  result: T[];
}

const useData = <T>(
  endpoint: string,
  dependencies: any[] = [],
  requestConfig?: AxiosRequestConfig,
  subProperty?: string | null
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(
          subProperty ? (res.data.result as any)[subProperty] : res.data.result
        );
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, dependencies);

  return { data, error, loading };
};

export default useData;
