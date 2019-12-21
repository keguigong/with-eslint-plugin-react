import fetch from 'isomorphic-unfetch'
import {
  getProfilePending,
  getProfileSuccess,
  getProfileError,
  signinExpired
} from './actions'
import { transformAuthKeys } from '.'

const getProfile = (token) => {
  return dispatch => {
    dispatch(getProfilePending())
    let url = `${process.env.SERVER_URL}/profile`
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Token': token
      }
    }).then(res => {
      if (!res.ok)
        throw res
      return res.json()
    }).then(res => {
      if (res.code === 200) {
        dispatch(getProfileSuccess(res.data.username, res.token, transformAuthKeys(res.data.auth)))
      } else if (res.code === 402) {
        dispatch(signinExpired(res.message))
      } else {
        dispatch(getProfileError(res.message))
      }
    }).catch(error => {
      dispatch(getProfileError(error.message))
    })
  }
}

export default getProfile