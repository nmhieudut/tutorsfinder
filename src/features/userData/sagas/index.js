import * as ActionTypes from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

import UserServices from "../../../api/UsersServices";

function* getUser() {
  try {
    const response = yield UserServices.getUsers();
    yield put({
      type: ActionTypes.LOAD_DATA_SUCCESS,
      data: response[0].data,
    });
    // console.log("data saga:", response[0].data.data)
  } catch (error) {
    console.log("error", error);
    yield put({
      type: ActionTypes.LOAD_DATA_FAILED,
      error: error,
    });
  }
}
function* getDetailUser(action) {
  try {
    const response = yield UserServices.getDetailUser(action.id);
    yield put({
      type: ActionTypes.LOAD_DATA_DETAIL_SUCCESS,
      data: response[0].data,
    });
    console.log("res:", response[0].data);
  } catch (error) {
    console.log("error", error);
    yield put({
      type: ActionTypes.LOAD_DATA_DETAIL_FAILED,
      error: error,
    });
  }
}
function* createUser(action) {
  try {
    const response = yield UserServices.createUser(action.values);
    yield put({
      type: ActionTypes.CREATE_USER_SUCCESS,
      data: response.data,
    });
    console.log("data create:", response);
  } catch (error) {
    yield put({
      type: ActionTypes.CREATE_USER_FAILED,
      error: error,
    });
  }
}
function* updateUser(action) {
  try {
    const response = yield UserServices.updateUser(action.id, action.values);
    yield put({
      type: ActionTypes.UPDATE_USER_SUCCESS,
      data: response.data,
    });
    console.log("update", response);
  } catch (error) {
    yield put({
      type: ActionTypes.UPDATE_USER_FAILED,
      error: error,
    });
  }
}
function* deleteUser(action) {
  try {
    const response = yield UserServices.deleteUser(action.id);
    yield put({
      type: ActionTypes.DELETE_USER_SUCCESS,
      data: response.data,
    });
    console.log("delete", response);
  } catch (error) {
    yield put({
      type: ActionTypes.DELETE_USER_FAILED,
      error: error,
    });
  }
}

function* sagas() {
  yield takeLatest(ActionTypes.LOAD_DATA, getUser);
  yield takeLatest(ActionTypes.LOAD_DATA_DETAIL, getDetailUser);
  yield takeLatest(ActionTypes.CREATE_USER, createUser);
  yield takeLatest(ActionTypes.UPDATE_USER, updateUser);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUser);
}

export default sagas;
