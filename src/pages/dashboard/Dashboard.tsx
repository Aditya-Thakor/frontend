import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { setRedirect } from "../../utils/helper";

const Dashboard = () => {
  const isToken = useSelector((state: any) => state.authToken);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setRedirect(navigate, location);
  }, []);

  return (
    <>
      <div className="navbar">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/">Users</NavLink>
        <NavLink to="/register">Register as User</NavLink>
      </div>
      <div>
        <h4>Welcome to Dashboard</h4>
      </div>
    </>
  );
};

export default Dashboard;
