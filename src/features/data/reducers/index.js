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
            };
        case ActionTypes.LOAD_DATA_DETAIL:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.LOAD_DATA_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case ActionTypes.LOAD_DATA_DETAIL_FAILED:
            return {
                ...state,
                data: null,
                error: action.error
            };
        case ActionTypes.CREATE_TUTOR:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.CREATE_TUTOR_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case ActionTypes.CREATE_TUTOR_FAILED:
            return {
                ...state,
                data: null,
                error: action.error
            };
        case ActionTypes.UPDATE_TUTOR:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.UPDATE_TUTOR_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case ActionTypes.UPDATE_TUTOR_FAILED:
            return {
                ...state,
                data: null,
                error: action.error
            };
        case ActionTypes.DELETE_TUTOR:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.DELETE_TUTOR_SUCCESS:
            var newData = [...state.data].filter(
                (e) => e.id !== action.data.id,
            );
            return {
                ...state,
                data: newData,
                loading: false,
            };
        case ActionTypes.DELETE_TUTOR_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}