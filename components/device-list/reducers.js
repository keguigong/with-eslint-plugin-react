import {
  GET_DEVICES_PENDING,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_ERROR
} from './actions'

const initialState = {
  pending: false,
  payload: [],
  totalResults: 0,
  error: null
}

export function devices(state = initialState, action) {
  switch (action.type) {
    case GET_DEVICES_PENDING:
      return {
        ...state,
        pending: true,
      }
    case GET_DEVICES_SUCCESS:
      return {
        // ...state,
        error: null,
        pending: false,
        payload: action.payload,
        totalResults: action.totalResults
      }
    case GET_DEVICES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}