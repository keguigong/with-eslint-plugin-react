import {
  GET_BASIC_INFO_PENDING,
  GET_BASIC_INFO_SUCCESS,
  GET_BASIC_INFO_ERROR
} from './actions'

const initialState = {
  pending: false,
  payload: {},
  error: null
}

export function basicInfo(state = initialState, action) {
  switch (action.type) {
    case GET_BASIC_INFO_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_BASIC_INFO_SUCCESS:
      return {
        // ...state,
        error: null,
        pending: false,
        payload: action.payload
      }
    case GET_BASIC_INFO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}