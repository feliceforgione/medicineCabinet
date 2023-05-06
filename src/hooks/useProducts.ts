import { useQuery } from "@tanstack/react-query";
//import { ProductQuery } from "../App";
import { getProducts } from "../services/api-client";
import { AxiosError } from "axios";
import ms from "ms";
import { Category } from "./useCategories";
//import useData from "./useData";

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
