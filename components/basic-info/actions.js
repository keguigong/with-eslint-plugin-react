export const GET_BASIC_INFO_PENDING = 'GET_BASIC_INFO_PENDING'
export const GET_BASIC_INFO_SUCCESS = 'GET_BASIC_INFO_SUCCESS'
export const GET_BASIC_INFO_ERROR = 'GET_BASIC_INFO_ERROR'

export const getBasicInfoPending = () => ({
  type: GET_BASIC_INFO_PENDING
})

export const getBasicInfoSuccess = (payload = {}) => ({
  type: GET_BASIC_INFO_SUCCESS,
  payload: payload
})

export const getBasicInfoError = () => ({
  type: GET_BASIC_INFO_ERROR
})