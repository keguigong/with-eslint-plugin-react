export const SIGNIN_PENDING = 'SIGNIN_PENDING'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

export const SIGNOUT = 'SIGNOUT'
export const SIGNIN_EXPIRED = 'SIGN_EXPIRED'

export const SIGNIN_AUTO_READ_LOCAL_TOKEN_PENDING = 'SIGNIN_AUTO_READ_LOCAL_TOKEN_PENDING'
export const SIGNIN_AUTO_READ_LOCAL_TOKEN_SUCCESS = 'SIGNIN_AUTO_READ_LOCAL_TOKEN_SUCCESS'
export const SIGNIN_AUTO_READ_LOCAL_TOKEN_ERROR = 'SIGNIN_AUTO_READ_LOCAL_TOKEN_ERROR'
export const SIGNIN_AUTO_GET_PROFILE_PENDING = 'SIGNIN_AUTO_GET_PROFILE_PENDING'
export const SIGNIN_AUTO_GET_PROFILE_SUCCESS = 'SIGNIN_AUTO_GET_PROFILE_SUCCESS'
export const SIGNIN_AUTO_GET_PROFILE_ERROR = 'SIGNIN_AUTO_GET_PROFILE_ERROR'

export const SIGNIN_COOKIE_PENDING = 'SIGNIN_COOKIE_PENDING'
export const SIGNIN_COOKIE_SUCCESS = 'SIGNIN_COOKIE_SUCCESS'
export const SIGNIN_COOKIE_ERROR = 'SIGNIN_COOKIE_ERROR'

// import { saveLocalState, loadLocalState } from './session-storage'

export const signinPending = () => ({
  type: SIGNIN_PENDING,
})

export const signinSuccess = (user, token, auth) => {
  localStorage.setItem('token', token)
  return {
    type: SIGNIN_SUCCESS,
    user: user,
    token: token,
    auth: auth,
  }
}

export const signinError = err => ({
  type: SIGNIN_ERROR,
  error: err
})

export const signout = () => {
  localStorage.clear()
  return {
    type: SIGNOUT
  }
}

export const signinExpired = err => {
  // localStorage.clear()
  return {
    type: SIGNIN_EXPIRED,
    error: err
  }
}

export const readLocalTokenPending = () => ({
  type: SIGNIN_AUTO_READ_LOCAL_TOKEN_PENDING
})

export const readLocalTokenSuccess = token => ({
  type: SIGNIN_AUTO_READ_LOCAL_TOKEN_SUCCESS
})

export const readLocalTokenError = err => ({
  type: SIGNIN_AUTO_READ_LOCAL_TOKEN_ERROR,
  error: err || '请登陆'
})

export const getProfilePending = () => ({
  type: SIGNIN_AUTO_GET_PROFILE_PENDING
})

export const getProfileSuccess = (user, token, auth) => {
  localStorage.setItem('token', token)
  return {
    type: SIGNIN_AUTO_GET_PROFILE_SUCCESS,
    user: user,
    token: token,
    auth: auth,
  }
}

export const getProfileError = err => ({
  type: SIGNIN_AUTO_GET_PROFILE_ERROR,
  error: err || '登陆过期，请重新登陆'
})

// export const signinCookiePending = () => ({
//   type: SIGNIN_COOKIE_PENDING
// })

// export const signinCookieSuccess = (token) => {
//   let auth = loadLocalState('auth')
//   let username = loadLocalState('username')
//   return {
//     type: SIGNIN_COOKIE_SUCCESS,
//     token: token,
//     auth: auth,
//     user: username
//   }
// }

// export const signinCookieError = (err) => {
//   return {
//     type: SIGNIN_COOKIE_ERROR,
//     error: err,
//     isCookie: true,
//   }
// }