/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React, { Component } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import fetch from 'isomorphic-unfetch'

import PowerSwapInitData from './powerSwapInitData'

import PowerSwapBasicInfo from './powerSwapBasicInfo'
import PowerSwapEMeter from './powerSwapEMeter'
import PowerSwapSystem from './powerSwapSystem'
import PowerSwapDeviceInfo from './powerSwapDeviceInfo'
import PowerSwapCoolingSystem from './powerSwapCoolingSystem'

import {LoadingOverlay} from '../widget'

import Modal from './history/modal'
import {connect} from 'react-redux'
import SearchAllTogether from './history/search-all-together'

class powerSwapDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoaded:false,
      data: PowerSwapInitData,
      time:new Date().valueOf(),
      isBasicInfoVisible: false,
      isEMVisible: [false, false],
      isPowerSwapSystemVisible: false,
      isDeviceInfoVisible: [false, false, false, false, false],
      isWaterCoolingVisible: [false, false],
      makeUpData:[],
    }
  }

  static async getInitialProps(context) {
    const {deviceId, deviceType} = context.query;
    return {
      deviceId: deviceId,
      deviceType: deviceType,
    }
  }

  async componentDidMount() {

    await this.makeUpFetch()
    await this.powerSwapDataGet()
    await this.setState({
      isLoaded: true,
      data: PowerSwapInitData,
    })
  }

  componentWillUnmount() {
    if (typeof this.stompClient !== 'undefined' && this.stompClient.connected) {
      this.stompClient.disconnect()
      console.log('stompClient disconnected!')
    }
  }

  powerSwapDataGet = () => {
    const deviceId = this.props.deviceId
    let makeUpData = this.state.makeUpData
    let tempData = PowerSwapInitData

    this.sock = new SockJS(`${process.env.WEBSOCKET}`)
    this.stompClient = Stomp.over(this.sock)
    this.stompClient.debug = null
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe(`/topic/dataReport/${deviceId}`, (message) => {
        let msgData = JSON.parse(message.body)
        console.log(msgData)
        if (msgData.realtimeInfo) {
          Object.keys(msgData).forEach((key1) => {
            if (key1 === 'messageTimestamp' || key1 === 'deviceId') {
              tempData[key1] = msgData[key1]
            } else {
              Object.keys(msgData[key1]).forEach((key2) => {
                if (typeof (msgData[key1][key2]) !== 'object') {
                  tempData[key1][key2] = msgData[key1][key2]
                }
                Object.keys(msgData[key1][key2]).forEach((key3) => {
                  if (key2 === 'swapInfo') {
                    tempData[key1][key2][key3] = msgData[key1][key2][key3]
                  }
                  Object.keys(msgData[key1][key2][key3]).forEach((key4) => {
                    if (key2 === 'batterySlot' || key2 === 'waterCoolingSystem'
                        || key2 === 'electricMeter') {

                      tempData[key1][key2][key3][key4] = msgData[key1][key2][key3][key4]
                    }

                    if (key2 === 'battery') {

                      for (let i = 0; i < 5; i++) {
                        if (tempData[key1]['batterySlot'][i]['batteryId'] === msgData[key1][key2][key3]['batteryId']) {
                          // console.log(`slotNumber:${i} batteryId:${msgData[key1][key2][key3]['batteryId']}`)
                          tempData[key1]['batterySlot'][i][key4] = msgData[key1][key2][key3][key4]
                        }
                      }
                    }
                  })
                })
              })
            }
          })
          for (let i = 0; i < (tempData['realtimeInfo']['batterySlot']).length; i++) {
            for (let j = 0; j < (makeUpData.data.battery_slot_list).length; j++) {
              if (tempData['realtimeInfo']['batterySlot'][i]['batteryId'] === makeUpData.data.battery_slot_list[j]['battery_id']) {
                tempData.realtimeInfo.batterySlot[i].slotWorkState = makeUpData.data.battery_slot_list[j].work_status
              }
            }
          }
          this.setState({
            data: tempData,
            time: tempData.messageTimestamp,
          })
        }
      })
    }, (err) => {
      console.log(err)
    })
  }

  async makeUpFetch() {
    const deviceId = this.props.deviceId
    let tempData = this.state.data
    /* ***************************

       由于history没有测试环境，url需要更改

       *************************** */
    await fetch(`http://10.110.93.35:8081/powerSwaps/realtimeInfo/${deviceId}`)
      .then(res => res.json())
      .catch(error => console.error(`Fetch err ${error}`))
      .then(result => {

        console.log(result)

        let MUData = result.data
        tempData.deviceId = MUData.resource_id
        tempData.realtimeInfo.humidityBatteryArea = MUData.humidity.battery_area_humidity
        tempData.realtimeInfo.realtimePower = MUData.power.realtime_power
        tempData.realtimeInfo.realtimePowerLine1 = MUData.power.realtime_power_line1
        tempData.realtimeInfo.realtimePowerLine2 = MUData.power.realtime_power_line2
        tempData.realtimeInfo.reverseOutputPower = MUData.power.reverse_output_power
        tempData.realtimeInfo.swapInfo.swapFaultState = MUData.swap_info.swap_fault_state
        tempData.realtimeInfo.swapInfo.swapWorkState = MUData.swap_info.swap_work_state
        tempData.realtimeInfo.swapInfo.plcConnectionState = MUData.swap_info.swap_plc_connection_state
        tempData.realtimeInfo.temperatureBatteryArea = MUData.temperature.battery_area_temperature
        tempData.realtimeInfo.swapInfo.swapWorkState = MUData.working_status

        MUData.electric_meter_list.forEach(res => {
          tempData.realtimeInfo.electricMeter.forEach(tar => {
            if (tar.id === res.electric_meter_id) {
              tar.voltageA = res.voltage_a
              tar.voltageB = res.voltage_b
              tar.voltageC = res.voltage_c
              tar.currentA = res.current_a
              tar.currentB = res.current_b
              tar.currentC = res.current_c
              tar.power = res.power
              tar.powerFactor = res.power_factor
              tar.electricity = res.electricity
              tar.isConnected = res.is_connected
            }
          })
        })

        MUData.water_cooling_system_list.forEach(res => {
          tempData.realtimeInfo.waterCoolingSystem.forEach(tar => {
            if (tar.id === res.water_cooling_id) {
              tar.inletWaterTemperature = res.inlet_water_temperature
              tar.outletWaterTemperature = res.outlet_water_temperature
              tar.pumpOutletWaterTemperature = res.pump_outlet_water_temperature
              tar.exhaustPressure = res.exhaust_pressure
              tar.suctionPressure = res.suction_pressure
              tar.exhaustTemperature = res.exhaust_temperature
              tar.suctionTemperature = res.suction_temperature
              tar.isRefrigeration = res.is_refrigeration
              tar.isHeating = res.is_heating
              tar.isPumpRunning = res.is_pump_running
            }
          })
        })

        MUData.battery_slot_list.forEach(res => {
          tempData.realtimeInfo.batterySlot.forEach(tar => {
            if (tar.slotId === res.slot_id) {
              tar.batteryId = res.battery_id
              tar.contactResistant = res.contact_resistant
              tar.slotWorkState = res.work_status
            }
          })
        })

        MUData.battery_list.forEach(res => {
          tempData.realtimeInfo.batterySlot.forEach(tar => {
            if (tar.batteryId === res.battery_id) {
              tar.avgBatteryPackTemperature = res.avg_battery_pack_temperature
              tar.avgCellVoltage = res.avg_cell_voltage
              tar.batteryState = res.battery_status
              tar.bmsBatteryRatedCapacity = res.bms_battery_rated_capacity
              tar.current = res.current
              tar.batteryFaultLevel = res.fault_level
              tar.hardwareVersion = res.hardware_version
              tar.inletWaterTemperature = res.inlet_water_temperature
              tar.isolationLevel = res.isolation_level
              tar.maxBatteryPackTemperature = res.max_battery_pack_temperature
              tar.maxBatteryPackTemperatureNumber = res.max_battery_pack_temperature_number
              tar.maxCellVoltage = res.max_cell_voltage
              tar.maxCellVoltageNumber = res.max_cell_voltage_number
              tar.minBatteryPackTemperature = res.min_battery_pack_temperature
              tar.minBatteryPackTemperatureNumber = res.min_battery_pack_temperature_number
              tar.minCellVoltage = res.min_cell_voltage
              tar.minCellVoltageNumber = res.min_cell_voltage_number
              tar.outletWaterTemperature = res.outlet_water_temperature
              tar.power = res.power
              tar.currentSoc = res.soc
              tar.soh = res.soh
              tar.targetSoc = res.target_soc
              tar.voltage = res.voltage
            }
          })
        })

        console.log(tempData)
        this.setState({
          makeUpData:result,
          time:MUData.sample_time,
          data: tempData,
        })
      })
  }

  handleBasicInfoClick = () => {
    this.setState({
      isBasicInfoVisible: !this.state.isBasicInfoVisible,
    })
  }

  handleMeterTitleClick = (index) => {
    let tmp = this.state.isEMVisible
    tmp[index] = !tmp[index]
    this.setState({
      isEMVisible: tmp,
    })
  }

  handlePowerSwapClick = () => {
    this.setState({
      isPowerSwapSystemVisible: !this.state.isPowerSwapSystemVisible,
    })
  }

  handleDeviceInfoClick = (index) => {
    let temp = this.state.isDeviceInfoVisible
    temp[index] = !temp[index]
    this.setState({
      isDeviceInfoVisible: temp,
    })
  }

  handleCoolingSystemClick = (index) => {
    let temp = this.state.isWaterCoolingVisible
    temp[index] = !temp[index]
    this.setState({
      isWaterCoolingVisible: temp,
    })
  }



  render() {
    const {
      isLoaded, isBasicInfoVisible, data, isEMVisible, time,
      isPowerSwapSystemVisible, isDeviceInfoVisible, isWaterCoolingVisible
    } = this.state

    const {
      deviceId,
      isModalVisible
    }
      = this.props

    return (
      <div>
        {isLoaded ? (
          <>
            <Styled.h2 sx={{variant: 'text.h2Title'}}>站信息</Styled.h2>

            <PowerSwapBasicInfo
              data={data}
              isVisible={isBasicInfoVisible}
              handleTitleClick={() => this.handleBasicInfoClick()}
            />

            <PowerSwapSystem
              data={data.realtimeInfo.swapInfo}
              isVisible={isPowerSwapSystemVisible}
              handleTitleClick={() => this.handlePowerSwapClick()}
            />

            <Styled.h2 sx={{variant: 'text.h2Title'}}>电池仓信息</Styled.h2>
            {data.realtimeInfo.batterySlot.map((batterySlot, index) => (
              <PowerSwapDeviceInfo
                deviceId={deviceId}
                key={index}
                data={batterySlot}
                index={index}
                isVisible={isDeviceInfoVisible[index]}
                disable={batterySlot.slotWorkState === 'SWS_UNKNOWN' || batterySlot.slotWorkState === '255' || batterySlot.slotWorkState === '未检测到电池' || batterySlot.slotWorkState === '-'}
                handleTitleClick={() => this.handleDeviceInfoClick(index)}
              />
            ))}

            <Styled.h2 sx={{variant: 'text.h2Title'}}>电表信息</Styled.h2>
            {data.realtimeInfo.electricMeter.map((electricMeter, index) => (
              <PowerSwapEMeter
                deviceId={deviceId}
                key={index}
                data={electricMeter}
                index={index}
                isVisible={isEMVisible[index]}
                handleTitleClick={() => this.handleMeterTitleClick(index)}
              />
            ))}

            <Styled.h2 sx={{variant: 'text.h2Title'}}>水冷信息</Styled.h2>
            {data.realtimeInfo.waterCoolingSystem.map((waterCoolingSystem, index) => (
              <PowerSwapCoolingSystem
                deviceId={deviceId}
                key={index}
                data={waterCoolingSystem}
                index={index}
                isVisible={isWaterCoolingVisible[index]}
                handleTitleClick={() => this.handleCoolingSystemClick(index)}
              />
            ))}

            <Modal isModalVisible={isModalVisible}>
              <SearchAllTogether/>
            </Modal>
          </>
        ) : (
          <LoadingOverlay normal/>
        )}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  isModalVisible:state.history.isModalVisible
})

export default connect (
  mapStateToProps,
)(powerSwapDetail)