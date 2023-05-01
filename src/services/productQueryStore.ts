import { create } from "zustand";
import { Category } from "../hooks/useCategories";

interface ProductQueryStore {
  category: Category | null;
  sortOrder: string;
  setSortOrder: (sortValue: string) => void;
  setCategory: (category: Category | null) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  category: null,
  sortOrder: "",
  setSortOrder: (sortValue) => set({ sortOrder: sortValue }),
  setCategory: (category) => set({ category: category }),
}));

export default useProductQueryStore;
