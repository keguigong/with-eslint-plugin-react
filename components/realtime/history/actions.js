export const SEARCH_MODAL_APPEAR = 'SEARCH_MODAL_APPEAR'
export const SEARCH_MODAL_DISAPPEAR = 'SEARCH_MODAL_DISAPPEAR'


export const searchModalAppear = (deviceType,deviceId,searchType,column,slotId,waterCoolingId,electricMeterId,chargeConnector,serviceId,startTime,endTime) => {
  return{
    type:SEARCH_MODAL_APPEAR,
    deviceType:deviceType,
    deviceId:deviceId,
    searchType:searchType,
    column:column,
    slotId:slotId,
    waterCoolingId:waterCoolingId,
    electricMeterId:electricMeterId,
    chargeConnector:chargeConnector,
    serviceId: serviceId,
    startTime:startTime,
    endTime:endTime,
  }
}

export const searchModalDisappear = () => ({
  type:SEARCH_MODAL_DISAPPEAR

})