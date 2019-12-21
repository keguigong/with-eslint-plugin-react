/** @jsx jsx */
import { jsx } from '@emotion/core'
import { NumberDisplay, TextDisplay } from './DataDisplay'
import SubsystemInfo from './SubsystemInfo'
import Devider from './Devider'
import ChargerStateNowMap from './maps/ChargerStateNow'
import ChargerStatusColor from './maps/ChargerStatusColor'
import Colors from './styles/Color'

const ConnectorInfo = props => {
  const {
    data,
    index,
    deviceId,
    connectorId,
    isVisible,
    isCharging,
    ...rest
  } = props

  let chargerControlUnit = data.realtimeInfo.chargerControlUnit[index]
  let bmsChargeData = data.realtimeInfo.bmsChargeData[index]
  let statusInfo = data.statusInfo.connectorStatus[index]
  let serviceInfo = data.serviceInfo[index]

  return (
    <SubsystemInfo
      title={`${index + 1}号充电枪`}
      subTitle={connectorId}
      status={ChargerStateNowMap[statusInfo['chargeStateNow']]}
      statusColor={Colors.status[ChargerStatusColor[statusInfo['chargeStateNow']]]}
      isVisible={isVisible}
      isCharging={isCharging}
      handleTitleClick={() => props.handleTitleClick()}
      isChargerConnected={statusInfo.cc1State == 1 ? true : false}
      isCc1StateVisible
    >
      <NumberDisplay name="输出电压" value={chargerControlUnit.outputVolt ? chargerControlUnit.outputVolt.toFixed(1) : null} unit="V" deviceType="PowerChargers"
        deviceId={deviceId} chargeConnector={connectorId} searchType="CHARGER_CONTROL_UNIT" column="OutPutVolt" linkable />
      {/* <NumberDisplay name="输出电压" value={chargerControlUnit.outputVolt ? chargerControlUnit.outputVolt.toFixed(1) : null} unit="V" deviceType="PowerChargers"/> */}
      <NumberDisplay name="输出电流" value={chargerControlUnit.outputCurrent ? chargerControlUnit.outputCurrent.toFixed(1) : null} unit="A" deviceType="PowerChargers"
        deviceId={deviceId} chargeConnector={connectorId} searchType="CHARGER_CONTROL_UNIT" column="OutPutCurrent" linkable />
      <NumberDisplay name="输出功率" value={(chargerControlUnit.outputCurrent * chargerControlUnit.outputVolt / 1000).toFixed(1)} unit="kW" />
      <Devider isHidden />
      <NumberDisplay name="BMS请求电压" value={bmsChargeData.bmsRequestVoltage} unit="V" />
      <NumberDisplay name="BMS请求电流" value={bmsChargeData.bmsRequestCurrent} unit="A" />
      <NumberDisplay name="充电电量" value={serviceInfo.realtimeChargedEnergy} unit="kWh" />
      <NumberDisplay name="SOC" value={bmsChargeData.socNow} unit="%" deviceType="battery"
        deviceId={connectorId} column="Soc" linkable />
      <Devider />
      <TextDisplay name="充电枪编号" value={bmsChargeData.id} unit="" />
      <TextDisplay name="车辆识别码" value={bmsChargeData.carDiscern} unit="" />
      <TextDisplay name="BMS软件版本" value={bmsChargeData.bmsSoftver} unit="" />
      <TextDisplay name="结束原因" value={serviceInfo.serviceFinishReason} unit="" />
    </SubsystemInfo>
  )
}

export default ConnectorInfo