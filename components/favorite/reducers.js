import {
  GET_FAVORITE_SEEK_PENDING,
  GET_FAVORITE_SEEK_SUCCESS,
  GET_FAVORITE_SEEK_ERROR,
  GET_FAVORITE_BUTTON_STATE_PENDING,
  GET_FAVORITE_BUTTON_STATE_SUCCESS,
  GET_FAVORITE_BUTTON_STATE_ERROR,
  GET_WATCH_BUTTON_STATE_PENDING,
  GET_WATCH_BUTTON_STATE_SUCCESS,
  GET_WATCH_BUTTON_STATE_ERROR,
} from './actions'

const initialState = {
  pending: false,
  payload: [],
  error: null
}

export function favorite(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_SEEK_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_FAVORITE_SEEK_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        payload: action.payload
      }
    case GET_FAVORITE_SEEK_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

export function favoriteButton(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_BUTTON_STATE_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_FAVORITE_BUTTON_STATE_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        payload: action.payload
      }
    case GET_FAVORITE_BUTTON_STATE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

export function watchButton(state = initialState, action) {
  switch (action.type) {
    case GET_WATCH_BUTTON_STATE_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_WATCH_BUTTON_STATE_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        payload: action.payload
      }
    case GET_WATCH_BUTTON_STATE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}