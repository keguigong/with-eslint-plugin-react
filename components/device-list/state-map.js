import React from 'react'
import { Error0, Error1, Error2, ErrorUnkown } from '../icon/status'
import { ConnectedFalse, ConnectedTrue, ConnectedUnkown } from '../icon/status'
import { WorkFree, WorkInProgress, WorkUnderConstruction, WorkShutDown, WorkUnkown } from '../icon/status'

const alarmStateMap = {
  0: {
    color: 'disabled',
    text: '暂无告警',
    icon: <Error0 />
  },
  1: {
    color: 'disabled',
    text: '一级告警',
    icon: <Error1 />
  },
  2: {
    color: 'yellow',
    text: '二级告警',
    icon: <Error2 />
  },
  3: {
    color: 'red',
    text: '三级告警',
    icon: <Error2 />
  },
  255: {
    color: 'disabled',
    text: '告警未知',
    icon: <ErrorUnkown />
  },
}

const networkStateMap = {
  0: {
    color: 'disabled',
    text: '在线',
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

const workStateMap = {
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
    color: 'yellow',
    text: '暂停服务',
    icon: <WorkShutDown />
  },
  255: {
    color: 'disabled',
    text: '状态未知',
    icon: <WorkUnkown />
  }
}

export { alarmStateMap, networkStateMap, workStateMap }