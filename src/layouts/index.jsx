import React, { useState, useEffect, Suspense } from "react";
import "./index.css";
import { Layout, BackTop } from "antd";
import SideBar from "../components/SideBar/SideBar";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import routers from "../routers";
const { Header, Footer, Content, Sider } = Layout;

function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();
  console.log("match", match);

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
                <Suspense fallback={<div>Loading....</div>}>
                  <Switch>
                    <Redirect
                      exact
                      from="/home"
                      to={`${match.url}/dashboard`}
                    />
                    {routers.map((route, index) => {
                      const component = React.lazy(() =>
                        import(`../pages/${route.component}`)
                      );
                      return (
                        <Route
                          key={index}
                          exact={route.exact}
                          path={`${match.url}/${route.path}`}
                          component={component}
                        />
                      );
                    })}
                  </Switch>

                  <BackTop>
                    <div className="back-top-button">
                      <VerticalAlignTopOutlined />
                    </div>
                  </BackTop>
                </Suspense>
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
