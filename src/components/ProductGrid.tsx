import useProducts, { Product } from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import ProductCardContainer from "./ProductCardContainer";

import useProductQueryStore from "../services/productQueryStore";

const ProductGrid = () => {
  const category = useProductQueryStore((s) => s.category);
  const sortOrder = useProductQueryStore((s) => s.sortOrder);
  const {
    data: products,
    error,
    isLoading,
  } = useProducts({ category, sortOrder });
  const skeletons = [1, 2, 3];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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
        products?.productIds.map((product) => (
          <ProductCardContainer key={product._id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
