/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Button } from '../../common'
import { alarmStateMap, networkStateMap, workStateMap } from '..'
import { Icon } from '../../icon/icon-wrapper'

const AStateButton = ({
  type,
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

  return <StateButton
    large={type !== 'network'}
    color={props.stateObj.color}
    icon={props.stateObj.icon}
  >
    {props.stateObj.text}
  </StateButton>
}

export default AStateButton

AStateButton.propTypes = {
  type: PropTypes.string,
  state: PropTypes.number,
}

const StateButton = ({
  color,
  large,
  icon,
  children,
  ...rest
}) => {
  const props = {
    icon: icon,
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
    <Icon name={props.icon} />
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