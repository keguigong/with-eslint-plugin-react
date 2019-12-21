import {
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
  SIGNIN_EXPIRED,
  SIGNIN_AUTO_READ_LOCAL_TOKEN_PENDING,
  SIGNIN_AUTO_READ_LOCAL_TOKEN_SUCCESS,
  SIGNIN_AUTO_READ_LOCAL_TOKEN_ERROR,
  SIGNIN_AUTO_GET_PROFILE_PENDING,
  SIGNIN_AUTO_GET_PROFILE_SUCCESS,
  SIGNIN_AUTO_GET_PROFILE_ERROR,
} from './actions'

const initialState = {
  pending: false,
  autoPending: true,
  error: null,
  isSignin: false,
  user: null,
  token: null,
  auth: [],
}

export function signin(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        isSignin: true,
        user: action.user,
        token: action.token,
        auth: action.auth,
      }
    case SIGNIN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
        isSignin: false,
        user: null,
        token: null,
        auth: [],
      }
    case SIGNOUT:
      return {
        ...state,
        isSignin: false,
        autoPending: false,
        user: null,
        token: null,
        auth: [],
      }
    case SIGNIN_EXPIRED:
      return {
        ...state,
        isSignin: false,
        error: action.error,
        autoPending: false,
        user: null,
        token: null,
        auth: [],
      }
    case SIGNIN_AUTO_READ_LOCAL_TOKEN_PENDING:
      return {
        ...state,
        autoPending: true
      }
    case SIGNIN_AUTO_READ_LOCAL_TOKEN_SUCCESS:
      return state
    case SIGNIN_AUTO_READ_LOCAL_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
        autoPending: false
      }
    case SIGNIN_AUTO_GET_PROFILE_PENDING:
      return {
        ...state,
        autoPending: true
      }
    case SIGNIN_AUTO_GET_PROFILE_SUCCESS:
      return {
        ...state,
        autoPending: false,
        error: null,
        isSignin: true,
        user: action.user,
        token: action.token,
        auth: action.auth,
      }
    case SIGNIN_AUTO_GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        autoPending: false
      }
    default:
      return state
  }
}