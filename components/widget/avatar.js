/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../common'
import { Icon } from '../icon/icon-wrapper'

const Avatar = ({
  large,
  type,
  ...rest
}) => {
  const props = {
    icon: type,
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
      <Icon name={props.icon}/>
    </Flex >
  )
}

export default Avatar

const colorMap = {
  Function: 'default',
  Home: 'default',
  PowerSwap: 'blue',
  PowerMobile: 'purple',
  PowerStorage: 'green',
  PowerCharger: 'red',
  PowerHome: 'orange',
  SmartBatteryModule: 'tea',
  Account: 'default'
}