/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Component} from 'react'
import { NumberDisplay, TextDisplay } from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'

import MoreInfo from './MoreInfo'
import Colors from './styles/Color'
import {PowerSwapStateColor} from './maps/powerSwapStateColor'


export default class PowerSwapDeviceinfo extends Component {
  constructor(props) {
    super(props)
  }

  handleTitleClick = () => {
    this.props.handleTitleClick()
  }

  render() {
    const {data, index, deviceId} = this.props

    switch (data.batteryState) {
      case 'BWS_FREE':
        data.batteryState = '空闲'
        break

      case '0':
        data.batteryState = '空闲'
        break

      case 'BWS_CHARGING':
        data.batteryState = '正在充电'
        break

      case '1':
        data.batteryState = '正在充电'
        break

      case 'BWS_DISCHARGING' :
        data.batteryState = '正在放电'
        break

      case '2' :
        data.batteryState = '正在放电'
        break

      case 'BWS_BEING_REPLACED' :
        data.batteryState = '换电中'
        break

      case '3' :
        data.batteryState = '换电中'
        break

      case 'BWS_CHARGING_COMPLETE' :
        data.batteryState = '充电完成'
        break

      case '4' :
        data.batteryState = '充电完成'
        break

      case 'BWS_OTHER' :
        data.batteryState = '其他'
        break

      case '254' :
        data.batteryState = '其他'
        break

      case 'BWS_UNKNOWN' :
        data.batteryState = '未知'
        break

      case '255' :
        data.batteryState = '未知'
        break

      case 'undefined':
        data.batteryState = '未检测到电池'
        break
    }

    switch (data.batteryId) {
      case '':
        data.batteryState = '未检测到电池'
        break

      case ' ':
        data.batteryState = '未检测到电池'
        break

    }

    //该栏中文为直译，需要询问
    switch (data.batteryFaultLevel) {
      case 'BFL_UNDETERMINED':
        data.batteryFaultLevel = '未知'
        break

      case '0':
        data.batteryFaultLevel = '未知'
        break

      case 'BFL_NO_ERROR':
        data.batteryFaultLevel = '正常'
        break

      case '1':
        data.batteryFaultLevel = '正常'
        break

      case 'INFORMATION':
        data.batteryFaultLevel = '消息'
        break

      case '2':
        data.batteryFaultLevel = '消息'
        break

      case 'WARNING':
        data.batteryFaultLevel = '告警'
        break

      case '3':
        data.batteryFaultLevel = '告警'
        break

      case 'ERROR':
        data.batteryFaultLevel = '故障'
        break

      case '4':
        data.batteryFaultLevel = '故障'
        break

      case 'CRITICAL_ERROR':
        data.batteryFaultLevel = '严重故障'
        break

      case '5':
        data.batteryFaultLevel = '严重故障'
        break

      case 'RESERVED':
        data.batteryFaultLevel = '保留位置'
        break

      case '6':
        data.batteryFaultLevel = '保留位置'
        break

      case 'INVALID':
        data.batteryFaultLevel = '无效'
        break

      case '7':
        data.batteryFaultLevel = '无效'
        break
    }

    //该栏中文为直译，需要询问
    switch (data.isolationLevel) {
      case 'IL_UNDETERMINE':
        data.isolationLevel = '未知'
        break

      case 'IL_NO_FAULT':
        data.isolationLevel = '正常'
        break

      case 'IL_GENERAL_FAULT':
        data.isolationLevel = '故障'
        break

      case 'IL_SERIOUS_FAULT':
        data.isolationLevel = '严重故障'
        break

      case 'IL_RESERVED_1':
        data.isolationLevel = '预留位置1'
        break

      case 'IL_RESERVED_2':
        data.isolationLevel = '预留位置2'
        break

      case 'IL_RESERVED_3':
        data.isolationLevel = '预留位置3'
        break

      case 'IL_INVALID':
        data.isolationLevel = '无效'
        break
    }

    //该栏中文为直译，需要询问
    switch (data.usageState) {
      case 'BUS_ENABLED':
        data.usageState = '可用'
        break

      case 'BUS_DISABLED':
        data.usageState = '不可用'
        break
    }

    switch (data.isHighVoltageLocked) {
      case true:
        data.isHighVoltageLocked = '是'
        break

      case false:
        data.isHighVoltageLocked = '否'
        break
    }

    switch (data.isBalanced) {
      case true:
        data.isBalanced = '是'
        break

      case false:
        data.isBalanced = '否'
        break
    }

    switch (data.bmsBatteryInnerHighVoltageConnectorStatus) {
      case 0:
        data.bmsBatteryInnerHighVoltageConnectorStatus = '未知'
        break
      case 1:
        data.bmsBatteryInnerHighVoltageConnectorStatus = '断开'
        break
      case 2:
        data.bmsBatteryInnerHighVoltageConnectorStatus = '预冲'
        break
      case 3:
        data.bmsBatteryInnerHighVoltageConnectorStatus = '闭合'
        break
    }

    switch (data.bmsPackCapacityType) {
      case 0:
        data.bmsPackCapacityType = '50 AH'
        break
      case 1:
        data.bmsPackCapacityType = '102 AH'
        break
      case 2:
        data.bmsPackCapacityType = '120 AH'
        break
      case 3:
        data.bmsPackCapacityType = '102x'
        break
    }

    switch (data.batteryType) {
      case '1':
        data.batteryType = '铅酸电池'
        break
      case '2':
        data.batteryType = '镍氢电池'
        break
      case '3':
        data.batteryType = '磷酸铁锂电池'
        break
      case '4':
        data.batteryType = '锰酸锂电池'
        break
      case '5':
        data.batteryType = '钴酸锂电池'
        break
      case '6':
        data.batteryType = '三元材料电池'
        break
      case '7':
        data.batteryType = '聚合物锂离子电池'
        break
      case '8':
        data.batteryType = '钛酸锂电池'
        break
      case 'FFH':
        data.batteryType = '其他电池'
        break
    }

    switch (data.slotWorkState) {
      case '0':
        data.slotWorkState = '空闲'
        break
      case '1':
        data.slotWorkState = '充电中'
        break
      case '2':
        data.slotWorkState = '充电完成'
        break
      case '3':
        data.slotWorkState = '未知'
        break
      case 'SWS_UNKNOWN':
        data.slotWorkState = '未检测到电池'
        break
      case '255':
        data.slotWorkState = '未检测到电池'
        data.batteryState = '未检测到电池'
        break

    }


    return (
      <SubsystemInfo
        {...this.props}
        title={`${index + 1}号电池槽`}
        subTitle={data.batteryId}
        handleTitleClick={() => this.handleTitleClick()}
        status={data.slotWorkState}
        statusColor={Colors.status[PowerSwapStateColor[data.slotWorkState]]}
      >

        <TextDisplay
          name="槽工作状态" value={data.slotWorkState} deviceId={deviceId} deviceType="powerSwap"
          searchType="SLOT" column="WorkState" slotId={index + 1}/>
        <TextDisplay
          name="接触阻值" value={data.contactResistant}/>

        <Devider/>

        <NumberDisplay
          name="总电压" value={data.voltage === '-' ? '-' : parseFloat(data.voltage).toFixed(1)} unit="V"
          deviceId={data.batteryId} deviceType="battery"
          column="Voltage" linkable/>
        <NumberDisplay
          name="总电流" value={data.current === '-' ? '-' : parseFloat(data.current).toFixed(1)} unit="A"
          deviceId={data.batteryId} deviceType="battery"
          column="Current" linkable/>
        <NumberDisplay
          name="总功率" value={data.power === '-' ? '-' : parseFloat(data.power).toFixed(1)}
          deviceId={data.batteryId} deviceType="battery"
          column="Power" linkable/>
        <NumberDisplay
          name="用户可用Soc"
          value={data.customerUsageSoc === '-' ? '-' : parseFloat(data.customerUsageSoc).toFixed(1)}
          unit="%" deviceId={data.batteryId} deviceType="battery"
          column="CustomerUsageSoc" linkable/>
        <NumberDisplay
          name="当前SoC" value={data.currentSoc === '-' ? '-' : parseFloat(data.currentSoc).toFixed(1)}
          unit="%" deviceId={data.batteryId} deviceType="battery"
          column="Soc" linkable/>

        <Devider isHidden/>
        <TextDisplay
          name="目标SoC" value={data.targetSoc === '-' ? '-' : parseFloat(data.targetSoc).toFixed(1)} unit="%"
          deviceId={data.batteryId} deviceType="battery"
          column="TargetSoc" linkable/>
        <TextDisplay
          name="电池工作状态" value={data.batteryState} deviceId={data.batteryId} deviceType="battery"
          column="WorkState"/>
        <TextDisplay
          name="电池故障等级" value={data.batteryFaultLevel} deviceId={data.batteryId} deviceType="battery"
          column="FaultLevel"/>
        <TextDisplay
          name="绝缘等级" value={data.isolationLevel} deviceId={data.batteryId} deviceType="battery"
          column="IsolationLevel"/>
        <TextDisplay
          name="绝缘阻值"
          value={data.bmsInsulationResistanceValue === '-' ? '-' : parseFloat(data.bmsInsulationResistanceValue).toFixed(1)}
          unit="kΩ" deviceId={data.batteryId} deviceType="battery"
          column="BmsInsulationResistanceValue"/>
        <TextDisplay
          name="BMS版本号" value={data.softwareVersion} deviceId={data.batteryId} deviceType="battery"
          column="BmsVersion"/>
        <TextDisplay
          name="硬件版本" value={data.hardwareVersion} deviceId={data.batteryId} deviceType="battery"
          column="HwVersion"/>
        <MoreInfo>
          <Devider/>


          <TextDisplay
            name="进水温度"
            value={data.inletWaterTemperature === '-' ? '-' : parseFloat(data.inletWaterTemperature).toFixed(1)}
            unit="℃" deviceId={data.batteryId} deviceType="battery"
            column="InletWaterTemp" linkable/>
          <TextDisplay
            name="出水温度"
            value={data.outletWaterTemperature === '-' ? '-' : parseFloat(data.outletWaterTemperature).toFixed(1)}
            unit="℃" deviceId={data.batteryId} deviceType="battery"
            column="OutletWaterTemp" linkable/>
          <TextDisplay
            name="SoH" value={data.soh === '-' ? '-' : parseFloat(data.soh).toFixed(1)} unit="%"
            deviceId={data.batteryId} deviceType="battery"
            column="Soh" linkable/>
          <TextDisplay
            name="电池包平均温度"
            value={data.avgBatteryPackTemperature === '-' ? '-' : parseFloat(data.avgBatteryPackTemperature).toFixed(1)}
            unit="℃" deviceId={data.batteryId} deviceType="battery"
            column="AvgPackTemp" linkable/>
          <TextDisplay
            name="电池包最高温度"
            value={data.maxBatteryPackTemperature === '-' ? '-' : parseFloat(data.maxBatteryPackTemperature).toFixed(1)}
            unit="℃" deviceId={data.batteryId} deviceType="battery"
            column="MaxPackTemp" linkable/>
          <TextDisplay
            name="电池包最低温度"
            value={data.minBatteryPackTemperature === '-' ? '-' : parseFloat(data.minBatteryPackTemperature).toFixed(1)}
            unit="℃" deviceId={data.batteryId} deviceType="battery"
            column="MinPackTemp" linkable/>
          <TextDisplay
            name="单体平均电压"
            value={data.avgCellVoltage === '-' ? '-' : parseFloat(data.avgCellVoltage).toFixed(3)} unit="V"
            deviceId={data.batteryId} deviceType="battery"
            column="AvgCellVoltage" linkable/>
          <TextDisplay
            name="单体最高电压"
            value={data.maxCellVoltage === '-' ? '-' : parseFloat(data.maxCellVoltage).toFixed(3)} unit="V"
            deviceId={data.batteryId} deviceType="battery"
            column="MaxCellVoltage" linkable/>
          <TextDisplay
            name="单体最低电压"
            value={data.minCellVoltage === '-' ? '-' : parseFloat(data.minCellVoltage).toFixed(3)} unit="V"
            deviceId={data.batteryId} deviceType="battery"
            column="MinCellVoltage" linkable/>
          <TextDisplay
            name="电池可用能量"
            value={data.availableEnergy === '-' ? '-' : parseFloat(data.availableEnergy).toFixed(1)}
            unit="kWh" deviceId={data.batteryId} deviceType="battery"
            column="EnergyAvailable" linkable/>
          <TextDisplay
            name="电池额定能量"
            value={data.bmsNormalCapacity === '-' ? '-' : parseFloat(data.bmsNormalCapacity).toFixed(1)}
            unit="kWh" deviceId={data.batteryId} deviceType="battery"
            column="BmsNormalCapacity" linkable/>
          <TextDisplay
            name="电池额定容量"
            value={data.bmsBatteryRatedCapacity === '-' ? '-' : parseFloat(data.bmsBatteryRatedCapacity).toFixed(1)}
            unit="Ah" deviceId={data.batteryId} deviceType="battery"
            column="BmsBatteryRatedCapacity" linkable/>
          <TextDisplay
            name="可充功率限值"
            value={data.bmsDischargePowerLimitDynamic === '-' ? '-' : parseFloat(data.bmsChargePowerLimitDynamic).toFixed(1)}
            deviceId={data.batteryId} deviceType="battery"
            column="BmsChargePowerLimitDynamic" linkable unit="kW"/>
          <TextDisplay
            name="可放功率限值"
            value={data.bmsDischargePowerLimitDynamic === '-' ? '-' : parseFloat(data.bmsDischargePowerLimitDynamic).toFixed(1)}
            deviceId={data.batteryId} deviceType="battery"
            column="BmsDischargePowerLimitDynamic" linkable unit="kW"/>
          <TextDisplay
            name="电池包最高温度检测点" value={data.maxBatteryPackTemperatureNumber} unit="" deviceId={data.batteryId}
            deviceType="battery"
            column="MaxPackTempNum" linkable/>
          <TextDisplay
            name="电池包最低温度检测点" value={data.minBatteryPackTemperatureNumber} unit="" deviceId={data.batteryId}
            deviceType="battery"
            column="MinPackTempNum" linkable/>
          <TextDisplay
            name="最高单体电压编号" value={data.maxCellVoltageNumber} unit="" deviceId={data.batteryId}
            deviceType="battery"
            column="MaxCellVoltageNum" linkable/>
          <TextDisplay
            name="最低单体电压编号" value={data.minCellVoltageNumber} unit="" deviceId={data.batteryId}
            deviceType="battery"
            column="MinCellVoltageNum" linkable/>
          {/*<TextDisplay name="预计当前电池充满时间(分钟)" value={data.estimatedChargingReadyTimestamp} unit="Min"/>*/}
          <TextDisplay
            name="BMS请求充电电流值"
            value={data.bmsRequestChargeCurrent === '-' ? '-' : parseFloat(data.bmsRequestChargeCurrent).toFixed(1)}
            unit="A" deviceId={data.batteryId} deviceType="battery"
            column="BmsRequestChargeCurrent" linkable/>
          <TextDisplay name="国标电池ID" value={data.batteryIdGb} unit=""/>
          <TextDisplay name="电池容量等级" value={data.bmsBatteryPackCapacity}/>
          <TextDisplay name="BMS高压互锁状态" value={data.isHighVoltageLocked}/>
          <TextDisplay name="BMS均衡状态" value={data.isBalanced}/>
          <TextDisplay name="电池可用状态" value={data.usageState}/>
          <TextDisplay name="电池容量类型" value={data.bmsPackCapacityType}/>
          <TextDisplay name="BMS Cgw" value={data.bmsCgw274}/>
          <TextDisplay name="电池材料类型" value={data.batteryType}/>
          <TextDisplay name="BMS电池包内部高压继电器状态" value={data.bmsBatteryInnerHighVoltageConnectorStatus}/>
        </MoreInfo>
        <Devider/>

      </SubsystemInfo>


    )

  }





}