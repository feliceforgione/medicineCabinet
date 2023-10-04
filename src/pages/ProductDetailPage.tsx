import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";

function ProductDetailPage() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProduct(productId as string);

  if (isLoading) return <Spinner />;
  if (!product) throw Error("Product Not Found");
  if (error) throw error;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        padding={7}
        spacing={7}
        bg={useColorModeValue("#f2f2f2", "#2d3748")}
        mx={40}
        borderRadius={10}
      >
        <Box>
          <Heading size="lg">{product.title}</Heading>
          <Text>{product.brand}</Text>
          <Text>{product.manufacturer}</Text>
          <Rating
            initialValue={product.ratings}
            readonly
            allowFraction
            size={20}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
          />
          <Text fontSize={"l"} paddingTop={2} fontWeight={"700"}>
            ${product.price}
          </Text>
          <Image my={2} src={product.images[0].link} />
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Description
          </Heading>
          <div
            className="productDescription"
            dangerouslySetInnerHTML={{ __html: product.description_full_html }}
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default ProductDetailPage;
