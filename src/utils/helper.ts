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

export const dateFormatter = (date: Date | string): string => {
  const dateObj = new Date(date);
  let getdate: number | string = dateObj.getDate();
  let month: number | string = dateObj.getMonth();
  const year = dateObj.getFullYear();

  if (getdate < 10) getdate = "0" + getdate;
  if (month < 10) month = "0" + month;

  return getdate + "/" + month + "/" + year;
};

export const getRolePermission = () => {
  const { rolestate } = store.getState();

  return rolestate;
};
