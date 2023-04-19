import React, { useState, useEffect } from "react";
import useProducts, { Product } from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import ProductCardContainer from "./ProductCardContainer";
import { Category } from "../hooks/useCategories";
import Breadcrumbs from "./Breadcrumbs";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data: products, error, loading } = useProducts(productQuery);
  const skeletons = [1, 2, 3];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={7}
    >
      {error && <Text>{error}</Text>}
      {loading &&
        skeletons.map((skeleton) => (
          <ProductCardContainer key={skeleton}>
            <SkeletonProductCard />
          </ProductCardContainer>
        ))}
      {!loading &&
        products.map((product) => (
          <ProductCardContainer key={product._id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
