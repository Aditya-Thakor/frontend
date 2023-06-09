import { lazy } from "react";

const Dashboard: any = lazy(() => import("../pages/dashboard/Dashboard"));
const AddProduct: any = lazy(() => import("../pages/products/AddProduct"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Product = lazy(() => import("../pages/products/Product"));
const ProductList = lazy(() => import("../pages/products/ProductList"));
// admin
const AdminList = lazy(() => import("../pages/admin/AdminList"));
const AddAdmin = lazy(() => import("../pages/admin/AddAdmin"));
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
    path: "/view-product",
    component: AddProduct,
    role: "admin",
  },
  {
    path: "/cart",
    component: Cart,
    role: "user",
  },
  {
    path: "/product-list",
    component: ProductList,
    role: "admin",
  },
  {
    path: "/products",
    component: Product,
    role: ["admin", "user"],
  },

  // Admin Route

  {
    path: "/admin",
    component: AdminList,
    role: "admin",
  },
  {
    path: "/admin/add-admin",
    component: AddAdmin,
    role: "admin",
  },
  {
    path: "/admin/edit-admin",
    component: AddAdmin,
    role: "admin",
  },
];

export default routes;
