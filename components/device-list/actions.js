export const GET_DEVICES_PENDING = 'GET_DEVICES_PENDING'
export const GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS'
export const GET_DEVICES_ERROR = 'GET_DEVICES_ERROR'

export const getDevicesPending = () => ({
  type: GET_DEVICES_PENDING
})

export const getDevicesSuccess = (payload = [], totalResults = 0) => ({
  type: GET_DEVICES_SUCCESS,
  payload: payload,
  totalResults
})

export const getDevicesError = () => ({
  type: GET_DEVICES_ERROR
})