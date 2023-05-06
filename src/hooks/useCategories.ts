import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import initialCatetories from "../data/categories";
import { getData } from "../services/api-client";
import { Category } from "../entities/Category";

const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => getData("/category"),
    staleTime: ms("5s"),
    //initialData: initialCatetories,
  });
};

export default useCategories;
