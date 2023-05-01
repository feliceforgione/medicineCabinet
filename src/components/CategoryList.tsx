import useCategories from "../hooks/useCategories";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import SkeletonCategoryList from "./SkeletonCategoryList";
import useProductQueryStore from "../services/productQueryStore";

function CategoryList() {
  const { isLoading, isError, data: categories } = useCategories();
  const selectedCategory = useProductQueryStore((s) => s.category);
  const setCategory = useProductQueryStore((s) => s.setCategory);
  if (isError) return null;
  return (
    <div>
      <Heading
        size={"md"}
        as="h2"
        paddingBottom={5}
        textAlign={"center"}
        onClick={() => setCategory(null)}
      >
        CATEGORIES
      </Heading>
      {isLoading && <SkeletonCategoryList />}

      <List spacing={4}>
        {categories &&
          categories.map((category) => (
            <ListItem key={category._id} onClick={() => setCategory(category)}>
              <HStack>
                <Image boxSize="32px" borderRadius={8} src={category.icon} />
                {selectedCategory?.name === category.name ? (
                  <Text as="b">{category.name}</Text>
                ) : (
                  <Button whiteSpace="normal" textAlign="left" variant="link">
                    {category.name}
                  </Button>
                )}
              </HStack>
            </ListItem>
          ))}
      </List>
    </div>
  );
}

export default CategoryList;
