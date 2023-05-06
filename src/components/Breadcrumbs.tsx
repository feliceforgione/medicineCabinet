import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  const { categoryBreadcrumb } = useBreadCrumbStore();
  const { homeBreadcrumb } = useBreadCrumbStore();
  return (
    <Breadcrumb spacing="8px" fontSize={20}>
      <BreadcrumbItem>
        <Link to={homeBreadcrumb?.link}>{homeBreadcrumb?.name}</Link>
      </BreadcrumbItem>

      {categoryBreadcrumb && (
        <BreadcrumbItem>
          <BreadcrumbLink>{categoryBreadcrumb?.name}</BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
