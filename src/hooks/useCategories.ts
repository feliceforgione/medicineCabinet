import { useQuery } from "@tanstack/react-query";

import { getData } from "../services/api-client";

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
  });
  //return useData<Category>("/category");
};

export default useCategories;
