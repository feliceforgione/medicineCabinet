import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBox from "../components/ErrorBox";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname == "/";

  const { reset } = useBreadCrumbStore();
  useEffect(() => {
    reset();
  }, [isHome]);

  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <NavBar />
      </Box>
      <Box flexGrow={1} paddingTop="60px">
        <ErrorBoundary key={location.pathname} FallbackComponent={ErrorBox}>
          <Box px={4} my={5}>
            <Outlet />
          </Box>
        </ErrorBoundary>
      </Box>
      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  );
}

export default Layout;
