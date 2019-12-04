/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import { Filter } from '../icon/general'
import { alarmStateMap, networkStateMap, workStateMap } from '.'

export default ({
  type = 'network',
  state = 0,
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

  return <StateButton
    large={type !== 'network'}
    color={props.stateObj.color}
    icon={props.stateObj.icon}
  >
    {props.stateObj.text}
  </StateButton>
}

const stateTypeMap = {
  'alarm': alarmStateMap,
  'network': networkStateMap,
  'work': workStateMap
}

const StateButton = ({
  color,
  large,
  icon,
  children,
  ...rest
}) => {
  const props = {
    icon: icon || <Filter />,
    children: children || '筛选'
  }

  return <Button
    // tag='link'
    overrideCSS={{
      px: 2,
      fontWeight: 'body',
      color: t => `${t.colors.icon[color] || 'icon.disabled'}`,
      border: 'none',
      cursor: 'normal',
      backgroundColor: 'transparent',
      ml: 1,
      ':hover:enabled, :focus:enabled': {
        color: ''
      },
      ':hover:enabled': {
        backgroundImage: 'none',
        backgroundColor: 'hover'
      },
      ':focus:enabled': {
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        outline: 0,
        borderShadow: 'none'
      }
    }}>
    <React.Fragment>{props.icon}</React.Fragment>
    <span sx={{
      ml: 1,
      width: large ? 60 : 30,
      ...textOverflow
    }}>
      {props.children}
    </span>
  </Button>
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}