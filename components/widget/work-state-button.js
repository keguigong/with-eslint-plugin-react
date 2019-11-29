/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StateButton } from '.'
import { WorkFree, WorkInProgress, WorkUnderConstruction, WorkShutDown, WorkUnkown } from '../icon/status'

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
    text: '设备空闲',
    icon: <WorkFree />
  },
  1: {
    color: 'green',
    text: '正在服务',
    icon: <WorkInProgress />
  },
  2: {
    color: 'disabled',
    text: '正在建设',
    icon: <WorkUnderConstruction />
  },
  3: {
    color: 'red',
    text: '暂停服务',
    icon: <WorkShutDown />
  },
  255: {
    color: 'disabeld',
    text: '状态未知',
    icon: <WorkUnkown />
  }
}