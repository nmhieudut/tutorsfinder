import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.authReducers.isAuth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth  ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
