/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StateButton } from '.'
import { ConnectedFalse, ConnectedTrue, ConnectedUnkown } from '../icon/status'

export default ({
  state,
  ...rest
}) => {
  const props = {
    state: stateMap[state] || stateMap[255]
  }

  return <StateButton
    color={props.state.color}
    icon={props.state.icon}
  >
    {props.state.text}
  </StateButton>
}

const stateMap = {
  0: {
    color: 'disabled',
    text: '联网',
    icon: <ConnectedTrue />
  },
  1: {
    color: 'red',
    text: '断网',
    icon: <ConnectedFalse />
  },
  255: {
    color: 'disabled',
    text: '未知',
    icon: <ConnectedUnkown />
  }
}