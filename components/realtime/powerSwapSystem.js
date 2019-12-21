/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Component} from 'react'
import { TextDisplay } from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import {WorkingStatusColor} from './maps/powerSwapStateColor'
import Color from './styles/Color'

export default class PowerSwapSystem extends Component {
  constructor(props) {
    super(props)
  }

  handleTitleClick = () => {
    this.props.handleTitleClick()
  }


  render() {

    const {data} = this.props

    switch (data.swapWorkState) {
      case 'SM_AUTO ':
        data.swapWorkState = '自动'
        break

      case '0':
        data.swapWorkState = '自动'
        break

      case 'SM_SEMI_AUTO':
        data.swapWorkState = '半自动'
        break

      case '1':
        data.swapWorkState = '半自动'
        break

      case 'SM_MANUAL':
        data.swapWorkState = '人工'
        break

      case '2':
        data.swapWorkState = '人工'
        break

      case 'SM_STANDBY':
        data.swapWorkState = '待机'
        break

      case '3':
        data.swapWorkState = '待机'
        break

      case 'SM_ABORTED':
        data.swapWorkState = '中止'
        break

      case '4':
        data.swapWorkState = '中止'
        break

      case 'SM_UNKNOWN':
        data.swapWorkState = '未知'
        break

      case '255':
        data.swapWorkState = '未知'
        break
    }

    switch (data.swapFaultState) {
      case 'SFS_NO_FAULT':
        data.swapFaultState = '正常'
        break

      case '0':
        data.swapFaultState = '正常'
        break

      case 'SFS_HAVING_FAULT ':
        data.swapFaultState = '故障'
        break

      case '1':
        data.swapFaultState = '故障'
        break
    }

    switch (data.plcConnectionState) {
      case 'CS_CONNECTED':
        data.plcConnectionState = '链接'
        break

      case '1':
        data.plcConnectionState = '链接'
        break

      case 'CS_DISCONNECTED':
        data.plcConnectionState = '断开'
        break

      case '0':
        data.plcConnectionState = '断开'
        break
    }

    return (
      <SubsystemInfo
        {...this.props}
        title="换电系统"
        handleTitleClick={() => this.handleTitleClick()}
        status={data.swapWorkState}
        statusColor={Color.status[WorkingStatusColor[data.swapWorkState]]}
      >
        <TextDisplay name="故障状态" value={data.swapFaultState}/>
        <TextDisplay name="PLC通信状态" value={data.plcConnectionState}/>
      </SubsystemInfo>

    )
  }

}