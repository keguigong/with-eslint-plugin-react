/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'
import Table from 'rc-table'
import '../../../static/rc-tables.less'

import { EmptyState } from '../../widget'
import { BottomPagination } from '../../device-list'
import getAlarms from '../get-alarms'
import { AlarmStatusDot } from '../'
import { Icon } from '../../icon/icon-wrapper'

class Alarms extends React.Component {
  componentDidMount = () => {
    const { alarms, deviceId, getAlarms } = this.props

    this.pageSize = 15
    getAlarms(deviceId, 1, this.pageSize)
  }

  handlePageChange = ({ pageNo, pageSize }) => {
    const { getAlarms, deviceId } = this.props
    getAlarms(deviceId, pageNo, pageSize)
  }

  render() {
    const { alarms, pending, error, getAlarms, totalResults } = this.props
    return <React.Fragment>
      {alarms.length === 0 ?
        <EmptyState /> :
        <React.Fragment>
          <Table
            columns={columns.map((item, index) => (
              {
                ...item,
                key: index,
                ellipsis: true
              }
            ))}
            data={alarms.map((item, index) => (
              {
                ...item,
                key: index,
                alarmRaiseTime: new Date(item.alarmRaiseTime).toLocaleString('chinese', { hour12: false }),
                alarmClearTime: item.alarmClearTime ? new Date(item.alarmClearTime).toLocaleString('chinese', { hour12: false }) : '',
                alarmState: <AlarmStatusDot isOn={item.alarmState} />,
                alarmLevel: <React.Fragment>
                  <span
                    sx={{
                      color: `icon.${alarmLevelColorMap[item.alarmLevel] || 'default'}`,
                      fontWeight: 'heading',
                      '& svg': {
                        height: 14,
                        width: 14
                      }
                    }}>
                    {item.alarmLevel}
                    {/* <Icon name='Error0'/> */}
                  </span>
                </React.Fragment>
              }
            ))}
            scroll={{ x: true }}
            sx={{ fontFamily: 'heading', textAlign: 'center' }}
          />
          <BottomPagination
            totalResults={totalResults}
            pageSize={this.pageSize}
            onChange={(e) => this.handlePageChange(e)}
          />
        </React.Fragment>
      }
    </React.Fragment>
  }
}

const mapStateToProps = ({ alarms: { pending, error, payload: alarms, totalResults } }) => ({
  pending,
  error,
  alarms,
  totalResults
})

const mapDispatchToProps = {
  getAlarms: getAlarms
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarms)

const columns = [
  {
    title: '告警状态',
    dataIndex: 'alarmState',
    width: 70
  },
  {
    title: '告警ID',
    dataIndex: 'alarmTypeId',
    width: 70,
  },
  {
    title: '告警描述',
    dataIndex: 'alarmDescription',
    width: 360
  },
  {
    title: '告警等级',
    dataIndex: 'alarmLevel',
    width: 80
  },
  {
    title: '告警产生时间',
    dataIndex: 'alarmRaiseTime',
    width: 200
  },
  {
    title: '告警消除时间',
    dataIndex: 'alarmClearTime',
    width: 200
  },
  {
    title: '告警子系统',
    dataIndex: 'alarmSubSystem',
    width: 200
  },
  {
    title: '告警子设备',
    dataIndex: 'alarmSubDevice',
    width: 200
  },
]

const alarmLevelColorMap = {
  1: 'default',
  2: 'yellow',
  3: 'red'
}