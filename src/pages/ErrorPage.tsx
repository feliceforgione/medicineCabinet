import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <NavBar />
        <Box p={10}>
          <Heading as="h2" size="lg">
            Error
          </Heading>
          <h2>{error.status}</h2>
          <Text>{error.statusText}</Text>
          {error.data?.message && <p>{error.data.message}</p>}
        </Box>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <Box p={10}>
          <Heading as="h2" size="lg">
            Error
          </Heading>
          <Text> An unexpected error occurred</Text>
        </Box>
      </>
    );
  }
}

export default ErrorPage;
