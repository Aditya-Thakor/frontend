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
    role: "user",
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

  // product
  {
    path: "/products/:mode/:prod_id",
    component: AddProduct,
    role: "admin",
  },
  {
    path: "/products/add-product",
    component: AddProduct,
    role: "admin",
  },
  {
    path: "/products/:prod_id",
    component: AddProduct,
    role: "admin",
  },
  {
    path: "/products",
    component: ProductList,
    role: "admin",
  },

  // products
];

export default routes;
