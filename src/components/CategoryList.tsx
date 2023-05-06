import useCategories from "../hooks/useCategories";
import { HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import SkeletonCategoryList from "./SkeletonCategoryList";
import { NavLink } from "react-router-dom";
import slugify from "@sindresorhus/slugify";

function CategoryList() {
  const { isLoading, isError, data: categories } = useCategories();
  if (isError) return null;
  return (
    <div id="categoriesSideBar">
      <Heading size={"md"} as="h2" paddingBottom={5} textAlign={"center"}>
        CATEGORIES
      </Heading>
      {isLoading && <SkeletonCategoryList />}

      <List spacing={4}>
        {categories &&
          categories.map((category) => (
            <ListItem key={category._id}>
              <HStack>
                <Image boxSize="32px" borderRadius={8} src={category.icon} />
                <NavLink to={`/category/${slugify(category.name)}`}>
                  {category.name}
                </NavLink>
              </HStack>
            </ListItem>
          ))}
      </List>
    </div>
  );
}

export default CategoryList;
