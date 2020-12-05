import React, { useState, useEffect } from "react";
import "./index.css";
import { Layout, BackTop } from "antd";
import SideBar from "../components/SideBar/SideBar";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import RouterPage from "../routers";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

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
            theme="light"
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
                position: "fixed",
                zIndex: 999,
              }}
            >
              <HeaderNav />
            </Header>
            <Content style={{ marginTop: "64px" }}>
              <div className="site-layout-content">
                <RouterPage match={match} />
              </div>
              <BackTop visibilityHeight="200">
                <div className="back-top-button">
                  <VerticalAlignTopOutlined />
                </div>
              </BackTop>
            </Content>
            <Footer>Created by Hieu Hoa Hong</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}
export default React.memo(Layouts);
