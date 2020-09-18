import * as ActionTypes from "./types";

export const loadDataAction = () => ({
  type: ActionTypes.LOAD_DATA,
});
export const loadDetailUserAction = (id) => ({
  type: ActionTypes.LOAD_DATA_DETAIL,
  id,
});

export const createUserAction = (values) => ({
  type: ActionTypes.CREATE_USER,
  values,
});
export const updateUserAction = (id, values) => ({
  type: ActionTypes.UPDATE_USER,
  id,
  values,
});

export const deleteUserAction = (id) => ({
  type: ActionTypes.DELETE_USER,
  id,
});
