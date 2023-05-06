import { Box, Heading } from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";
import { Link } from "react-router-dom";

function ErrorBox(props: FallbackProps) {
  const { error } = props;

  return (
    <Box role="alert" p={10}>
      <Heading as="h2" size="lg">
        {error.message}
      </Heading>
      <Link to={"/"}>Go To Home</Link>
    </Box>
  );
}

export default ErrorBox;
