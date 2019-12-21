/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {Component} from 'react'
import {TextDisplay} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import {WaterCoolingColor} from './maps/powerSwapStateColor'
import Colors from './styles/Color'

export default class PowerSwapCoolingSystem extends Component {
  constructor(props) {
    super(props)
  }

  handleTitleClick = () => {
    this.props.handleTitleClick()
  }


  render() {

    const {data, index, deviceId} = this.props

    switch (data.isRefrigeration) {
      case true:
        data.isRefrigeration = '是'
        break
      case false:
        data.isRefrigeration = '否'
        break
    }

    switch (data.isHeating) {
      case true:
        data.isHeating = '是'
        break

      case false:
        data.isHeating = '否'
        break
    }

    switch (data.isPumpRunning) {
      case true:
        data.isPumpRunning = '运行中'
        break

      case false:
        data.isPumpRunning = '空闲'
        break
    }

    return(
      <SubsystemInfo
        {...this.props}
        title={`水冷${index + 1}`}
        handleTitleClick={() => this.handleTitleClick()}
        status={data.isPumpRunning}
        statusColor={Colors.status[WaterCoolingColor[data.isPumpRunning]]}
      >
        <TextDisplay
          name="板换进水温度"
          value={data.inletWaterTemperature === '-' ? '-' : parseFloat(data.inletWaterTemperature).toFixed(1)} unit="℃"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="InletWaterTemperature" linkable/>
        <TextDisplay
          name="板换出水温度"
          value={data.outletWaterTemperature === '-' ? '-' : parseFloat(data.outletWaterTemperature).toFixed(1)}
          unit="℃" deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="OutletWaterTemperature" linkable/>
        <TextDisplay
          name="水泵出水温度"
          value={data.pumpOutletWaterTemperature === '-' ? '-' : parseFloat(data.pumpOutletWaterTemperature).toFixed(1)}
          unit="℃" deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="PumpOutletWaterTemperature" linkable/>
        <TextDisplay
          name="排气温度" value={data.exhaustTemperature === '-' ? '-' : parseFloat(data.exhaustTemperature).toFixed(1)}
          unit="℃" deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="ExhaustTemperature" linkable/>
        <TextDisplay
          name="吸气温度" value={data.suctionTemperature === '-' ? '-' : parseFloat(data.suctionTemperature).toFixed(1)}
          unit="℃" deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="SuctionTemperature" linkable/>
        <TextDisplay
          name="排气压力" value={data.exhaustPressure === '-' ? '-' : parseFloat(data.exhaustPressure).toFixed(1)} unit="Pa"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="ExhaustPressure" linkable/>
        <TextDisplay
          name="吸气压力" value={data.suctionPressure === '-' ? '-' : parseFloat(data.suctionPressure).toFixed(1)} unit="Pa"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="WATER_COOLING" waterCoolingId={index + 1} column="SuctionPressure" linkable/>
        <TextDisplay name="是否制冷" value={data.isRefrigeration}/>
        <TextDisplay name="是否制热" value={data.isHeating}/>
      </SubsystemInfo>

    )
  }
}