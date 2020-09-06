import { all, fork } from "redux-saga/effects";
import tutorsSaga from "../features/tutorsData/sagas";

export default function* rootSagas() {
  yield all([fork(tutorsSaga)]);
}
