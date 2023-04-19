import useData from "./useData";

export interface Category {
  _id: string;
  name: string;
  productIds: string[];
  icon: string;
}

const useCategories = () => {
  return useData<Category>("/category");
};

export default useCategories;
