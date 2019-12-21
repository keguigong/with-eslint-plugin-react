import fetch from 'isomorphic-unfetch'
import {
  getAlarmsPending,
  getAlarmsSuccess,
  getAlarmsError,
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const getAlarms = (deviceId, pageNo = 0, pageSize = 10) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const { token } = getState().signin
    let url = `${process.env.SERVER_URL}/alarms?device_id=${deviceId}&page_no=${pageNo}&page_size=${pageSize}`
    
    dispatchIfValid(getAlarmsPending())
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
          dispatchIfValid(getAlarmsSuccess(res.data.alarm_info_dto_list.map(item => ({
            deviceId: item.device_id,
            alarmTypeId: item.alarm_type_id,
            alarmSubSystem: item.alarm_sub_system,
            alarmSubDevice: item.alarm_sub_device,
            alarmDescription: item.alarm_description,
            alarmLevel: item.alarm_level * 1,
            alarmRaiseTime: item.alarm_raise_time,
            alarmClearTime: item.alarm_clear_time,
            alarmState: item.alarm_state * 1
          })), res.data.total_results))
          return
        } else if (res.code === 402) {
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid(getAlarmsError(res.message))
        }
      })
      .catch(error => {
        dispatchIfValid(getAlarmsError(error.message))
      })
  }
}

export default getAlarms