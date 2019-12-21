const transformAuthKeys = (auth) => {
  let tmpAuth = []
  auth.map(item => {
    let tmpGroup = {}
    if (typeof groupMap[item.group] !== 'undefined') {
      tmpGroup.deviceType = groupMap[item.group]
      let tmpPerms = []
      item.perms.map(perm => {
        if (typeof permsMap[perm] !== 'undefined') {
          tmpPerms = [...tmpPerms, permsMap[perm]]
        }
      })
      tmpGroup.payload = tmpPerms
    }
    tmpAuth = [...tmpAuth, tmpGroup]
  })
  return tmpAuth
}

export default transformAuthKeys

const groupMap = {
  nioPowerCharger: 'PowerCharger',
  powerSwap: 'PowerSwap'
}

const permsMap = {
  'overview': 'overview',
  'realtime': 'realtime',
  'log': 'logs',
  'alarm': 'alarms',
  'worksheet': 'worksheets',
  'history': 'history',
  'auth-config': 'authConfig',
  'analysis': 'analysis',
  'ota': 'ota',
  'config': 'config'
}