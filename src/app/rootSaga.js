import { all, fork } from "redux-saga/effects";
import usersSaga from "../features/userData/sagas";
import loginSaga from '../features/auth/sagas'

export default function* rootSagas() {
  yield all([fork(usersSaga)]);
  yield all([fork(loginSaga)]);
}
