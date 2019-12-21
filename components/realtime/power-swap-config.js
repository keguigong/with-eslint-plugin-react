/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {Component} from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import fetch from 'isomorphic-unfetch'

import {SiderDisplay, NameDisplay} from './DataDisplay'
import ConfigureInit from './config-infos-init'
import BatterySlotConfigure from './battery-slot-config'
import RGVConfigure from './rgv-config'
import VehicleParking from './vehicle-parking'


export default class ConfigureInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ConfigureInit,
      isBatterySlotVisible: false,
      isRgvVisible: false,
      isVehicleVisible: false,
    }
  }

  static async getInitialProps(context) {
    const {deviceId, deviceType} = context.query
    // 以上等于 deviceId = context.query.deviceId;
    return {
      deviceId: deviceId,
      deviceType: deviceType,
    }
  }

  componentDidMount() {
    this.settingSearching()
  }

  componentWillUnmount() {
    if (this.stompClient) {
      this.stompClient.disconnect()
      console.log('stompClient disconnected!')
    }
    // this.resetConnectorData()
  }

  settingSearching = () => {
    const stationId = this.props.deviceId
    let tempData = this.state.data
    this.sock = new SockJS(`${process.env.WEBSOCKET}`)
    this.stompClient = Stomp.over(this.sock)
    this.stompClient.debug = null
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe(`/topic/dataReport/${stationId}`, (message) => {
        let msgData = JSON.parse(message.body)
        console.log(msgData)
        msgData.messageTimestamp = this.timeSwift(parseInt(msgData.messageTimestamp))
        if (msgData.localConfiguration) {
          tempData.messageTimestamp = msgData.messageTimestamp
          Object.keys(msgData.localConfiguration.settings.swapSttings).forEach((key1) => {
            Object.keys(msgData.localConfiguration.settings.swapSttings[key1]).forEach((key2) => {
              tempData.localConfiguration.settings.swapSttings[key1][key2] = msgData.localConfiguration.settings.swapSttings[key1][key2]
            })
          })
        }

        this.setState({
          data: tempData,
        })
      })
    }, (err) => {
      console.log(err)
    })
  }

  //转换时间戳
  timeSwift = (n) => {
    let date = new Date(n)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() > 9 ? date.getDate() + ' ' : '0' + date.getDate() + ' '
    let h = date.getHours() > 9 ? date.getHours() + ':' : '0' + date.getHours() + ':'
    let m = date.getMinutes() > 9 ? date.getMinutes() + ':' : '0' + date.getMinutes() + ':'
    let s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    return Y + M + D + h + m + s
  }

  handleBatterySlotClick = () => {
    this.setState({
      isBatterySlotVisible: !this.state.isBatterySlotVisible
    })
  }

  handleRgvClick = () => {
    this.setState({
      isRgvVisible: !this.state.isRgvVisible,
    })
  }

  handleVehicleClick = () => {
    this.setState({
      isVehicleVisible: !this.state.isVehicleVisible,
    })
  }

  render() {
    const {deviceType, deviceId} = this.props
    const {data, isBatterySlotVisible, isRgvVisible, isVehicleVisible} = this.state
    return (
      <>

        <Styled.h2 sx={{variant: 'text.h2Title'}}>换电设置</Styled.h2>

        <BatterySlotConfigure
          data={data.localConfiguration.settings.swapSttings.others}
          isVisible={isBatterySlotVisible}
          handleTitleClick={() => this.handleBatterySlotClick()}
        />
        <RGVConfigure
          data={data.localConfiguration.settings.swapSttings.rgv}
          isVisible={isRgvVisible}
          handleTitleClick={() => this.handleRgvClick()}
        />
        <VehicleParking
          data={data.localConfiguration.settings.swapSttings.vehicleParkingPlatform}
          isVisible={isVehicleVisible}
          handleTitleClick={() => this.handleVehicleClick()}
        />

      </>
    )
  }
}