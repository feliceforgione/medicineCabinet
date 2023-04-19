import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ProductCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default ProductCardContainer;
