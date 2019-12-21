import {
  readLocalTokenPending,
  readLocalTokenSuccess,
  readLocalTokenError
} from './actions'
import getProfile from './get-profile'

const isClient = process.browser

const autoSignin = () => {
  return async dispatch => {
    dispatch(readLocalTokenPending())
    let token = ''
    if (isClient) {
      token = localStorage.getItem('token') || ''
    }
    if (token && typeof token !== undefined && token !== 'undefined' ) {
      dispatch(readLocalTokenSuccess())
      await dispatch(getProfile(token))
    } else {
      dispatch(readLocalTokenError())
    }
  }
}

export default autoSignin