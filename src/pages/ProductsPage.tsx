import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import ProductCardContainer from "../components/ProductCardContainer";
import SkeletonProductCard from "../components/SkeletonProductCard";

import useProductQueryStore from "../services/productQueryStore";

import { useEffect } from "react";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import SortSelector from "../components/SortSelector";
import useProducts from "../hooks/useProducts";
import useBreadCrumbStore from "../services/breadcrumbsStore";

const ProductsGrid = () => {
  const { showBoundary } = useErrorBoundary();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const sortOrder = useProductQueryStore((s) => s.sortOrder);

  const {
    data: products,
    error,
    isLoading,
  } = useProducts({ search, sortOrder });

  const skeletons = [1, 2, 3];
  const { updatecategoryBreadcrumb } = useBreadCrumbStore();
  useEffect(() => {
    updatecategoryBreadcrumb(null);
  }, []);

  try {
    if (isLoading) return <Spinner />;
    if (error) throw Error("Products error");
  } catch (err) {
    showBoundary(err);
  }

  return (
    <>
      <Grid
        templateAreas={{ base: `"main"`, lg: `"aside  main"` }}
        templateColumns={{
          base: "1fr",
          lg: "320px 1fr",
        }}
      >
        <GridItem area="aside" paddingX={5}>
          <Heading>Products </Heading>
          {search && <Text>Search Results for {search}</Text>}
          <Box marginTop={2}>
            <SortSelector />
          </Box>
        </GridItem>

        <GridItem area="main">
          <ErrorBoundary FallbackComponent={ErrorBox}>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 3 }}
              padding="10px"
              spacing={7}
            >
              {error && <Text>{error.message}</Text>}
              {isLoading &&
                skeletons.map((skeleton) => (
                  <ProductCardContainer key={skeleton}>
                    <SkeletonProductCard />
                  </ProductCardContainer>
                ))}
              {!isLoading &&
                products?.map((product) => (
                  <ProductCardContainer key={product._id}>
                    <ProductCard product={product} />
                  </ProductCardContainer>
                ))}
            </SimpleGrid>
          </ErrorBoundary>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductsGrid;
