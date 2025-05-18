import { Box, Image, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { Product } from "../entities/Product";
import { Link } from "react-router-dom";

export default function AIProductCard({ product }: { product: Product }) {
  const { _id, title, price, images } = product;
  return (
    <Box
      maxW="80%"
      mx="auto"
      my={4}
      borderRadius="lg"
      overflow="hidden"
      borderWidth="1px"
      borderColor="rgba(249, 115, 22, 0.2)"
      bg="rgba(31, 41, 55, 0.5)"
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={images[0].link}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Box p={4}>
        <Heading as="h3" size="md" fontWeight="semibold" color="white" mb={2}>
          {title}
        </Heading>

        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="lg" fontWeight="bold" color="green.300">
            ${price}
          </Text>
          <Link to={`/products/${_id}`}>
            <Button
              bgGradient="linear(to-r, orange.500, red.600)"
              color="white"
              px={4}
              py={1.5}
              borderRadius="lg"
              fontSize="sm"
              _hover={{ opacity: 0.9 }}
              transition="opacity 0.2s ease-in-out"
            >
              View Details
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
