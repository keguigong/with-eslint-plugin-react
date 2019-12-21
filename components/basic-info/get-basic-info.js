import fetch from 'isomorphic-unfetch'
import {
  getBasicInfoPending,
  getBasicInfoSuccess,
  getBasicInfoError,
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const getBasicInfo = (deviceId) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const { token } = getState().signin
    let url = `${process.env.SERVER_URL}/deviceBasicInfo?device_id=${deviceId}`
    
    dispatchIfValid(getBasicInfoPending())
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
        if (res.code === 200 || true ) {
          const item = res.data
          dispatchIfValid(getBasicInfoSuccess({
            deviceType: item.resource_type,
            deviceId: item.resource_id,
            deviceName: item.description,
            networkState: item.connected ? 0 : 1,
            alarmState: item.fault_state * 1,
            workState: item.work_state * 1,
            address: item.address,
            softwareVersion: item.software_version,
            hardwareVersion: item.hardware_version,
            firmwareVersion: item.firmware_version,
            registrationCode: item.registration_code,
            ipAddress: item.ip_address,
            region: item.region
          }))
          return
        } else if (res.code === 402) {
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid(getBasicInfoError(res.message))
        }
      })
      .catch(error => {
        dispatchIfValid(getBasicInfoError(error.message))
      })
  }
}

export default getBasicInfo