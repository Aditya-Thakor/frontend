import { lazy } from "react";

const protectedRoutes = [
  {
    path: "/dashboard",
    element: lazy(() => import("../pages/dashboard/Dashboard")),
    protected: true,
  },
  {
    path: "/cart",
    element: lazy(() => import("../pages/cart/Cart")),
    protected: true,
  },
  {
    path: "/products",
    element: lazy(() => import("../pages/products/Product")),
    protected: true,
  },
  {
    path: "/add-product",
    element: lazy(() => import("../pages/products/AddProduct")),
    protected: true,
  },
  {
    path: "/categories",
    element: lazy(() => import("../pages/dashboard/Dashboard")),
    protected: true,
  },
  {
    path: "/add-product",
    element: lazy(() => import("../pages/dashboard/Dashboard")),
    protected: true,
  },
  {
    path: "/add-category",
    element: lazy(() => import("../pages/dashboard/Dashboard")),
    protected: true,
  },
];

const unProtectedRoutes = [
  {
    path: "/login",
    element: lazy(() => import("../pages/login/Login")),
    protected: false,
  },
  {
    path: "/register",
    element: lazy(() => import("../pages/register/Register")),
    protected: false,
  },
];

const routes = [...protectedRoutes, ...unProtectedRoutes];

export { routes };
