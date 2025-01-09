import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import ProductDetails from "./components/ProductDetails";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/details/:product_id",
    element: <ProductDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
