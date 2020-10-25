import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const [isAccess] = React.useState(localStorage.getItem("token"));
  return (
    <Route
      {...rest}
      render={(props) =>
        isAccess ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
