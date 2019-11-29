/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StateButton } from '.'
import { Error0, Error1, Error2, ErrorUnkown } from '../icon/status'

export default ({
  state,
  ...rest
}) => {
  const props = {
    state: stateMap[state] || stateMap[255]
  }

  return <StateButton
    large
    color={props.state.color}
    icon={props.state.icon}
  >
    {props.state.text}
  </StateButton>
}

const stateMap = {
  0: {
    color: 'disabled',
    text: '暂无告警',
    icon: <Error0 />
  },
  1: {
    color: 'yellow',
    text: '一级告警',
    icon: <Error1 />
  },
  2: {
    color: 'yellow',
    text: '二级告警',
    icon: <Error2/>
  },
  3: {
    color: 'red',
    text: '三级告警',
    icon: <Error2/>
  },
  255: {
    color: 'disabled',
    text: '告警未知',
    icon: <ErrorUnkown/>
  },
}