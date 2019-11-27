/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../common'
import { PowerSwap, PowerMobile, PowerStorage, PowerCharger, PowerHome, SmartBatteryModule } from '../icon/devices'
import { Home, Function } from '../icon/nav'

export default ({
  large,
  type,
  ...rest
}) => {
  const props = {
    icon: iconMap[type] || <Function />,
    color: colorMap[type] || 'default',
    ...rest
  }

  return (
    <Flex
      center
      sx={{
        ...{
          height: 48,
          width: 48,
          borderRadius: 5,
          color: `avatar.fill.${props.color}`,
          backgroundColor: `avatar.background.${props.color}`,
        },
        ...(large && {
          '& svg': {
            height: 32,
            width: 32
          }
        })
      }}
      {...rest}
    >
      {props.icon}
    </Flex >
  )
}

const colorMap = {
  Function: 'default',
  Home: 'default',
  PowerSwap: 'blue',
  PowerMobile: 'purple',
  PowerStorage: 'green',
  PowerCharger: 'red',
  PowerHome: 'orange',
  SmartBatteryModule: 'tea',
}

const iconMap = {
  Function: Function,
  Home: <Home />,
  PowerSwap: <PowerSwap />,
  PowerMobile: <PowerMobile />,
  PowerStorage: <PowerStorage />,
  PowerCharger: <PowerCharger />,
  PowerHome: <PowerHome />,
  SmartBatteryModule: <SmartBatteryModule />,
}