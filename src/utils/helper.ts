import { store } from "../redux/store";

export const getTokenDetails = () => {
  const { authToken } = store.getState();
  return authToken;
};

export const setRedirect = (navigate: any, location: any) => {
  const { role } = getTokenDetails();
  const path = location.pathname.includes("/register");

  if (role === "") {
    path ? navigate("/register") : navigate("/login");
  } else if (role.length > 0) {
    role === "admin" ? navigate("/dashboard") : navigate("/products");
  }
};
