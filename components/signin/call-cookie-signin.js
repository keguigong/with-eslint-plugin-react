import {
  signinCookieSuccess,
  signinCookieError,
  signinCookiePending
} from './actions'

const callCookieSignin = () => {
  return dispatch => {
    dispatch(signinCookiePending())
    let token
    if (process.browser) {
      // token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    }
    token ? dispatch(signinCookieSuccess(token)) : dispatch(signinCookieError('请登录'))
  }
}

export default callCookieSignin