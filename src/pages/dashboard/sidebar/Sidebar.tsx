import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const subnav = [
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

  const navlist: MenuProps["items"] = [UserOutlined].map((icon, index) => {
    return {
      key: `admin`,
      icon: React.createElement(icon),
      label: `Admin`,
      children: subnav,
    };
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
