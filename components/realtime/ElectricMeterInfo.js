/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { NumberDisplay, TextDisplay } from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'
import ChargerStatusColor from './maps/ChargerStatusColor'
import Colors from './styles/Color'

class ElectricMeterInfo extends React.Component {

  handleTitleClick() {
    this.props.handleTitleClick()
  }

  render() {
    const { data, index } = this.props

    return (
      <SubsystemInfo
        {...this.props}
        title={`${index + 1}号电表`}
        handleTitleClick={() => this.handleTitleClick()}
      >
        <NumberDisplay name="A相电压" value={data.voltageA} unit="V" />
        <NumberDisplay name="B相电压" value={data.voltageB} unit="V" />
        <NumberDisplay name="C相电压" value={data.voltageC} unit="V" />
        <NumberDisplay name="A相电流" value={data.currentA} unit="A" />
        <NumberDisplay name="B相电流" value={data.currentB} unit="A" />
        <NumberDisplay name="C相电流" value={data.currentC} unit="A" />
        <Devider isHidden />
        <TextDisplay name="电量" value={data.energy.toFixed(1)} unit="kWh" />
      </SubsystemInfo>
    )
  }
}

export default ElectricMeterInfo