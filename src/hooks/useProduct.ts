import { useQuery } from "@tanstack/react-query";
import { getDataPoint } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { Product } from "../entities/Product";

const useProduct = (productId: string) => {
  return useQuery<Product, AxiosError>({
    queryKey: ["products", productId],
    queryFn: () => getDataPoint(`/products/${productId}`, {}),
    enabled: !!productId,
    staleTime: ms("5s"),
  });
};

export default useProduct;
