/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '../common'
import { Function } from '../icon/nav'
import { alarmStateMap, networkStateMap, workStateMap } from '../device-list'

export default ({
  type = 'network',
  state,
  ...rest
}) => {
  let stateMap
  switch (type) {
    case 'network':
      stateMap = networkStateMap
      break
    case 'alarm': 
      stateMap = alarmStateMap
      break
    case 'work': 
      stateMap = workStateMap
      break
    default:
      stateMap = networkStateMap
      break
  }

  const props = {
    stateObj: stateMap[state] || stateMap[255]
  }

  return <StateIndicator
    color={props.stateObj.color}
    icon={props.stateObj.icon}
  >
    {props.stateObj.text}
  </StateIndicator>
}

const StateIndicator = ({
  color,
  large,
  icon,
  children,
  ...rest
}) => {
  const props = {
    icon: icon || <Function />,
    children: children || '状态'
  }

  return <Flex column center sx={{
    height: 70,
    minWidth: 70,
    flex: 1,
    color: t => `${t.colors.icon[color] || 'icon.disabled'}`,
    border: 'none',
    cursor: 'normal',
    '& svg': {
      width: 30,
      height: 30
    },
    ':not(:last-of-type)': {
      borderRight: t => `1px solid ${t.colors.hover}`
    }
  }}>
    {props.icon}
    <p sx={{
      variant: 'text.p_disabled',
      fontSize: [0, 1],
      mt: 1,
      color: t => `${t.colors.icon[color] || 'icon.disabled'}`
    }}>{props.children}</p>
  </Flex>
}