/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import fetch from 'isomorphic-unfetch'

import ConnectorInfo from './ConnectorInfo'
import ElectricMeterInfo from './ElectricMeterInfo'
import initData from './NPCInitialData'
import { EmptyState, LoadingOverlay } from '../widget'

import Modal from './history/modal'
import {connect} from 'react-redux'
import SearchAllTogether from './history/search-all-together'

class PowerChargerDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: initData,
      isConnectorVisible: [false, false, false, false, false, false],
      isMeterVisible: [false, false],
      isConnectorCharging: [false, false, false, false, false, false],
      connectorIdArray: typeof this.props.gunId !== 'undefined' ?
        this.props.gunId.filter(item => item !== '' && item.charAt(0) === 'P') :
        []
    }
  }

  render() {
    const { deviceId, isModalVisible, ...rest } = this.props
    const { isLoaded, data, isConnectorVisible, isMeterVisible, isConnectorCharging, connectorIdArray } = this.state

    return (
      <div>
        {isLoaded ?
          <React.Fragment>
            <Styled.h2 sx={{ variant: 'text.h2Title' }}>充电枪信息</Styled.h2>
            {connectorIdArray.length !== 0
              ? (connectorIdArray.map((connectorId, index) => (
                <ConnectorInfo
                  key={index}
                  data={data}
                  index={index}
                  deviceId={deviceId}
                  connectorId={connectorId}
                  isVisible={isConnectorVisible[index]}
                  isCharging={isConnectorCharging[index]}
                  handleTitleClick={() => this.handleConnectorTitleClick(index)}
                />
              )))
              : <EmptyState text='无充电枪信息' />}
            <Styled.h2 sx={{ variant: 'text.h2Title' }}>电表信息</Styled.h2>
            {data.realtimeInfo.electricMeter.map((electricMeter, index) => (
              <ElectricMeterInfo
                key={index}
                data={electricMeter}
                index={index}
                isVisible={isMeterVisible[index]}
                handleTitleClick={() => this.handleMeterTitleClick(index)}
              />
            ))}

            <Modal isModalVisible={isModalVisible}>
              <SearchAllTogether/>
            </Modal>

          </React.Fragment> :
          <LoadingOverlay normal/>
        }
      </div>
    )
  }

  componentDidMount = async () => {
    await this.fetchData()
    await this.sockjsData()
    this.setState({ isLoaded: true })
  }

  componentWillUnmount = () => {
    if (typeof this.stompClient !== 'undefined' && this.stompClient.connected) {
      this.stompClient.disconnect()
      console.log('stompClient disconnected!')
    }
  }

  handleConnectorTitleClick = (index) => {
    let tmpIsConnectorVisible = this.state.isConnectorVisible
    tmpIsConnectorVisible[index] = !tmpIsConnectorVisible[index]
    this.setState({
      isConnectorVisible: tmpIsConnectorVisible
    })
  }

  handleMeterTitleClick = (index) => {
    let tmpIsMeterVisible = this.state.isMeterVisible
    tmpIsMeterVisible[index] = !tmpIsMeterVisible[index]
    this.setState({
      isMeterVisible: tmpIsMeterVisible
    })
  }

  sockjsData = () => {
    const { deviceId } = this.props
    var tmpData = this.state.data

    let sock = new SockJS(process.env.WEBSOCKET)
    this.stompClient = Stomp.over(sock)
    this.stompClient.debug = null
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe(`/topic/dataReport/${deviceId}`, (message) => {
        let msgData = JSON.parse(message.body)
        // console.log(message.body)
        Object.keys(msgData).forEach((key) => {
          if (key == 'messageTimestamp' || key == 'deviceId') {
            tmpData[key] = msgData[key]
          }
          else if (key == 'realtimeInfo') {
            Object.keys(msgData[key]).forEach((key1) => {
              if (key1 == 'acdcModule') {
                console.log(key1)
              }
              else if (key1 == 'chargerWorkData') {
                console.log(key1)
              }
              else if (key1 == 'electricMeter') {
                tmpData[key][key1].forEach((tmpData1, index1) => {
                  msgData[key][key1].forEach((msgData2, index2) => {
                    if (tmpData1.id == msgData2.id) {
                      tmpData[key][key1][index1] = Object.assign(tmpData1, msgData2)
                      // console.log(`${key} ${key1} ${index1}`)
                    }
                  })
                })
              }
              else if (key1 == 'chargerControlUnit') {
                tmpData[key][key1].forEach((tmpData1, index1) => {
                  msgData[key][key1].forEach((msgData2, index2) => {
                    if (tmpData1.id == msgData2.id) {
                      tmpData[key][key1][index1] = Object.assign(tmpData1, msgData2)
                      // console.log(`${key} ${key1} ${index1}`)
                    }
                  })
                })
              }
              else if (key1 == 'bmsChargeData') {
                tmpData[key][key1].forEach((tmpData1, index1) => {
                  msgData[key][key1].forEach((msgData2, index2) => {
                    if (tmpData1.id == msgData2.id) {
                      tmpData[key][key1][index1] = Object.assign(tmpData1, msgData2)
                      // console.log(`${key} ${key1} ${index1}`)
                    }
                  })
                })
              }
            })
          }
          else if (key == 'serviceInfo') {
            tmpData[key].forEach((serviceInfo, index) => {
              if (serviceInfo.chargingConnectorId == msgData[key].chargingConnectorId) {
                tmpData[key][index] = Object.assign(serviceInfo, msgData[key])
                // console.log(`${key} ${index}`)
              }
            })
          }
          else if (key == 'statusInfo') {
            Object.keys(msgData[key]).forEach((key1) => {
              if (key1 == 'connectorStatus') {
                tmpData[key][key1].forEach((tmpData1, index1) => {
                  msgData[key][key1].forEach((msgData2, index2) => {
                    if (tmpData1.connectorId == msgData2.connectorId) {
                      tmpData[key][key1][index1] = Object.assign(tmpData1, msgData2)
                      // console.log(`${key} ${key1} ${index1}`)

                      Object.keys(msgData2).forEach((key3) => {
                        if (key3 == 'cc1State') {
                          if (parseInt(msgData2.cc1State) == 0) {
                            this.resetConnectorData(tmpData, index1)
                            tmpData[key][key1][index1].chargeStateNow = 0
                          }
                        }
                        else if (key3 == 'chargeStateNow') {
                          if (parseInt(msgData2.chargeStateNow) == 0) {
                            this.resetConnectorData(tmpData, index1)
                            this.updateConnetorState(false, index1)
                          } else if (parseInt(msgData2.chargeStateNow) > 3) {
                            this.updateConnetorChargingState(false, index1)
                          } else {
                            this.updateConnetorState(true, index1)
                          }
                        }
                      })
                    }
                  })
                })
              }
            })
          }
          else {
            console.log(key)
          }
        })
        this.setState({
          data: tmpData
        })
      })
    }, (err) => {
      // console.log(err)
    })
  }

  fetchData = async () => {
    const { deviceId } = this.props
    const { data, connectorIdArray } = this.state
    const tmpData = data
    let gunIdStr = connectorIdArray.length !== 0 ? `&gunIds=${connectorIdArray.join(',')}` : ''

    await fetch(`http://10.110.93.35:8081/powerCharger/AllInfo?device_id=${deviceId}${gunIdStr}`)
      .then(res => res.json())
      .then(result => {
        try {
          let recvData = result.data.power_charger_all_info_dto
          let electricMeterInfosList = recvData.electric_meter_infos_list
          let batteryInfoList = recvData.battery_info_list
          let chargerControlUnitInfoList = recvData.charger_control_unit_info_list
          let serviceInfoList = recvData.service_info_list
          let statusInfoList = recvData.status_info_list
          let deviceConnectInfo = recvData.device_connect_info

          tmpData.basicInfo.deviceId = recvData.device_id
          tmpData.basicInfo.description = recvData.description
          tmpData.basicInfo.address = recvData.address
          tmpData.basicInfo.deviceType = recvData.device_type
          tmpData.basicInfo.firmwareVersion = recvData.firmware_version
          tmpData.basicInfo.softwareVersion = recvData.software_version
          tmpData.basicInfo.ipAddress = recvData.ip_address

          try {
            tmpData.deviceConnectInfo.isConnected = deviceConnectInfo.is_connected
          } catch (error) {
            // console.log(error)
          }

          try {
            connectorIdArray.forEach((connectorId, index) => {
              tmpData.realtimeInfo.bmsChargeData[index].id = connectorId
              tmpData.realtimeInfo.chargerControlUnit[index].id = connectorId
              tmpData.serviceInfo[index].id = connectorId
              tmpData.statusInfo.connectorStatus[index].connectorId = connectorId
            })
          } catch (error) {
            // console.log(error)
          }

          try {
            electricMeterInfosList.forEach(remote => {
              tmpData.realtimeInfo.electricMeter.forEach(local => {
                if (local.id === parseInt(remote.electric_meter_id)) {
                  local.voltageA = remote.voltage_a
                  local.voltageB = remote.voltage_b
                  local.voltageC = remote.voltage_c
                  local.currentA = remote.current_a
                  local.currentB = remote.current_b
                  local.currentC = remote.current_c
                  local.power = remote.power
                  local.powerFactor = remote.power_factor
                  local.energy = remote.energy
                  local.isConnected = remote.is_connected
                }
              })
            })
          } catch (error) {
            // console.log(error)
          }

          try {
            batteryInfoList.forEach(remote => {
              tmpData.realtimeInfo.bmsChargeData.forEach(local => {
                if (local.id === remote.battery_id) {
                  local.bmsRequestCurrent = remote.bms_request_charge_current
                  local.bmsRequestVoltage = remote.bms_request_charge_voltage
                  local.socNow = remote.soc
                  local.bmsVer = remote.bms_version
                  local.bmsSoftver = remote.software_version
                  local.carDiscern = remote.car_discern
                }
              })
            })
          } catch (error) {
            // console.log(error)
          }

          try {
            chargerControlUnitInfoList.forEach(remote => {
              tmpData.realtimeInfo.chargerControlUnit.forEach(local => {
                if (local.id === remote.unit_id) {
                  local.chargerWorkModel = remote.charger_work_model
                  local.chargeStateNow = remote.charge_state_now
                  local.outputVolt = remote.unit_out_volt
                  local.outputCurrent = remote.unit_out_current
                  local.outputPower = remote.unit_out_pw
                }
              })
            })
          } catch (error) {
            // console.log(error)
          }

          try {
            serviceInfoList.forEach(remote => {
              tmpData.serviceInfo.forEach(local => {
                if (local.id === remote.connector_id) {
                  local.serviceId = remote.service_id
                  local.serviceEvent = remote.service_state
                  local.chargingConnectorId = remote.connector_id
                  local.realtimeChargedEnergy = remote.realtime_charged_energy
                  local.totalChargedEnergy = remote.total_charged_energy
                  local.serviceFinishResult = remote.is_normal_end
                }
              })
            })
          } catch (error) {
            // console.log(error)
          }

          try {
            statusInfoList.forEach(remote => {
              tmpData.statusInfo.connectorStatus.forEach(local => {
                if (local.connectorId === remote.connector_id) {
                  local.cc1State = remote.cc1_state
                  local.chargeStateNow = remote.charge_state_now
                  local.connectorId = remote.connector_id
                  local.sessionId = remote.session_id
                }
              })
            })
          } catch (error) {
            // console.log(error)
          }
        } catch (error) {
          // console.log(error)
        }
      })
      .then(() => {
        tmpData.statusInfo.connectorStatus.forEach((item, index) => {
          if (parseInt(item.cc1State) == 0
            || parseInt(item.chargeStateNow) == 0
            || parseInt(item.chargeStateNow) > 3) {
            this.resetConnectorData(tmpData, index)
          }

          if (parseInt(item.cc1State) == 0) {
            item.chargeStateNow = 0
          }

          if (parseInt(item.chargeStateNow) == 0) {
            this.resetConnectorData(tmpData, index)
            this.updateConnetorState(false, index)
          } else if (parseInt(item.chargeStateNow) > 3) {
            this.updateConnetorChargingState(false, index)
          } else {
            this.updateConnetorState(true, index)
          }
        })

        this.setState({
          data: tmpData,
          // isLoaded: true
        })

        // console.log(this.state.data)
      }).catch(error => console.error(`Fetch err ${error}`))
  }

  resetConnectorData = (tmpData, index) => {
    tmpData.realtimeInfo.chargerControlUnit[index].outputVolt = 0
    tmpData.realtimeInfo.chargerControlUnit[index].outputCurrent = 0
    tmpData.realtimeInfo.chargerControlUnit[index].outputPower = 0
    tmpData.realtimeInfo.bmsChargeData[index].bmsRequestCurrent = 0
    tmpData.realtimeInfo.bmsChargeData[index].bmsRequestVoltage = 0
    tmpData.realtimeInfo.bmsChargeData[index].socNow = 0
    tmpData.realtimeInfo.bmsChargeData[index].bmsVer = '-'
    tmpData.realtimeInfo.bmsChargeData[index].bmsSoftver = '-'
    tmpData.realtimeInfo.bmsChargeData[index].carDiscern = '-'
    tmpData.serviceInfo[index].realtimeChargedEnergy = 0
  }

  updateConnetorChargingState = (state, index) => {
    let tmpIsConnectorCharging = this.state.isConnectorCharging
    tmpIsConnectorCharging[index] = state
    this.setState({
      isConnectorCharging: tmpIsConnectorCharging,
    })
  }

  updateConnetorVisibilityState = (state, index) => {
    let tmpIsConnectorVisible = this.state.isConnectorVisible
    tmpIsConnectorVisible[index] = state
    this.setState({
      isConnectorVisible: tmpIsConnectorVisible
    })
  }

  updateConnetorState = (state, index) => {
    this.updateConnetorChargingState(state, index)
    this.updateConnetorVisibilityState(state, index)
  }
}


const mapStateToProps = state =>({
  isModalVisible:state.history.isModalVisible
})

export default connect (
  mapStateToProps,
)(PowerChargerDetail)