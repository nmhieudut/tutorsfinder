import { all, fork } from "redux-saga/effects";
import tutorsSaga from "../features/tutorsData/sagas";
import loginSaga from '../features/auth/sagas'

export default function* rootSagas() {
  yield all([fork(tutorsSaga)]);
  yield all([fork(loginSaga)]);
}
