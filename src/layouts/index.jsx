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
  Redirect,
} from "react-router-dom";
import UsersList from "../pages/users/UsersManagement/UsersList";
import UsersUpdate from "../pages/users/UsersManagement/UsersUpdate";
import Dashboard from "../pages/dashboard";

const { Header, Footer, Content, Sider } = Layout;

export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();
  console.log("match:", { match });
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
          <Header
            style={{ padding: 0, width: "100%", backgroundColor: "white" }}
          >
            <HeaderNav />
          </Header>
          <Layout>
            <Sider
              className="sider-layout"
              breakpoint="lg"
              collapsible
              collapsed={collapsed}
              onCollapse={onCollapse}
              theme="light"
            >
              <SideBar />
            </Sider>
            <Content>
              <div className="site-layout-content">
                <Switch>
                  <Route
                    exact
                    path={`${match.url}/dashboard`}
                    component={Dashboard}
                  />
                  <Route
                    exact
                    path={`${match.url}/users`}
                    component={UsersList}
                  />
                  <Route
                    exact
                    path={`${match.url}/users/:id/edit`}
                    component={UsersUpdate}
                  />
                </Switch>
                <BackTop>
                  <div className="back-top-button">
                    <VerticalAlignTopOutlined />
                  </div>
                </BackTop>
              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            Hieu US/UK ©2020 Created by Hieu Hoa Hong
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}
