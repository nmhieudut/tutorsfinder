import React, { Suspense } from "react";
import routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { BackTop } from "antd";

function RouterPage(props) {
  const match = props.match;
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Redirect exact from="/home" to={`${match.url}/dashboard`} />
          {routes.map((route, index) => {
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
    </>
  );
}
export default React.memo(RouterPage);
