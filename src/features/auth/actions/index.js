import * as ActionTypes from './types'

export const loginAction = (username, password) => ({
    type: ActionTypes.AUTH_LOGIN,
    username,
    password,
});
export const logoutAction = () => ({
    type: ActionTypes.AUTH_LOGOUT,
});