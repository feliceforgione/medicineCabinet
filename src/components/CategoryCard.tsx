import { AspectRatio, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Category } from "../hooks/useCategories";
import { ProductQuery } from "../App";

interface Props {
  onSelectCategory: (category: Category) => void;
  category: Category;
}

function CategoryCard({ onSelectCategory, category }: Props) {
  return (
    <Card onClick={() => onSelectCategory(category)}>
      <AspectRatio ratio={4 / 3}>
        <Image src={category.icon} />
      </AspectRatio>
      <CardBody>
        <Heading fontSize="xl">{category.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
