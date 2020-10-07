import React, { useState, useEffect } from "react";
import "./index.css";
import { Layout, BackTop } from "antd";
import SideBar from "../components/SideBar/SideBar";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Users from "../pages/users/UsersManagement/Users";
import UsersUpdate from "../pages/users/UsersManagement/UsersUpdate";
import Subjects from "../pages/subjects/Subjects";
import Dashboard from "../pages/dashboard";

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
            reverseArrow
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
              style={{ padding: 0, width: "100%", backgroundColor: "white" }}
            >
              <HeaderNav />
            </Header>
            <Content>
              <div className="site-layout-content">
                <Switch>
                  <Route
                    exact
                    path={`${match.url}/dashboard`}
                    component={Dashboard}
                  />
                  <Route exact path={`${match.url}/users`} component={Users} />
                  <Route
                    exact
                    path={`${match.url}/users/:id/edit`}
                    component={UsersUpdate}
                  />
                  <Route
                    exact
                    path={`${match.url}/subjects`}
                    component={Subjects}
                  />
                </Switch>
                <BackTop>
                  <div className="back-top-button">
                    <VerticalAlignTopOutlined />
                  </div>
                </BackTop>
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
