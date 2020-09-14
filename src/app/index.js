import React from "react";
import Layouts from "../layouts";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
//Reducers
import tutorsReducer from "../features/tutorsData/reducers";
import authReducers from "../features/auth/reducers"
//Saga
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "./App.less";
// Root Saga
import rootSagas from "./rootSaga";
//root reducer
const rootReducer = combineReducers({
  tutorsReducer,
  authReducers
});

// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // SAGA
  sagaMiddleware,
];
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Saga (run)
sagaMiddleware.run(rootSagas);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login}/>
            <ProtectedRoute path="/home" component={Layouts} />
            <Route path="*" component={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
