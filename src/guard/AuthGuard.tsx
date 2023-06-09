import { useState } from "react";
import { getTokenDetails } from "../utils/helper";
import { useLocation, useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = getTokenDetails();

  // console.log(location.pathname);

  // const path = location.pathname.includes("/register");

  // if (role === "") {
  //   path ? navigate("/register") : navigate("/login");
  // } else if (role.length > 0) {
  //   role === "admin" ? navigate("/dashboard") : navigate("/products");
  // }

  console.log("called times");
  // const num = count + 1;
  // setCount(num);
  return <></>;
};

export default AuthGuard;
