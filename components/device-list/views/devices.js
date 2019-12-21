/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import DeviceList from './device-list'
import { Button, Badge } from '../../common'
import getDevices from '../get-devices'
import BottomPagination from './bottom-pagination'

class Devices extends React.Component {
  componentDidMount = () => {
    const { devices, getDevices, deviceType } = this.props
    if (devices.length === 0) {
      //
    }
    this.pageSize = 20
    getDevices(deviceType, 1, this.pageSize)
  }

  handlePageChange = ({ pageNo, pageSize }) => {
    const { getDevices, deviceType } = this.props
    getDevices(deviceType, pageNo, pageSize)
  }

  render() {
    const { devices, pending, error, getDevices, deviceType, totalResults } = this.props
    return <React.Fragment>
      {/* <div sx={{mb: 3}}>
        <Button white isSelected onClick={() => getDevices(deviceType)}>
          全部&nbsp;&nbsp;<Badge secondary>{devices.length}</Badge>
        </Button>
      </div> */}
      <DeviceList {...{ devices, pending, error }} />
      <BottomPagination
        totalResults={totalResults}
        pageSize={this.pageSize}
        onChange={(e) => this.handlePageChange(e)}
      />
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  devices: state.devices.payload,
  totalResults: state.devices.totalResults,
  pending: state.devices.pending,
  error: state.devices.error
})

const mapDispatchToProps = {
  getDevices: getDevices
}

export default connect(mapStateToProps, mapDispatchToProps)(Devices)