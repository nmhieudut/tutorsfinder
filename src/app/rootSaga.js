import { all, fork } from 'redux-saga/effects'
import tutorsSaga from '../features/data/sagas'

export default function* rootSagas() {
    yield all([fork(tutorsSaga)]);
}