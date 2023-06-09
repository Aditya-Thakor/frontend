import { Layout } from "antd";
import { HeaderComponent as Header } from "./header/HeaderComponent";
import Sidebar from "./sidebar/Sidebar";
import { Content } from "antd/es/layout/layout";

const MainDashBoard = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainDashBoard;
