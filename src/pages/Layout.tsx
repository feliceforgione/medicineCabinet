import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
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
    <>
      <NavBar />
      <ErrorBoundary key={location.pathname} FallbackComponent={ErrorBox}>
        <Box px={4} my={5}>
          <Outlet />
        </Box>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default Layout;
