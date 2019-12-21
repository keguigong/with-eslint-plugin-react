/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Component} from 'react'
import {NumberDisplay,} from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'
import Colors from './styles/Color'
import {EMeterColor} from './maps/powerSwapStateColor'

export default class PowerSwapEMeter extends Component {
  constructor(props){
    super(props)
  }

  handleTitleClick = () =>{
    this.props.handleTitleClick()
  };


  render() {
    const {data, index ,deviceId} = this.props;

    switch (data.isConnected){
      case true:
        data.isConnected = '连通'
        break

      case false:
        data.isConnected = '断开'
        break
    }

    return (
      <SubsystemInfo
        {...this.props}
        title={`${index + 1}号电表`}
        handleTitleClick={() => this.handleTitleClick()}
        status={data.isConnected}
        statusColor={Colors.status[EMeterColor[data.isConnected]]}
      >

        <NumberDisplay
          name="A相电压" value={data.voltageA === '-' ? '-' : parseFloat(data.voltageA).toFixed(1)} unit="V"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="VoltageA" linkable/>
        <NumberDisplay
          name="B相电压" value={data.voltageB === '-' ? '-' : parseFloat(data.voltageB).toFixed(1)} unit="V"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="VoltageB" linkable/>
        <NumberDisplay
          name="C相电压" value={data.voltageC === '-' ? '-' : parseFloat(data.voltageC).toFixed(1)} unit="V"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="VoltageC" linkable/>
        <NumberDisplay
          name="A相电流" value={data.currentA === '-' ? '-' : parseFloat(data.currentA).toFixed(1)} unit="A"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="CurrentA" linkable/>
        <NumberDisplay
          name="B相电流" value={data.currentB === '-' ? '-' : parseFloat(data.currentB).toFixed(1)} unit="A"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="CurrentB" linkable/>
        <NumberDisplay
          name="C相电流" value={data.currentC === '-' ? '-' : parseFloat(data.currentC).toFixed(1)} unit="A"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="CurrentC" linkable/>
        <Devider isHidden/>
        <NumberDisplay
          name="总电能" value={data.electricity === '-' ? '-' : parseFloat(data.electricity).toFixed(1)} unit="kW·h"
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="Electricity" linkable/>
        <NumberDisplay
          name="总有功功率" value={data.power === '-' ? '-' : parseFloat(data.power).toFixed(1)} deviceType="powerSwap"
          deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="Power" linkable/>
        <NumberDisplay
          name="总功率因素" value={data.powerFactor === '-' ? '-' : parseFloat(data.powerFactor).toFixed(1)}
          deviceType="powerSwap" deviceId={deviceId}
          searchType="ELECTRIC_METER" electricMeterId={index + 1} column="PowerFactor" linkable unit=" "/>
        {/* <Devider/>
                <TextDisplay name="是否连通" value={data.isConnected}/>*/}

      </SubsystemInfo>
    )
  }





}