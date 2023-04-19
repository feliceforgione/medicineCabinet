import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import CategoryGrid from "./components/CategoryGrid";
import Breadcrumbs from "./components/Breadcrumbs";
import SortSelector from "./components/SortSelector";

export interface ProductQuery {
  category: Category | null;
  sortOrder: string;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

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
          <CategoryList
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
            selectedCategory={productQuery.category}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex justifyContent="space-between" paddingX={5}>
          <Breadcrumbs
            category={productQuery.category}
            onSelectBreadcrumb={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
          <SortSelector
            selectedSort={productQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setProductQuery({ ...productQuery, sortOrder })
            }
          />
        </Flex>
        {productQuery.category ? (
          <ProductGrid productQuery={productQuery} />
        ) : (
          <CategoryGrid
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
