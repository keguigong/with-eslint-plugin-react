/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Component} from 'react'
import {NumberDisplay} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'


export default class VehicleParking extends Component {
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
        title={'停车平台参数设置'}
        isVisible={isVisible}
        handleTitleClick={() => this.handleTitleClick()}>
        <NumberDisplay name="左前轮原点位" value={data.pos1} unit=" "/>
        <NumberDisplay name="左前轮工作位" value={data.pos2} unit=" "/>
        <NumberDisplay name="右前轮原点位" value={data.pos3} unit=" "/>
        <NumberDisplay name="右前轮工作位" value={data.pos4} unit=" "/>
        <Devider isHidden/>
        <NumberDisplay name="左后轮原点位" value={data.pos5} unit=" "/>
        <NumberDisplay name="左后轮工作位" value={data.pos6} unit=" "/>
        <NumberDisplay name="右后轮原点位" value={data.pos7} unit=" "/>
        <NumberDisplay name="右后轮工作位" value={data.pos8} unit=" "/>
        <Devider isHidden/>
        <NumberDisplay name="旋转平台原点位" value={data.pos9} unit=" "/>
        <NumberDisplay name="旋转平台工作位" value={data.pos10} unit=" "/>
        <Devider/>
        <NumberDisplay name="四柱举升原点位" value={data.pos11} unit=" "/>
        <NumberDisplay name="四柱举升工作位" value={data.pos12} unit=" "/>
        <NumberDisplay name="四柱举升接触位" value={data.pos13} unit=" "/>
        <NumberDisplay name="软件限位偏置" value={data.pos14} unit=" "/>

      </SubsystemInfo>
    )
  }
}