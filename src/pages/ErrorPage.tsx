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
          <Heading>Oops!</Heading>
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
        <Heading>Oops</Heading>
        <Text>An unexpected error occured</Text>
      </>
    );
  }
}

export default ErrorPage;
