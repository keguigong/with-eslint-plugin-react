import fetch from 'isomorphic-unfetch'
import {
  signinPending,
  signinSuccess,
  signinError
} from './actions'
import { transformAuthKeys } from '.'

let nextSeqId = 0

const callSignin = (username, password) => {
  return dispatch => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    dispatchIfValid(signinPending())
    let url = `${process.env.SERVER_URL}/login`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        username,
        pwd: password
      })
    }).then(res => {
      if (!res.ok)
        throw res
      return res.json()
    }).then(res => {
      if (res.code === 200) {
        dispatchIfValid(signinSuccess(res.data.username, res.token, transformAuthKeys(res.data.auth) ))
      } else {
        dispatchIfValid(signinError(res.message))
      }
    }).catch(error => dispatchIfValid(signinError(error.message)))
  }
}

export default callSignin