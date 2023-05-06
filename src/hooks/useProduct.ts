import { useQuery } from "@tanstack/react-query";
import { getDataPoint } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";

interface Image {
  link: string;
  id: string;
  zoomable: boolean;
  main_image: boolean;
}

export interface Product {
  _id: string;
  title: string;
  brand: string;
  ratings: number;
  price: number;
  images: Image[];
}

const useProduct = (productId: string) => {
  return useQuery<Product, AxiosError>({
    queryKey: ["products", productId],
    queryFn: () => getDataPoint(`/products/${productId}`, {}),
    staleTime: ms("5s"),
  });
};

export default useProduct;
