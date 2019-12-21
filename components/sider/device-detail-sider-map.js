const commonSider = [
  {
    href: '',
    pageName: 'overview'
  },
  {
    href: 'realtime',
    pageName: 'realtime'
  },
  {
    href: 'alarms',
    pageName: 'alarms'
  },
  {
    href: 'service-infos',
    pageName: 'serviceInfos'
  }
]

const commonSider1 = [
  {
    href: 'logs',
    pageName: 'logs'
  },
  {
    href: 'worksheets',
    pageName: 'worksheets'
  },
  // {
  //   href: 'config',
  //   pageName: 'config'
  // }
]

const deviceDetailSiderMap = [
  {
    deviceType: 'PowerCharger',
    payload: [
      ...commonSider,
      ...commonSider1
    ]
  },
  {
    deviceType: 'PowerSwap',
    payload: [
      ...commonSider,
      ...commonSider1,
      {
        href: 'config-infos',
        pageName: 'configInfos'
      },
    ]
  }
]

const getDeviceDetailSiderArr = (deviceType) => {
  let payload = []
  deviceDetailSiderMap.map(item => {
    if (item.deviceType === deviceType) {
      payload = [...item.payload]
    }
  })
  return payload
}

export { deviceDetailSiderMap, getDeviceDetailSiderArr }