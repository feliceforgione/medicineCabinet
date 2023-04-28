import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/api-client";
import initialCatetories from "../data/categories";

export interface Category {
  _id: string;
  name: string;
  productIds: string[];
  icon: string;
}

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => getData("/category"),
    staleTime: 60 * 1000,
    initialData: initialCatetories,
  });
};

export default useCategories;
