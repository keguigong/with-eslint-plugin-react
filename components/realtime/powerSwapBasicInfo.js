/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Component} from 'react'
import {NumberDisplay} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'
import {BasicInfoColor} from './maps/powerSwapStateColor'
import Colors from './styles/Color'


export default class BasicInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  handleTitleClick = () => {
    this.props.handleTitleClick()
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    })
    console.log('modal close confirmed')
  }

  render() {
    const {
      data,
      isVisible,

    } = this.props


    let deviceWorkState = data.realtimeInfo.deviceWorkState
    let temperatureBatteryArea = data.realtimeInfo.temperatureBatteryArea  //状态信息
    let temperatureSwapArea = data.realtimeInfo.temperatureSwapArea //没有值
    let humidityBatteryArea = data.realtimeInfo.humidityBatteryArea
    let humiditySwapArea = data.realtimeInfo.humiditySwapArea
    let waterLevelStatusFlooded = data.realtimeInfo.waterLevelStatusFlooded
    let realtimePowerLine1 = data.realtimeInfo.realtimePowerLine1
    let realtimePowerLine2 = data.realtimeInfo.realtimePowerLine2
    let realtimePower = data.realtimeInfo.realtimePower
    let reverseOutputPower = data.realtimeInfo.reverseOutputPower
    let deviceId = data.deviceId

    switch (deviceWorkState) {
      case 'DWS_FREE':
        deviceWorkState = '空闲'
        break

      case 'DWS_BEING_REPLACED' :
        deviceWorkState = '换电中'
        break
    }

    return (
      <SubsystemInfo
        title={'工作信息'}
        isVisible={isVisible}
        handleTitleClick={() => this.handleTitleClick()}
        status={deviceWorkState}
        statusColor={Colors.status[BasicInfoColor[deviceWorkState]]}

      >
        <NumberDisplay
          name="电池区域温度"
          value={temperatureBatteryArea === '-' ? '-' : parseFloat(temperatureBatteryArea).toFixed(1)}
          unit="℃" deviceId={deviceId}
          deviceType="powerSwap" searchType="DEVICE" column="TemperatureBatteryArea" linkable
        />
        {/*<NumberDisplay name="换电区域温度" value={temperatureSwapArea} unit="℃" deviceId={deviceId} deviceType="powerSwap"*/}
        {/*                searchType="DEVICE" column="TemperatureSwapArea"*/}
        {/* />*/}
        <NumberDisplay
          name="电池区域湿度"
          value={humidityBatteryArea === '-' ? '-' : parseFloat(humidityBatteryArea).toFixed(1)} unit="RH%"
          deviceId={deviceId}
          deviceType="powerSwap" searchType="DEVICE" column="HumidityBatteryArea" linkable
        />
        {/*<NumberDisplay name="换电区域湿度" value={humiditySwapArea} unit="RH%" deviceId={deviceId} deviceType="powerSwap"*/}
        {/*               searchType="DEVICE" column="HumiditySwapArea"*/}
        {/*/>*/}
        <Devider isHidden/>
        <NumberDisplay
          name="总实时功率" value={realtimePower === '-' ? '-' : parseFloat(realtimePower).toFixed(1)}
          deviceId={deviceId} deviceType="powerSwap"
          searchType="DEVICE" column="RealtimePower" linkable
        />
        <NumberDisplay
          name="线路一功率" value={realtimePowerLine1 === '-' ? '-' : parseFloat(realtimePowerLine1).toFixed(1)}
          deviceId={deviceId} deviceType="powerSwap"
          searchType="DEVICE" column="RealtimePowerLine1" linkable
        />
        <NumberDisplay
          name="线路二功率" value={realtimePowerLine2 === '-' ? '-' : parseFloat(realtimePowerLine2).toFixed(1)}
          deviceId={deviceId} deviceType="powerSwap"
          searchType="DEVICE" column="RealtimePowerLine2" linkable
        />
        <NumberDisplay
          name="线路二功率" value={reverseOutputPower === '-' ? '-' : parseFloat(reverseOutputPower).toFixed(1)}
          deviceId={deviceId} deviceType="powerSwap"
          searchType="DEVICE" column="ReverseOutputPower" linkable/>
        {/* <Devider/>*/}
        {/* <TextDisplay name="工作状态" value={deviceWorkState} deviceId={deviceId} deviceType="powerSwap"
                         searchType="DEVICE" column="DeviceWorkState" />*/}
        {/*<TextDisplay name="水位状态" value={waterLevelStatusFlooded} deviceId={deviceId} deviceType="powerSwap"*/}
        {/*             searchType="DEVICE" column="WaterLevelStatusFlooded"/>*/}

      </SubsystemInfo>


    )
  }
}