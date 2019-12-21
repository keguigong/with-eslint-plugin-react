/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Component} from 'react'
import {NumberDisplay} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'


export default class RGVConfigure extends Component {
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
        title={'RGV参数'}
        isVisible={isVisible}
        handleTitleClick={() => this.handleTitleClick()}>
        <NumberDisplay name="左前销缩回模拟" value={data.leftFrontPinHomeSimu} unit=" "/>
        <NumberDisplay name="左前销伸出模拟" value={data.leftFrontPinWorkSumu} unit=" "/>
        <NumberDisplay name="左前销缩回实际" value={data.leftFrontPinHomeActual} unit=" "/>
        <NumberDisplay name="左前销伸出实际" value={data.leftFrontPinWorkActual} unit=" "/>
        <Devider isHidden/>
        <NumberDisplay name="右前销缩回模拟" value={data.rightBackPinHomeSimu} unit=" "/>
        <NumberDisplay name="右前销伸出模拟" value={data.rightBackPinWorkSumu} unit=" "/>
        <NumberDisplay name="右前销缩回实际" value={data.rightBackPinHomeActual} unit=" "/>
        <NumberDisplay name="右前销伸出实际" value={data.rightBackPinWorkActual} unit=" "/>
        <Devider/>
        <NumberDisplay name="RGV抬升原点位" value={data.rgvLiftHomePos} unit=" "/>
        <NumberDisplay name="RGV抬升卡销位" value={data.rgvLiftMiddlePos} unit=" "/>
        <NumberDisplay name="RGV抬升工作位" value={data.rgvLiftWorkPos} unit=" "/>
        <NumberDisplay name="RGV抬升销子位" value={data.rgvLiftPinPos} unit=" "/>
        <Devider isHidden/>
        <NumberDisplay name="RGV行走-平台" value={data.rgvMoveToPlatform} unit=" "/>
        <NumberDisplay name="RGV行走-电池仓" value={data.rgvMoveToBatteryCab} unit=" "/>
      </SubsystemInfo>
    )
  }
}