/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Component} from 'react'
import {NumberDisplay} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'

export default class BatterySlotConfigure extends Component {
  constructor(props) {
    super(props)
  }

  handleTitleClick = () => {
    this.props.handleTitleClick()
  }


  render() {
    const {
      data,
      isVisible,
    } = this.props


    return (
      <SubsystemInfo
        title={'电池仓参数'}
        isVisible={isVisible}
        handleTitleClick={() => this.handleTitleClick()}>
        <NumberDisplay name="升降机仓位1" value={data.liftMachinePos1} unit=" "/>
        <NumberDisplay name="升降机仓位2" value={data.liftMachinePos2} unit=" "/>
        <NumberDisplay name="升降机仓位3" value={data.liftMachinePos3} unit=" "/>
        <NumberDisplay name="升降机仓位4" value={data.liftMachinePos4} unit=" "/>
        <NumberDisplay name="升降机仓位5" value={data.liftMachinePos5} unit=" "/>
        <NumberDisplay name="升降机仓位6" value={data.liftMachinePos6} unit=" "/>
        <NumberDisplay name="RGV对接位" value={data.rgvExchangePos7} unit=" "/>
      </SubsystemInfo>
    )
  }
}