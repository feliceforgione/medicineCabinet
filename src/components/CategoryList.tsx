import useCategories from "../hooks/useCategories";
import { Category } from "./../hooks/useCategories";
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

interface Props {
  onSelectCategory: (category: Category | null) => void;
  selectedCategory: Category | null;
}

function CategoryList({ onSelectCategory, selectedCategory }: Props) {
  const { data: categories, error, loading } = useCategories();

  if (error) return null;
  return (
    <div>
      <Heading
        size={"md"}
        as="h2"
        paddingBottom={5}
        textAlign={"center"}
        onClick={() => onSelectCategory(null)}
      >
        CATEGORIES
      </Heading>
      {loading && <SkeletonCategoryList />}

      <List spacing={4}>
        {categories.map((category) => (
          <ListItem
            key={category._id}
            onClick={() => onSelectCategory(category)}
          >
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
