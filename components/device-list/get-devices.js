import fetch from 'isomorphic-unfetch'
import {
  getDevicesPending,
  getDevicesSuccess,
  getDevicesError,
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const getDevices = (deviceType = 'PowerSwap', pageNo = 1, pageSize = 15) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const { token } = getState().signin
    let url = `${process.env.SERVER_URL}/deviceList?device_type=${deviceType}&page_no=${pageNo}&page_size=${pageSize}`

    dispatchIfValid(getDevicesPending())
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
          dispatchIfValid(getDevicesSuccess(res.data.device_basice_info_dtos.map(item => ({
            deviceType: item.resource_type,
            deviceId: item.resource_id,
            deviceName: item.description,
            networkState: item.is_connected ? 0 : 1,
            alarmState: item.fault_state * 1,
            workState: item.work_state * 1
          })), res.data.total_results))
          return
        } else if (res.code === 402) {
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid(getDevicesError(res.message))
        }
      })
      .catch(error => {
        dispatchIfValid(getDevicesError(error.message))
      })
  }
}

export default getDevices