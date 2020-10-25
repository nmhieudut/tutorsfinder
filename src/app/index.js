import React from "react";
import Layouts from "../layouts";
import Login from "../pages/login/Login";
import ProtectedRoute from "../guards/ProtectedRoute";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import "./App.less";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/home" component={Layouts} />
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
