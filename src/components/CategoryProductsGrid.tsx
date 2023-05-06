import useProducts, { Product } from "../hooks/useProducts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import ProductCardContainer from "./ProductCardContainer";

import useProductQueryStore from "../services/productQueryStore";
import { useParams } from "react-router-dom";
import useCategories, { Category } from "../hooks/useCategories";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { unstable_batchedUpdates } from "react-dom";
import { useEffect } from "react";

const CategoryProductsGrid = () => {
  const { categorySlug } = useParams();
  const {
    isLoading: isCategoryLoading,
    isError,
    data: categories,
  } = useCategories();

  const category = categories?.find(
    (category) => category.slug === categorySlug
  );
  //console.log("catgory", category);

  const sortOrder = useProductQueryStore((s) => s.sortOrder);
  const {
    data: products,
    error,
    isLoading,
  } = useProducts({ category, sortOrder });

  const skeletons = [1, 2, 3];
  const { updatecategoryBreadcrumb } = useBreadCrumbStore();
  useEffect(() => {
    console.log("inside useeffect", category);

    updatecategoryBreadcrumb(
      category
        ? {
            name: category.name,
            link: `/category/${category.slug}`,
          }
        : null
    );
  }, [category]);
  if (category == null) return <div>No category found</div>;
  if (isCategoryLoading) return <div>Loading</div>;
  if (isError) return <div>category query error</div>;

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
