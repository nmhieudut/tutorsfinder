import React, { useState, useEffect } from "react";
import "./index.css";
import { Layout } from "antd";
import SideBar from "../components/SideBar/SideBar";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import RouterPage from "../routers";

const { Header, Footer, Content, Sider } = Layout;

function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();
  useEffect(() => {
    document.title = "Home";
  }, []);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <div>
      <Router>
        <Layout>
          <Sider
            className="sider-layout"
            breakpoint="lg"
            theme="dark"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              overflowY: "hidden",
            }}
          >
            <SideBar />
          </Sider>
          <Layout
            style={{
              marginLeft: !collapsed ? 200 : 80,
              transition: "margin-left 0.2s",
            }}
          >
            <Header
              style={{
                padding: 0,
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <HeaderNav />
            </Header>
            <Content>
              <div className="site-layout-content">
                <RouterPage match={match} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Created by Hieu Hoa Hong
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}
export default React.memo(Layouts);
