import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoryList from "../components/CategoryList";
import SortSelector from "../components/SortSelector";

function CategoryPage() {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside  main"` }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <CategoryList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex justifyContent="space-between" paddingX={5}>
          <Breadcrumbs />
          <SortSelector />
        </Flex>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default CategoryPage;
