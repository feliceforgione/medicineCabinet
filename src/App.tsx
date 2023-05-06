import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Breadcrumbs from "./components/Breadcrumbs";
import CategoryGrid from "./components/CategoryGrid";
import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/CategoryProductsGrid";
import SortSelector from "./components/SortSelector";
import useProductQueryStore from "./services/productQueryStore";

/* export interface ProductQuery {
  category: Category | null;
  sortOrder: string;
} */

function App() {
  /*   const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
 */
  const category = useProductQueryStore((s) => s.category);
  return (
    <Grid
      templateAreas={{ base: `"nav"  "main"`, lg: `"nav  nav" "aside  main"` }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
        {category ? <ProductGrid /> : <CategoryGrid />}
      </GridItem>
    </Grid>
  );
}

export default App;
