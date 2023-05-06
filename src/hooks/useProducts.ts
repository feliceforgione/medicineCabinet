import { useQuery } from "@tanstack/react-query";
//import { ProductQuery } from "../App";
import { getProducts } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
//import useData from "./useData";

export interface ProductsByCategory {
  _id: string;
  name: string;
  productIds: Product[];
  icon: string;
}

interface ProductQuery {
  category: Category | null | undefined;
  sortOrder: string;
}

const useProducts = ({ category, sortOrder }: ProductQuery) => {
  //console.log(productQuery);
  //
  return useQuery<ProductsByCategory, AxiosError>({
    queryKey: ["category", category?.slug, "products", sortOrder],
    queryFn: () =>
      getProducts(`/category/${category?._id}/products`, {
        params: { sort: sortOrder },
      }),
    enabled: !!category,
    staleTime: ms("5s"),
  });
};

export default useProducts;
