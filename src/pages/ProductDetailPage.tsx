import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { Heading, Spinner } from "@chakra-ui/react";

function ProductDetailPage() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProduct(productId!);

  if (isLoading) return <Spinner />;
  if (error || !product) throw error;

  console.log(product);
  return (
    <>
      <Heading>{product.title}</Heading>
    </>
  );
}

export default ProductDetailPage;
