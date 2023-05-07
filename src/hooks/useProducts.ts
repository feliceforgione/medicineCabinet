import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { Product } from "../entities/Product";

interface ProductQuery {
  search?: string | null;
  sortOrder?: string | null;
}

const useProducts = ({ search, sortOrder }: ProductQuery) => {
  return useQuery<Product[], AxiosError>({
    queryKey: ["products", search, sortOrder],
    queryFn: () =>
      getData(`/products/`, {
        params: { sort: sortOrder, search: search },
      }),
    staleTime: ms("5s"),
  });
};

export default useProducts;
