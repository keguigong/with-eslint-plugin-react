import fetch from 'isomorphic-unfetch'
import {
  getServiceInfosPending,
  getServiceInfosSuccess,
  getServiceInfosError,
} from './actions'
import { signinExpired } from '../signin'

//for abort multi repeated request
let nextSeqId = 0

const getServiceInfos = (deviceId, pageNo = 1, pageSize = 10, deviceType = 'PowerCharger') => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    const prefixMap = {
      'PowerCharger': 'powerCharger',
      'PowerSwap': 'powerSwap'
    }

    const { token } = getState().signin
    let url = `${process.env.SERVER_URL}/${prefixMap[deviceType] || prefixMap['PowerCharger']}/serviceInfos?device_id=${deviceId}&page_no=${pageNo}&page_size=${pageSize}&start_time=1559318400000&end_time=${new Date().getTime()}`
    
    const dataMap = {
      'PowerCharger': 'power_charger_service_info_dto_list',
      'PowerSwap': 'power_swap_service_info_dto_list'
    }

    dispatchIfValid(getServiceInfosPending())
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
          dispatchIfValid(getServiceInfosSuccess(res.data[dataMap[deviceType] || dataMap['PowerCharger']].map(item => ({
            serviceid: item.service_id,
            serviceEvent: item.service_event * 1,
            chargingEventTimestamp: item.charging_event_timestamp,
            chargingStartTimestamp: item.charging_start_timestamp,
            //PowerCharger
            sessionId: item.session_id,
            chargingConnectorId: item.charging_connector_id,
            realtimeChargedEnergy: item.realtime_charged_energy,
            serviceFinishResult: item.service_finish_result,
            chargedEnergyTotal: item.charged_energy_total,
            serviceFinishReason: item.service_finish_reason,
            //PowerSwap
            serviceStartSoc: item.service_start_soc,
            serviceStopSoc: item.service_stop_soc,
            evId: item.ev_id,
            evVin: item.ev_vin,
            evBatteryId: item.ev_battery_id,
            serviceBatteryId: item.service_battery_id
          })), res.data.total_results))
          return
        } else if (res.code * 1 === 402) {
          console.log('asdasd')
          dispatchIfValid(signinExpired(res.message))
          return
        } else {
          dispatchIfValid(getServiceInfosError(res.message))
        }
      })
      .catch(error => {
        dispatchIfValid(getServiceInfosError(error.message))
      })
  }
}

export default getServiceInfos