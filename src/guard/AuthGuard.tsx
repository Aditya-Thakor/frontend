import { useEffect, useState } from "react";
import { getTokenDetails } from "../utils/helper";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = getTokenDetails();

  useEffect(() => {
    const path = location.pathname.includes("/register");
    if (role === "") {
      path ? navigate("/register") : navigate("/login");
    } else if (role.length > 0) {
      role === "admin" ? navigate("/dashboard") : navigate("/products");
    }
  }, []);

  return <Outlet />;
};

export default AuthGuard;
