import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Category } from "../hooks/useCategories";
import { ProductQuery } from "../App";

interface Props {
  onSelectBreadcrumb: (category: Category | null) => void;
  category: Category | null;
}

function Breadcrumbs({ category, onSelectBreadcrumb }: Props) {
  return (
    <Breadcrumb spacing="8px" fontSize={20}>
      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => onSelectBreadcrumb(null)}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {category && (
        <BreadcrumbItem isCurrentPage>
          <Text>{category.name}</Text>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
