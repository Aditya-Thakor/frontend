import React, { useEffect, useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { UserOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getRolePermission } from "../../../utils/helper";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const { permission } = getRolePermission();

  const [sidebarMenu, setSidebarMenu] = useState<any>();

  const admin = [
    {
      key: "list-admin",
      label: "Admin",
      onClick: () => navigate("/admin"),
    },
    {
      key: "add-admin",
      label: "Add Admin",
      onClick: () => navigate("/admin/add-admin"),
    },
  ];

  const addPermission = [
    {
      key: "add-product",
      label: "Add Product",
      onClick: () => navigate("/products/add-product"),
    },
  ];

  const product = [
    {
      key: "list-product",
      label: "Products",
      onClick: () => navigate("/products"),
    },
  ];

  const sideMenu = [
    {
      key: `admin`,
      icon: React.createElement(UserOutlined),
      label: `Admin`,
      children: admin,
    },
    {
      key: `product`,
      icon: React.createElement(ShoppingOutlined),
      label: `Product`,
      children: permission.includes("add")
        ? [...product, ...addPermission]
        : product,
    },
  ];

  const navlist: MenuProps["items"] = new Array(4)
    .fill(null)
    .map((_, index) => {
      return sideMenu[index];
    });

  return (
    <Sider width={200} style={{ background: "red" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={navlist}
      />
    </Sider>
  );
};

export default Sidebar;
