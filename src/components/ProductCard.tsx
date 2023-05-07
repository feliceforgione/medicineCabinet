import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Product } from "../entities/Product";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <Link to={`/products/${product._id}`}>
      <Card variant={"filled"}>
        <AspectRatio ratio={4 / 3}>
          <Image src={product.images[0].link} />
        </AspectRatio>
        <CardBody>
          <Box height={8} marginBottom={2}>
            <Heading fontSize="l">{product.title}</Heading>
          </Box>
          <Text paddingBottom={1}>{product.brand}</Text>

          <Rating
            initialValue={product.ratings}
            readonly
            allowFraction
            size={20}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
          />
          <Text
            fontSize={"xl"}
            paddingTop={2}
            fontWeight={"700"}
            textAlign={"right"}
          >
            ${product.price}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ProductCard;
