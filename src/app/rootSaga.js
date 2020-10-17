import { all, fork } from "redux-saga/effects";
import loginSaga from "../features/auth/sagas";

export default function* rootSagas() {
  yield all([fork(loginSaga)]);
}
