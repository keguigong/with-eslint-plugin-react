import fetch from 'isomorphic-unfetch'
import {
  getFavPending,
  getFavSuccess,
  getFavError,
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const thunkRequest = (suffix = 'favorite', operation = 'seek', deviceType, deviceId) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const { user, token } = getState().signin
    let deviceOperation = (deviceType && deviceId) ? `&deviceType=${deviceType}&deviceId=${deviceId}` : ''
    let url = `${process.env.SERVER_URL}/${suffix}?operation=${operation}${deviceOperation}&username=${user}`
    
    dispatchIfValid(getFavPending())
    fetch(url, {
      headers: {
        Token: token
      }
    })
      .then(res => {
        if (!res.ok)
          throw res
        return res.json()
      })
      .then(res => {
        if (res.code === 200 ) {
          dispatchIfValid(getFavSuccess(res.data.map(item => ({
            deviceType: item.resource_type,
            deviceId: item.resource_id,
            deviceName: item.description,
            networkState: item.is_connected ? 0 : 1,
            alarmState: item.fault_state * 1,
            workState: item.work_state * 1
          }))))
          return
        } else if (res.code === 402) {
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid(getFavError(res.message))
        }
      })
      .catch(error => {
        dispatchIfValid(getFavError(error.message))
      })
  }
}

export default thunkRequest