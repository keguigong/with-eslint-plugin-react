const commonSider = [
  {
    href: '',
    pageName: 'overview'
  },
  {
    href: 'list',
    pageName: 'list'
  },
]

const commonSider1 = [
  {
    href: 'history',
    pageName: 'history'
  },
  {
    href: 'logs',
    pageName: 'logs'
  },
  {
    href: 'alarms',
    pageName: 'alarms'
  },
  {
    href: 'worksheets',
    pageName: 'worksheets'
  },
  {
    href: 'analysis',
    pageName: 'analysis'
  },
  {
    href: 'ota',
    pageName: 'ota'
  },
  {
    href: 'config',
    pageName: 'config'
  },
  {
    href: 'auth-config',
    pageName: 'authConfig'
  },
]

const deviceTypeSiderMap = [
  {
    deviceType: 'PowerCharger',
    payload: [
      ...commonSider,
      ...commonSider1,
      {
        href: 'csv',
        pageName: 'csv'
      }
    ]
  },
  {
    deviceType: 'PowerSwap',
    payload: [
      ...commonSider,
      ...commonSider1,
      {
        href: 'battery-history',
        pageName: 'batteryHistory'
      }
    ]
  }
]

const getDeviceTypeSiderArr = (deviceType) => {
  let payload = []
  deviceTypeSiderMap.map(item => {
    if (item.deviceType === deviceType) {
      payload = [...item.payload]
    }
  })
  return payload
}

export { deviceTypeSiderMap, getDeviceTypeSiderArr }