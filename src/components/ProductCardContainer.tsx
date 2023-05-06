import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
}

export default ProductCardContainer;
