import {searchModalAppear} from './actions'

const modalVisible = (deviceType, deviceId, searchType, column, slotId, waterCoolingId, electricMeterId, chargeConnector, serviceId, startTime, endTime) =>{
  return async dispatch =>{
    dispatch(searchModalAppear(deviceType, deviceId, searchType, column, slotId, waterCoolingId, electricMeterId, chargeConnector, serviceId, startTime, endTime))
  }
}

export default modalVisible