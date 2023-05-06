import useProducts from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import ProductCardContainer from "./ProductCardContainer";

import useProductQueryStore from "../services/productQueryStore";
import { useParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

const CategoryProductsGrid = () => {
  const { showBoundary } = useErrorBoundary();
  const { categorySlug } = useParams();
  const {
    isLoading: isCategoryLoading,
    isError,
    data: categories,
  } = useCategories();

  const category = categories?.find(
    (category) => category.slug === categorySlug
  );

  const sortOrder = useProductQueryStore((s) => s.sortOrder);
  const {
    data: products,
    error,
    isLoading,
  } = useProducts({ category, sortOrder });

  const skeletons = [1, 2, 3];
  const { updatecategoryBreadcrumb } = useBreadCrumbStore();
  useEffect(() => {
    updatecategoryBreadcrumb(
      category
        ? {
            name: category.name,
            link: `/category/${category.slug}`,
          }
        : null
    );
  }, [category]);

  try {
    if (isCategoryLoading) return <div>Loading</div>;
    if (category == null) throw Error("Category Not Found");
    if (isError) throw Error("Category error");
  } catch (err) {
    showBoundary(err);
  }

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

export default CategoryProductsGrid;
