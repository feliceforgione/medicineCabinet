import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

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

const useCategoryProducts = ({ category, sortOrder }: ProductQuery) => {
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

export default useCategoryProducts;
