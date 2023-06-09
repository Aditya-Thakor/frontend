import { Layout, Menu, MenuProps } from "antd";

const { Header } = Layout;

const items1: MenuProps["items"] = ["Welcome"].map((key) => ({
  key,
  label: key,
}));

const HeaderComponent = () => {
  return (
    <Header>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={["Welcome"]}
        defaultSelectedKeys={["Dashboard"]}
        items={items1}
      />
    </Header>
  );
};

export { HeaderComponent };
