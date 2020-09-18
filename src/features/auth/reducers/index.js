import * as ActionTypes from "../actions/types";

const defaultState = {
  loading: false,
  loggedInUser: null,
  message:null,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
        message:null,
        error: null,
      };
    case ActionTypes.AUTH_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        message:action.message,
        error: action.error,
      };
    case ActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        loggedInUser: null,
        error: null,
      };
    default:
      return state;
  }
}
