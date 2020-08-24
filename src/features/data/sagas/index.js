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
        // console.log("data saga:", response[0].data.data)
    } catch (error) {
        console.log("error", error);
        yield put({
            type: ActionTypes.LOAD_DATA_FAILED,
            error: error
        })
    }
}
function* deleteTutor(action) {
    //console.log("Action: ", action)
    try {
        const response = yield TutorServices.deleteTutor(action.id);
        //console.log("res", response)
        yield put({
            type: ActionTypes.DELETE_TUTOR_SUCCESS,
            data: response.data
        })
        // console.log("data saga:", response.data)
    } catch (error) {
        yield put({
            type: ActionTypes.DELETE_TUTOR_FAILED,
            error: error
        })
    }
}

function* sagas() {
    yield takeLatest(ActionTypes.LOAD_DATA, getTutor);
    yield takeLatest(ActionTypes.DELETE_TUTOR, deleteTutor);
}

export default sagas;