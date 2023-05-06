import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import initialCatetories from "../data/categories";
import { getData } from "../services/api-client";

export interface Category {
  _id: string;
  name: string;
  slug?: string;
  productIds: string[];
  icon: string;
}

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => getData("/category"),
    staleTime: ms("5s"),
    //initialData: initialCatetories,
  });
};

export default useCategories;
