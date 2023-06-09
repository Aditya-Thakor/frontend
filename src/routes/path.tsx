import { lazy } from "react";

const Dashboard: any = lazy(() => import("../pages/dashboard/Dashboard"));
const AddProduct: any = lazy(() => import("../pages/products/AddProduct"));

const Cart = lazy(() => import("../pages/cart/Cart"));
const Product = lazy(() => import("../pages/products/Product"));

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    role: "admin",
  },
  {
    path: "/add-product",
    component: AddProduct,
    role: "admin",
  },
  {
    path: "/cart",
    component: Cart,
    role: "user",
  },
  {
    path: "/products",
    component: Product,
    role: ["admin", "user"],
  },
];

export default routes;
