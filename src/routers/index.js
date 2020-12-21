import React, { Suspense } from "react";
import routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";

function RouterPage(props) {
  const match = props.match;
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Redirect exact from="/home" to={`${match.url}/users`} />
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
      </Suspense>
    </>
  );
}
export default React.memo(RouterPage);
