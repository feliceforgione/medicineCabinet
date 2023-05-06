import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import CategoryCard from "./CategoryCard";

function CategoryGrid() {
  const { isError, isLoading, data: categories } = useCategories();
  if (isLoading) return <Spinner />;
  if (isError) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} padding="10px" spacing={7}>
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
    </SimpleGrid>
  );
}

export default CategoryGrid;
