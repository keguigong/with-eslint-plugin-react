/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { DeviceList } from '../../device-list'
import { Button, Badge } from '../../common'
import getFav from '../get-favorite-seek'

class Favorite extends React.Component {
  componentDidMount = () => {
    const { devices, getFav, suffix } = this.props
    if (devices.length === 0) {
      // getFav()
    }
    getFav(suffix)
  }

  render() {
    const { devices, pending, error, getFav, suffix } = this.props
    return <React.Fragment>
      <div sx={{ mb: 3 }}>
        <Button white isSelected onClick={() => getFav(suffix)}>
          全部&nbsp;&nbsp;<Badge secondary>{devices.length}</Badge>
        </Button>
      </div>
      <DeviceList {...{ devices: suffix === 'recent' ? devicesArr : devices, pending, error }} />
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  devices: state.favorite.payload,
  pending: state.favorite.pending,
  error: state.favorite.error
})

const mapDispatchToProps = {
  getFav: getFav
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)

const devicesArr = [
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  },
  {
    deviceType: 'PowerCharger',
    deviceId: 'NPC-NIO-c2a45135-a22f22b3',
    deviceName: '苏州CDC直流充电站-1号桩群',
    networkState: 0,
    alarmState: 0,
    workState: 0
  }
]