import * as ActionTypes from '../actions/types'

const defaultState = {
    data: [],
    loading: false,
    error: null,
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_DATA:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case ActionTypes.LOAD_DATA_FAILED:
            return {
                ...state,
                data: null,
                error: action.error
            }
        default:
            return state
    }
}