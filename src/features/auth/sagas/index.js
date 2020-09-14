import * as ActionTypes from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

import auth from "../../../api/auth";

function* Login(action) {
  console.log("Action", action);
  try {
    const response = yield auth.login(action.username, action.password);
    yield put({
      type: ActionTypes.AUTH_LOGIN_SUCCESS,
      loggedInUser: response.data.authToken,
    });
    console.log("response: ", response.data.authToken);
    // console.log('Profile: ', profile);
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.AUTH_LOGIN_FAILED, error: error });
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, Login);
}

export default sagas;
