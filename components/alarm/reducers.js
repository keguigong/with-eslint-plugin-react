import {
  GET_ALARMS_PENDING,
  GET_ALARMS_SUCCESS,
  GET_ALARMS_ERROR
} from './actions'

const initialState = {
  pending: false,
  payload: [],
  error: null,
  totalResults: 0
}

export function alarms(state = initialState, action) {
  switch (action.type) {
    case GET_ALARMS_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_ALARMS_SUCCESS:
      return {
        // ...state,
        error: null,
        pending: false,
        payload: action.payload,
        totalResults: action.totalResults
      }
    case GET_ALARMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}