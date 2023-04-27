import { useQuery } from "@tanstack/react-query";
import { ProductQuery } from "../App";
import { getData, getProducts } from "../services/api-client";
import { Category } from "./../hooks/useCategories";
import { AxiosError } from "axios";
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

const useProducts = (productQuery: ProductQuery) => {
  console.log(productQuery);
  const { category, sortOrder } = productQuery;
  return useQuery<ProductsByCategory, AxiosError>({
    queryKey: ["category", category?.name, "products", sortOrder],
    queryFn: () =>
      getProducts(`/category/${category?._id}/products`, {
        params: { sort: sortOrder },
      }),
    staleTime: 60 * 1000,
  });
  /*   return useData<Product>(
    `/category/${category?._id}/products`,
    [productQuery],
    {
      params: { sort: sortOrder },
    },
    "productIds"
  ); */
};

export default useProducts;
