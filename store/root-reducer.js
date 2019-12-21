import { combineReducers } from 'redux'

import { colors, sort } from '../components/color-list'
import { signin } from '../components/signin'
import { isSiderCollapsed } from '../components/sider'
import { favorite, favoriteButton, watchButton } from '../components/favorite'
import { devices } from '../components/device-list'
import { basicInfo } from '../components/basic-info'
import { alarms } from '../components/alarm'
import { serviceInfos  } from '../components/service-info'
import { history } from '../components/realtime/history'

const rootReducer = combineReducers({
  signin,
  colors,
  sort,
  isSiderCollapsed,
  favorite,
  favoriteButton,
  watchButton,
  devices,
  basicInfo,
  alarms,
  serviceInfos,
  history,
})

export default rootReducer