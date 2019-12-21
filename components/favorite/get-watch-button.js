import fetch from 'isomorphic-unfetch'
import {
  GET_WATCH_BUTTON_STATE_PENDING,
  GET_WATCH_BUTTON_STATE_SUCCESS,
  GET_WATCH_BUTTON_STATE_ERROR
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const thunkRequest = (operation = 'seek', deviceType, deviceId) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const { user, token } = getState().signin
    let url = `${process.env.SERVER_URL}/watch?operation=${operation}&deviceType=${deviceType}&deviceId=${deviceId}&username=${user}`

    dispatchIfValid({ type: GET_WATCH_BUTTON_STATE_PENDING })
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
        if (res.code === 200) {
          dispatchIfValid({
            type: GET_WATCH_BUTTON_STATE_SUCCESS,
            payload: res.data.map(item => ({
              deviceType: item.resource_type,
              deviceId: item.resource_id,
              deviceName: item.description,
              networkState: item.is_connected ? 0 : 1,
              alarmState: item.fault_state * 1,
              workState: item.work_state * 1
            }))
          })
          return
        } else if (res.code === 402) {
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid({type: GET_WATCH_BUTTON_STATE_ERROR, error: res.message})
        }
      })
      .catch(error => {
        dispatchIfValid({type: GET_WATCH_BUTTON_STATE_ERROR, error: error.message})
      })
  }
}

export default thunkRequest