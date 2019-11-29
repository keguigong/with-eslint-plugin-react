/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useContext, useState } from 'react'
import { Button, Flex, Badge, Box } from '../components/common'
import MainContent from '../components/widget/main-content'
import Header from './header'
import Sider from './sider'
import UserContext from '../components/user-context'

import { ListNarrow, ListWide } from '../components/icon/general'

import {
  DeviceListItem,
  IconButton,
  ButtonGroup,
} from '../components/widget'

export default () => {
  const { isSiderCollapsed } = useContext(UserContext)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return <Flex>
    <div sx={{
      position: 'relative',
      width: isSiderCollapsed ? 148 : 284
    }}>
      <Flex sx={{
        height: '100vh',
        position: 'fixed'
      }}>
        <Header />
        <Sider />
      </Flex>
    </div>
    <MainContent>
      <Flex>
        <Box sx={{ flexGrow: 1 }}>
          {deviceTypeArr.map((item, index) => (
            <Button
              isSelected={index === selectedIndex}
              key={index}
              white
              isDisabled={!item.deviceCount}
              onClick={() => setSelectedIndex(index)}
              overrideCSS={{
                ml: 2
              }}
            >
              {item.deviceTypeName}
              <Badge sx={{ ml: 2, backgroundColor: 'secondary' }}>{item.deviceCount || 0}</Badge>
            </Button>
          ))}
        </Box>
        <IconButton white />
        <ButtonGroup>
          <IconButton white icon={<ListWide />} />
          <IconButton white icon={<ListNarrow />} />
        </ButtonGroup>
      </Flex>
      {deviceListArr.map((item, index) => (
        <DeviceListItem key={index} state={item} />
      ))}
    </MainContent>
  </Flex>
}

const deviceTypeArr = [
  {
    deviceType: 'PowerSwap',
    deviceTypeName: '换电站',
    deviceCount: 13
  },
  {
    deviceType: 'PowerMobile',
    deviceTypeName: '充电车',
    deviceCount: 4
  },
  {
    deviceType: 'PowerStorage',
    deviceTypeName: '储能站',
    deviceCount: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceTypeName: '超充站',
    deviceCount: 20
  },
  {
    deviceType: 'PowerHome',
    deviceTypeName: '家充桩',
    deviceCount: 5
  },
  {
    deviceType: 'SmartBatteryModule',
    deviceTypeName: '智能模组',
    deviceCount: 2356
  },
]

const deviceListArr = [
  {
    deviceType: 'PowerSwap',
    description: 'NIO Power 换电站 宁波洲港酒店',
    deviceId: 'PS-NIO-0668172d-9d2110db',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerSwap',
    description: 'NIO Power 换电站 石家庄富力洲际酒店',
    deviceId: 'PS-NIO-086681b0-616fa446',
    networkState: 0,
    alarmState: 1,
    workState: 0
  },
  {
    deviceType: 'PowerStorage',
    description: '广州南洲路城投储能电站',
    deviceId: 'PESS-NIO-7d0b1204-efcc932b',
    networkState: 1,
    alarmState: 2,
    workState: 3
  },
  {
    deviceType: 'PowerCharger',
    description: '上海五角场福庆国定大厦蔚来超充站-2号桩',
    deviceId: 'NPC-NIO-119ba721-8a52582c',
    networkState: 0,
    alarmState: 0,
    workState: 1
  },
  {
    deviceType: 'PowerCharger',
    description: '上海浦东机场嘉驰物流蔚来超充站-2号柜',
    deviceId: 'NPC-NIO-383bf658-98e9cb27',
    networkState: 255,
    alarmState: 0,
    workState: 2
  },
  {
    deviceType: 'PowerMobile',
    description: '越野版充电车 苏A00K0J',
    deviceId: 'PM-NIO-35e07561-f2d4edb3',
    networkState: 0,
    alarmState: 1,
    workState: 0
  },
  {
    deviceType: 'SmartBatteryModule',
    description: '智能模组 SBM-AS3455',
    deviceId: 'SBM-NIO-35e07561-f2d4edb3',
    networkState: 0,
    alarmState: 0,
    workState: 1
  },
]