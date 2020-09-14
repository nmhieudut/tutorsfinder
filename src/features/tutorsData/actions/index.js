import * as ActionTypes from "./types";

export const loadDataAction = () => ({
  type: ActionTypes.LOAD_DATA,
});
export const loadDetailTutorAction = (id) => ({
  type: ActionTypes.LOAD_DATA_DETAIL,
  id,
});

export const createTutorAction = (values) => ({
  type: ActionTypes.CREATE_TUTOR,
  values,
});
export const updateTutorAction = (id, values) => ({
  type: ActionTypes.UPDATE_TUTOR,
  id,
  values,
});

export const deleteTutorAction = (id) => ({
  type: ActionTypes.DELETE_TUTOR,
  id,
});
