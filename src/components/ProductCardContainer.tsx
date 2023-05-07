import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductCardContainer({ children }: Props) {
  return (
    <>
      <Box
        borderRadius={15}
        border={`2px solid ${useColorModeValue("#e2e8f0", "gray.800")}`}
        overflow="hidden"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default ProductCardContainer;
