import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Breadcrumbs from "../components/Breadcrumbs";
import SortSelector from "../components/SortSelector";
import CategoryGrid from "../components/CategoryGrid";
import CategoryList from "../components/CategoryList";

function Homepage() {
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
        <CategoryGrid />
      </GridItem>
    </Grid>
  );
}

export default Homepage;
