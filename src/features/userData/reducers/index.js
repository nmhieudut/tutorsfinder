import * as ActionTypes from "../actions/types";

const defaultState = {
  data: [],
  loading: false,
  createLoading: false,
  deleteLoading: false,
  updateLoading: false,
  success: null,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null,
      };
    case ActionTypes.LOAD_DATA_FAILED:
      return {
        ...state,
        data: null,
        success: null,
        error: "LOAD",
      };
    case ActionTypes.LOAD_DATA_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOAD_DATA_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null,
        success: "LOAD_DETAIL",
      };
    case ActionTypes.LOAD_DATA_DETAIL_FAILED:
      return {
        ...state,
        data: null,
        success: null,
        error: "LOAD_DETAIL",
      };
    case ActionTypes.CREATE_USER:
      return {
        ...state,
        success: null,
        error: null,
        createLoading: true,
      };
    case ActionTypes.CREATE_USER_SUCCESS:
      var newCreatedData = [...state.data];
      newCreatedData.push(action.data);
      return {
        ...state,
        data: newCreatedData,
        success: "CREATE",
        error: null,
        createLoading: false,
      };
    case ActionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        data: [...state.data],
        success: null,
        error: "CREATE",
        createLoading: false,
      };
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        success: null,
        error: null,
        updateLoading: true,
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: action.data,
        success: "UPDATE",
        updateLoading: false,
        error: null,
      };
    case ActionTypes.UPDATE_USER_FAILED:
      return {
        ...state,
        data: null,
        updateLoading: false,
        success: null,
        error: "UPDATE",
      };
    case ActionTypes.DELETE_USER:
      return {
        ...state,
        success: null,
        error: null,
        deleteLoading: true,
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      var newData = [...state.data].filter((e) => e.id !== action.data);
      return {
        ...state,
        data: newData,
        success: "DELETE",
        error: null,
        deleteLoading: false,
      };
    case ActionTypes.DELETE_USER_FAILED:
      return {
        ...state,
        error: "DELETE",
        success: null,
        deleteLoading: false,
      };
    default:
      return state;
  }
}
