import * as ActionTypes from "../actions/types";

const defaultState = {
  loading: false,
  loggedInUser: null,
  isAuth:false,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        loading: true,
        loggedInUser: null,
          isAuth:false,
        error: null,
      };
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        loggedInUser: action.loggedInUser,
        isAuth:true,
        error: null,
      };
    case ActionTypes.AUTH_LOGIN_FAILED:
      return {
        loading: false,
        loggedInUser: null,
        isAuth:false,
        error: action.error,
      };
    case ActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        loggedInUser: null,
        isAuth:false,
        error: null,
      };
    default:
      return state;
  }
}
