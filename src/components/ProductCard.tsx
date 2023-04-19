import React from "react";
import { Product } from "../hooks/useProducts";
import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <Card>
      <AspectRatio ratio={4 / 3}>
        <Image src={product.images[0].link} />
      </AspectRatio>
      <CardBody>
        <Heading fontSize="l">{product.title}</Heading>
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
  );
}

export default ProductCard;
