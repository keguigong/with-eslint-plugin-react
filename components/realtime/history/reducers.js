import {
  SEARCH_MODAL_APPEAR,
  SEARCH_MODAL_DISAPPEAR
} from './actions'

const initialState = {
  isModalVisible:false,
  deviceType:null,
  deviceId:null,
  searchType:null,
  column:null,
  slotId:null,
  waterCoolingId:null,
  electricMeterId:null,
  chargeConnector:null,
  serviceId:null,
  startTime:null,
  endTime:null,
}

export function history(state=initialState,action) {
  switch (action.type) {
    case SEARCH_MODAL_APPEAR:
      return {
        isModalVisible: true,
        deviceType:action.deviceType,
        deviceId:action.deviceId,
        searchType:action.searchType,
        column:action.column,
        slotId:action.slotId,
        waterCoolingId:action.waterCoolingId,
        electricMeterId:action.electricMeterId,
        chargeConnector:action.chargeConnector,
        serviceId:action.serviceId,
        startTime:action.startTime,
        endTime:action.endTime,
      }
    case SEARCH_MODAL_DISAPPEAR:
      return{
        isModalVisible:false,
      }
    default:
      return state
  }
}