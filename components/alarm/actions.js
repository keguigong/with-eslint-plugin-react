export const GET_ALARMS_PENDING = 'GET_ALARMS_PENDING'
export const GET_ALARMS_SUCCESS = 'GET_ALARMS_SUCCESS'
export const GET_ALARMS_ERROR = 'GET_ALARMS_ERROR'

export const getAlarmsPending = () => ({
  type: GET_ALARMS_PENDING
})

export const getAlarmsSuccess = (payload = [], totalResults) => ({
  type: GET_ALARMS_SUCCESS,
  payload: payload,
  totalResults
})

export const getAlarmsError = () => ({
  type: GET_ALARMS_ERROR
})