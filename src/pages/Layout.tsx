import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import useBreadCrumbStore from "../services/breadcrumbsStore";
import { useEffect } from "react";

function Layout() {
  const isHome = useLocation().pathname == "/";

  const { reset } = useBreadCrumbStore();
  useEffect(() => {
    console.log("reset");
    reset();
  }, [isHome]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
