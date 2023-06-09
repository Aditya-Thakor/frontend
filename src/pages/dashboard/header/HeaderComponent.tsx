import { Layout, Menu, MenuProps } from "antd";

const { Header } = Layout;

const items1: MenuProps["items"] = [
  "Home",
  "Products",
  "Category",
  "Users",
].map((key) => ({
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
        defaultSelectedKeys={["Home"]}
        items={items1}
      />
    </Header>
  );
};

export { HeaderComponent };
