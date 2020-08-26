
import * as ActionTypes from './types'

export const loadDataAction = () => ({
    type: ActionTypes.LOAD_DATA
})
export const loadDetailTutorAction = (id) => ({
    type: ActionTypes.LOAD_DATA_DETAIL,
    id
})
export const deleteTutorAction = (id) => ({
    type: ActionTypes.DELETE_TUTOR,
    id
})