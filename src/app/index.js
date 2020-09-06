import React from "react";
import Layouts from "../layouts";
import { createStore, combineReducers, applyMiddleware } from "redux";
//Reducers
import tutorsReducer from "../features/tutorsData/reducers";
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
        <Layouts />
      </div>
    </Provider>
  );
}

export default App;
