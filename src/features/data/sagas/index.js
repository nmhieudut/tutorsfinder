import * as ActionTypes from '../actions/types'
import { put, takeLatest } from 'redux-saga/effects';

import TutorServices from '../../../services/TutorServices'

function* getTutor(action) {
    try {
        const response = yield TutorServices.getTutors();
        yield put({
            type: ActionTypes.LOAD_DATA_SUCCESS,
            data: response[0].data
        })
    } catch (error) {
        console.log("error", error);
        yield put({
            type: ActionTypes.LOAD_DATA_FAILED,
            error: error
        })
    }
}

function* sagas() {
    yield takeLatest(ActionTypes.LOAD_DATA, getTutor);
}

export default sagas;