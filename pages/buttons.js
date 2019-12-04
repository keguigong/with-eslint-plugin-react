/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { MainContent } from '../components/widget'
import { Button, Badge } from '../components/common'
import { PowerMobile } from '../components/icon/devices'
import { IconButton} from '../components/widget'

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return <MainContent>
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
    <br />
    <Button>default</Button>
    <Button isDisabled>default</Button>
    <Button primary>Primary</Button>
    <Button primary isDisabled>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button secondary isDisabled>secondary</Button>
    <Button white>White</Button>
    <Button white isDisabled>White</Button>
    <Button action>Action</Button>
    <Button action isDisabled>Action</Button>
    <Button link>link</Button>
    <Button link isDisabled>link</Button>
    <Button isSelected>isSelected</Button>
    <Button isSelected isDisabled>isSelected</Button>
    <br />
    <IconButton/>
    <IconButton action/>
    <Button arrow href='input'>Go to input</Button>
    <Button secondary icon={<PowerMobile />}>Power Mobile</Button>
  </MainContent>

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