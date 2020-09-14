import React, { useState, useEffect } from "react";
import "./index.css";
import { Layout, BackTop } from "antd";
import SideBar from "../components/SideBar";
import HeaderNav from "../components/HeaderNav";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import TutorsList from "../pages/users/TutorsManagement/TutorsList";
import TutorsUpdate from "../pages/users/TutorsManagement/TutorsUpdate";
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
                    path={`${match.url}/tutors`}
                    component={TutorsList}
                  />
                  <Route
                    exact
                    path={`${match.url}/tutors/:id/edit`}
                    component={TutorsUpdate}
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
