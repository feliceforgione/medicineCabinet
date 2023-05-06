import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Category } from "../hooks/useCategories";
import { Link } from "react-router-dom";
import slugify from "@sindresorhus/slugify";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <Link to={`/category/${slugify(category.name)}`}>
      <Box
        borderRadius={10}
        overflow="hidden"
        _hover={{
          transform: "scale(1.04)",
          transition: "transform .15s ease-in",
        }}
      >
        <Card>
          <AspectRatio ratio={4 / 3}>
            <Image src={category?.icon} />
          </AspectRatio>
          <CardBody>
            <Heading fontSize="xl">{category?.name}</Heading>
          </CardBody>
        </Card>
      </Box>
    </Link>
  );
}

export default CategoryCard;
