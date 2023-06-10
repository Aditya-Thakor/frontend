import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { lazy, useState } from "react";
import routes from "./path";
import Loading from "../component/common/Suspense";
import AuthGuard from "../guard/AuthGuard";
import { getTokenDetails } from "../utils/helper";
import { adminEmail } from "../axios/adminApi";

const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const PageNotFound = lazy(() => import("../pages/pageNotFound/PageNotFound"));

// const { token, role } = getTokenDetails();

const ReactRoutes = () => {
  const { role } = getTokenDetails();
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Loading Children={Login} />} />
        <Route path="/register" element={<Loading Children={Register} />} />
        <Route path="*" element={<Loading Children={PageNotFound} />} />

        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={<Loading Children={route.component} />}
          />
        ))}
      </Routes>
    </>
  );
};

export { ReactRoutes };
