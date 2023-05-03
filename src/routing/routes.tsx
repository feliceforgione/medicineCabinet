import { createBrowserRouter } from "react-router-dom";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";
import CategoryPage from "../pages/CategoryPage";
import Layout from "../pages/Layout";
import ProductDetailPage from "../pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <CategoryPage />,
        children: [
          {
            path: "",
            element: <CategoryGrid />,
          },
          {
            path: "category/:id",
            element: <ProductGrid />,
          },
        ],
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
