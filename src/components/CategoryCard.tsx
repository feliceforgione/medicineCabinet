import { AspectRatio, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Category } from "../hooks/useCategories";
import useProductQueryStore from "../services/productQueryStore";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  const setCategory = useProductQueryStore((s) => s.setCategory);
  return (
    <Card onClick={() => setCategory(category)}>
      <AspectRatio ratio={4 / 3}>
        <Image src={category?.icon} />
      </AspectRatio>
      <CardBody>
        <Heading fontSize="xl">{category?.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
