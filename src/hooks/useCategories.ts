import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import initialCatetories from "../data/categories";
import { Category } from "../entities/Category";
import { getData } from "../services/api-client";

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => getData("/category"),
    staleTime: ms("5s"),
    initialData: initialCatetories,
  });
};

export default useCategories;
