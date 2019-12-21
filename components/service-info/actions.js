export const GET_SERVICE_INFOS_PENDING = 'GET_SERVICE_INFOS_PENDING'
export const GET_SERVICE_INFOS_SUCCESS = 'GET_SERVICE_INFOS_SUCCESS'
export const GET_SERVICE_INFOS_ERROR = 'GET_SERVICE_INFOS_ERROR'

export const getServiceInfosPending = () => ({
  type: GET_SERVICE_INFOS_PENDING
})

export const getServiceInfosSuccess = (payload = [], totalResults) => ({
  type: GET_SERVICE_INFOS_SUCCESS,
  payload: payload,
  totalResults
})

export const getServiceInfosError = () => ({
  type: GET_SERVICE_INFOS_ERROR
})