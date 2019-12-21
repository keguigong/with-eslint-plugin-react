/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'
import Table from 'rc-table'
import '../../../static/rc-tables.less'

import { EmptyState } from '../../widget'
import { BottomPagination } from '../../device-list'
import getServiceInfos from '../get-service-infos'
import { AlarmStatusDot } from '../../alarm'

import Modal from '../../realtime/history/modal'
import ChargePileSearch from '../../realtime/history/charge-pile-search'
import modalVisible from '../../realtime/history/modal-visible'


class ServiceInfos extends React.Component {
  componentDidMount = () => {
    const { serviceInfos, deviceType, deviceId, getServiceInfos } = this.props

    this.pageSize = 15
    getServiceInfos(deviceId, 1, this.pageSize, deviceType)
  }

  handlePageChange = ({ pageNo, pageSize }) => {
    const { getServiceInfos, deviceId, deviceType } = this.props
    getServiceInfos(deviceId, pageNo, pageSize, deviceType)
  }

  handleChargerOnClick = (chargingConnectorId, serviceid, chargingStartTimestamp, chargingEventTimestamp) => {

    const { deviceId, modalVisible } = this.props
    modalVisible(null, deviceId, null, null, null, null, null, chargingConnectorId, serviceid, chargingStartTimestamp, chargingEventTimestamp)
  }


  render() {
    const { deviceType = 'PowerCharger', serviceInfos, pending, error, getServiceInfos, totalResults, isModalVisible } = this.props
    return <React.Fragment>
      {serviceInfos.length === 0 ?
        <EmptyState /> :
        <React.Fragment>
          {deviceType === 'PowerCharger' && <Table
            columns={columns.map((item, index) => (
              {
                ...item,
                key: index,
                ellipsis: true
              }
            ))}
            data={serviceInfos.map((item, index) => (
              {
                ...item,
                key: index,
                chargingStartTimestamp: new Date(item.chargingStartTimestamp).toLocaleString('chinese', { hour12: false }),
                chargingEventTimestamp: item.chargingEventTimestamp && item.serviceEvent ? new Date(item.chargingEventTimestamp).toLocaleString('chinese', { hour12: false }) : '',
                serviceEvent: <AlarmStatusDot isOn={!item.serviceEvent} color='green' />,
                serviceFinishReason: item.serviceEvent ? (serviceFinishReasonMap[item.serviceFinishReason] || serviceFinishReasonMap[255]) : '',
                operation: item.serviceEvent ?
                  <a onClick={() => this.handleChargerOnClick(item.chargingConnectorId, item.serviceid, item.chargingStartTimestamp, item.chargingEventTimestamp)}>充电曲线</a> :
                  ''
              }
            ))}
            scroll={{ x: true }}
            sx={{ fontFamily: 'heading', textAlign: 'center' }}
          />}

          {deviceType === 'PowerSwap' && <Table
            columns={powerSwapcolumns.map((item, index) => (
              {
                ...item,
                key: index,
                ellipsis: true
              }
            ))}
            data={serviceInfos.map((item, index) => (
              {
                ...item,
                key: index,
                chargingStartTimestamp: new Date(item.chargingStartTimestamp).toLocaleString('chinese', { hour12: false }),
                chargingEventTimestamp: item.chargingEventTimestamp && item.serviceEvent ? new Date(item.chargingEventTimestamp).toLocaleString('chinese', { hour12: false }) : '',
                serviceEvent: <AlarmStatusDot isOn={!item.serviceEvent} color='green' />,
                serviceChargedEnergy: calcChargedEnergy(item.evBatteryId, item.serviceStartSoc, item.serviceBatteryId, item.serviceStopSoc)
              }
            ))}
            scroll={{ x: true }}
            sx={{ fontFamily: 'heading', textAlign: 'center' }}
          />}

          <BottomPagination
            totalResults={totalResults}
            pageSize={this.pageSize}
            onChange={(e) => this.handlePageChange(e)}
          />
          <Modal isModalVisible={isModalVisible}>
            <ChargePileSearch />
          </Modal>
        </React.Fragment>
      }
    </React.Fragment>
  }
}

const mapStateToProps = ({ serviceInfos: { pending, error, payload: serviceInfos, totalResults }, history: { isModalVisible } }) => ({
  serviceInfos,
  pending,
  error,
  totalResults,
  isModalVisible
})

const mapDispatchToProps = {
  getServiceInfos: getServiceInfos,
  modalVisible: modalVisible,
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceInfos)

const columns = [
  {
    title: '服务状态',
    dataIndex: 'serviceEvent',
    width: 70
  },
  {
    title: '服务ID',
    dataIndex: 'serviceid',
    width: 340,
  },
  {
    title: '充电枪编号',
    dataIndex: 'chargingConnectorId',
    width: 200
  },
  {
    title: '本次充电电量/kWh',
    dataIndex: 'chargedEnergyTotal',
    width: 160
  },
  {
    title: '充电开始时间',
    dataIndex: 'chargingStartTimestamp',
    width: 200
  },
  {
    title: '充电结束时间',
    dataIndex: 'chargingEventTimestamp',
    width: 200
  },
  {
    title: '服务结束原因',
    dataIndex: 'serviceFinishReason',
    width: 200
  },
  {
    title: 'Session Id',
    dataIndex: 'sessionId',
    width: 360
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 100
  }
]

const serviceFinishReasonMap = {
  0: '车端结束充电',
  1: '用户主动结束',
  2: '故障结束',
  3: '拔枪结束',
  4: '预约结束时间停止充电',
  254: '其他原因',
  255: '未知原因'
}

const powerSwapcolumns = [
  {
    title: '服务状态',
    dataIndex: 'serviceEvent',
    width: 70
  },
  {
    title: '服务ID',
    dataIndex: 'serviceid',
    width: 520,
  },
  {
    title: '换电开始时间',
    dataIndex: 'chargingStartTimestamp',
    width: 200
  },
  {
    title: '换电结束时间',
    dataIndex: 'chargingEventTimestamp',
    width: 200
  },
  {
    title: '车辆电池SOC/%',
    dataIndex: 'serviceStartSoc',
    width: 100
  },
  {
    title: '服务电池SOC/%',
    dataIndex: 'serviceStopSoc',
    width: 100
  },
  {
    title: '换电补能电量/kWh',
    dataIndex: 'serviceChargedEnergy',
    width: 200
  },
  {
    title: '车辆ID',
    dataIndex: 'evId',
    width: 300
  },
  {
    title: '车辆VIN码',
    dataIndex: 'evVin',
    width: 200
  },
  {
    title: '车辆电池ID',
    dataIndex: 'evBatteryId',
    width: 300
  },
  {
    title: '服务电池ID',
    dataIndex: 'serviceBatteryId',
    width: 300
  },
]

const calcChargedEnergy = (evBatteryId, startSoc, serviceBatteryId, stopSoc) => {
  if (typeof evBatteryId !== 'string' || typeof serviceBatteryId !== 'string' || typeof startSoc !== 'number' || typeof stopSoc !== 'number') {
    return ''
  }
  let evCapacity = `${evBatteryId}`.slice(1, 8) === '0000084' ? 84 : 70
  let serviceCapacity = `${serviceBatteryId}`.slice(1, 8) === '0000084' ? 84 : 70
  return (serviceCapacity * stopSoc / 100 - evCapacity * startSoc / 100).toFixed(1)
}