import {
  GET_SERVICE_INFOS_PENDING,
  GET_SERVICE_INFOS_SUCCESS,
  GET_SERVICE_INFOS_ERROR
} from './actions'

const initialState = {
  pending: false,
  payload: [],
  error: null,
  totalResults: 0
}

export function serviceInfos(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICE_INFOS_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_SERVICE_INFOS_SUCCESS:
      return {
        // ...state,
        error: null,
        pending: false,
        payload: action.payload,
        totalResults: action.totalResults
      }
    case GET_SERVICE_INFOS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}