import { SimpleGrid } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import CategoryCard from "./CategoryCard";
import { ProductQuery } from "../App";

interface Props {
  onSelectCategory: (category: Category) => void;
}

function CategoryGrid({ onSelectCategory }: Props) {
  const { data: categories, error, loading } = useCategories();

  if (error) return null;
  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} padding="10px" spacing={7}>
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          category={category}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </SimpleGrid>
  );
}

export default CategoryGrid;
