import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import useProductQueryStore from "../services/productQueryStore";

function Breadcrumbs() {
  const { category, setCategory } = useProductQueryStore();
  return (
    <Breadcrumb spacing="8px" fontSize={20}>
      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => setCategory(null)}>Home</BreadcrumbLink>
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
