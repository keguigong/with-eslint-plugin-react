const batteryOptions = [
  {
    key: '0',
    name: 'AvgCellVoltage',
    value: 'AvgCellVoltage'
  },
  {
    key: '1',
    name: 'AvgPackTemp',
    value: 'AvgPackTemp'
  },
  {
    key: '2',
    name: 'BatteryAbortControlsReason',
    value: 'BatteryAbortControlsReason'
  },
  {
    key: '3',
    name: 'BatteryBmsState',
    value: 'BatteryBmsState'
  },
  {
    key: '4',
    name: 'BatteryCapturedFault',
    value: 'BatteryCapturedFault'
  },
  {
    key: '5',
    name: 'BatteryCellInfo',
    value: 'BatteryCellInfo'
  },
  {
    key: '6',
    name: 'BatteryChargeMode',
    value: 'BatteryChargeMode'
  },
  {
    key: '7',
    name: 'BatteryChargeState',
    value: 'BatteryChargeState'
  },
  {
    key: '8',
    name: 'BatteryInhibitControlsReason',
    value: 'BatteryInhibitControlsReason'
  },
  {
    key: '9',
    name: 'BatteryWithDeviceId',
    value: 'BatteryWithDeviceId'
  },
  {
    key: '10',
    name: 'BmsBatteryDcChargingVoltageMax',
    value: 'BmsBatteryDcChargingVoltageMax'
  },
  {
    key: '11',
    name: 'BmsBatteryDcTotalVoltageMax',
    value: 'BmsBatteryDcTotalVoltageMax'
  },
  {
    key: '12',
    name: 'BmsBatteryDynamicChargingPowerLimit',
    value: 'BmsBatteryDynamicChargingPowerLimit'
  },
  {
    key: '13',
    name: 'BmsBatteryDynamicDischargingPowerLimit',
    value: 'BmsBatteryDynamicDischargingPowerLimit'
  },
  {
    key: '14',
    name: 'BmsBatteryInnerHighVoltageConnectorStatus',
    value: 'BmsBatteryInnerHighVoltageConnectorStatus'
  },
  {
    key: '15',
    name: 'BmsBatteryLongTimeChargingPowerLimit',
    value: 'BmsBatteryLongTimeChargingPowerLimit'
  },
  {
    key: '16',
    name: 'BmsBatteryLongTimeDischargingPowerLimit',
    value: 'BmsBatteryLongTimeDischargingPowerLimit'
  },
  {
    key: '17',
    name: 'BmsBatteryMaxPermittedCellVoltage',
    value: 'BmsBatteryMaxPermittedCellVoltage'
  },
  {
    key: '18',
    name: 'BmsBatteryMaxPermittedCurrent',
    value: 'BmsBatteryMaxPermittedCurrent'
  },
  {
    key: '19',
    name: 'BmsBatteryMaxPermittedTemperature',
    value: 'BmsBatteryMaxPermittedTemperature'
  },
  {
    key: '20',
    name: 'BmsBatteryMaxPermittedVoltage',
    value: 'BmsBatteryMaxPermittedVoltage'
  },
  {
    key: '21',
    name: 'BmsBatteryMinPermittedVoltage',
    value: 'BmsBatteryMinPermittedVoltage'
  },
  {
    key: '22',
    name: 'BmsBatteryNominalEnergy',
    value: 'BmsBatteryNominalEnergy'
  },
  {
    key: '23',
    name: 'BmsBatteryPackCapacity',
    value: 'BmsBatteryPackCapacity'
  },
  {
    key: '24',
    name: 'BmsBatteryRatedCapacity',
    value: 'BmsBatteryRatedCapacity'
  },
  {
    key: '25',
    name: 'BmsBatteryRatedVoltage',
    value: 'BmsBatteryRatedVoltage'
  },
  {
    key: '26',
    name: 'BmsBatteryShortTimeChargingPowerLimit',
    value: 'BmsBatteryShortTimeChargingPowerLimit'
  },
  {
    key: '27',
    name: 'BmsBatteryShortTimeDischargingPowerLimit',
    value: 'BmsBatteryShortTimeDischargingPowerLimit'
  },
  {
    key: '28',
    name: 'BmsBatteryStopChargingSoc',
    value: 'BmsBatteryStopChargingSoc'
  },
  {
    key: '29',
    name: 'BmsCellTemperatureStandardDeviation',
    value: 'BmsCellTemperatureStandardDeviation'
  },
  {
    key: '30',
    name: 'BmsCgw274',
    value: 'BmsCgw274'
  },
  {
    key: '31',
    name: 'BmsChargeCurrentLimit',
    value: 'BmsChargeCurrentLimit'
  },
  {
    key: '32',
    name: 'BmsChargePowerLimitDynamic',
    value: 'BmsChargePowerLimitDynamic'
  },
  {
    key: '33',
    name: 'BmsDischargePowerLimitDynamic',
    value: 'BmsDischargePowerLimitDynamic'
  },
  {
    key: '34',
    name: 'BmsInsulationResistanceValue',
    value: 'BmsInsulationResistanceValue'
  },
  {
    key: '35',
    name: 'BmsNormalCapacity',
    value: 'BmsNormalCapacity'
  },
  {
    key: '36',
    name: 'BmsRequestChargeCurrent',
    value: 'BmsRequestChargeCurrent'
  },
  {
    key: '37',
    name: 'BmsRequestChargeVoltage',
    value: 'BmsRequestChargeVoltage'
  },
  {
    key: '38',
    name: 'BmsVersion',
    value: 'BmsVersion'
  },
  {
    key: '39',
    name: 'CarDiscern',
    value: 'CarDiscern'
  },
  {
    key: '41',
    name: 'ChargeableEnergy',
    value: 'ChargeableEnergy'
  },
  {
    key: '42',
    name: 'ChargedEnergy',
    value: 'ChargedEnergy'
  },
  {
    key: '43',
    name: 'ChargingEndTime',
    value: 'ChargingEndTime'
  },
  {
    key: '44',
    name: 'ChargingStartTime',
    value: 'ChargingStartTime'
  },
  {
    key: '45',
    name: 'Current',
    value: 'Current'
  },
  {
    key: '46',
    name: 'CustomerUsageSoc',
    value: 'CustomerUsageSoc'
  },
  {
    key: '47',
    name: 'DischargedEnergy',
    value: 'DischargedEnergy'
  },
  {
    key: '48',
    name: 'DischargingStartTimestamp',
    value: 'DischargingStartTimestamp'
  },
  {
    key: '49',
    name: 'EnergyAvailable',
    value: 'EnergyAvailable'
  },
  {
    key: '50',
    name: 'ExpectedChargingReadyTime',
    value: 'ExpectedChargingReadyTime'
  },
  {
    key: '51',
    name: 'FaultLevel',
    value: 'FaultLevel'
  },
  {
    key: '52',
    name: 'HwVersion',
    value: 'HwVersion'
  },
  {
    key: '53',
    name: 'InletWaterTemp',
    value: 'InletWaterTemp'
  },
  {
    key: '54',
    name: 'IsBalanced',
    value: 'IsBalanced'
  },
  {
    key: '55',
    name: 'IsBatteryChargePermit',
    value: 'IsBatteryChargePermit'
  },
  {
    key: '56',
    name: 'IsBatteryChargeReady',
    value: 'IsBatteryChargeReady'
  },
  {
    key: '57',
    name: 'IsBatteryReachTargetCellVoltage',
    value: 'IsBatteryReachTargetCellVoltage'
  },
  {
    key: '58',
    name: 'IsBatteryReachTargetSoc',
    value: 'IsBatteryReachTargetSoc'
  },
  {
    key: '59',
    name: 'IsBatteryReachTargetVoltage',
    value: 'IsBatteryReachTargetVoltage'
  },
  {
    key: '60',
    name: 'IsChargeable',
    value: 'IsChargeable'
  },
  {
    key: '61',
    name: 'IsDisconnectHighVoltageRelayRequested',
    value: 'IsDisconnectHighVoltageRelayRequested'
  },
  {
    key: '62',
    name: 'IsHighVoltageLocked',
    value: 'IsHighVoltageLocked'
  },
  {
    key: '63',
    name: 'IsolationLevel',
    value: 'IsolationLevel'
  },
  {
    key: '64',
    name: 'MaxCellVoltage',
    value: 'MaxCellVoltage'
  },
  {
    key: '65',
    name: 'MaxCellVoltageNum',
    value: 'MaxCellVoltageNum'
  },
  {
    key: '66',
    name: 'MaxPackTemp',
    value: 'MaxPackTemp'
  },
  {
    key: '67',
    name: 'MaxPackTempNum',
    value: 'MaxPackTempNum'
  },
  {
    key: '68',
    name: 'MinCellVoltage',
    value: 'MinCellVoltage'
  },
  {
    key: '69',
    name: 'MinCellVoltageNum',
    value: 'MinCellVoltageNum'
  },
  {
    key: '70',
    name: 'MinPackTemp',
    value: 'MinPackTemp'
  },
  {
    key: '71',
    name: 'MinPackTempNum',
    value: 'MinPackTempNum'
  },
  {
    key: '72',
    name: 'OutletWaterTemp',
    value: 'OutletWaterTemp'
  },
  {
    key: '73',
    name: 'Power',
    value: 'Power'
  },
  {
    key: '74',
    name: 'Soc',
    value: 'Soc'
  },
  {
    key: '75',
    name: 'SoftVersion',
    value: 'SoftVersion'
  },
  {
    key: '76',
    name: 'Soh',
    value: 'Soh'
  },
  {
    key: '77',
    name: 'TargetSoc',
    value: 'TargetSoc'
  },
  {
    key: '78',
    name: 'Voltage',
    value: 'Voltage'
  },
  {
    key: '79',
    name: 'WorkState',
    value: 'WorkState'
  }
]

export default batteryOptions
