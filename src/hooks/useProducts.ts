import { ProductQuery } from "../App";
import { Category } from "./useCategories";
import useData from "./useData";

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
  const { category, sortOrder } = productQuery;
  return useData<Product>(
    `/category/${category?._id}/products`,
    [productQuery],
    {
      params: { sort: sortOrder },
    },
    "productIds"
  );
};

export default useProducts;
