/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
import {Select, Button, label} from 'antd'

import ChargePileColumnList from './charge-pile-column-list'
import {TextDisplay} from '../DataDisplay'

import SliderChart from './sliderChart'
import {connect} from 'react-redux'


class ChargePile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deviceId: props.deviceId ? props.deviceId : null,
      serviceId: props.serviceId ? props.serviceId : null,
      startTime: props.startTime ? props.startTime : null,
      endTime: props.endTime ? props.endTime : null,
      column: 'OutPutCurrent',
      chargeConnector: props.chargeConnector ? props.chargeConnector : null,
      data: [],
      empty: true,
      connectorList: null,
    }
  }

  componentDidMount() {
    if (this.state.deviceId !== null) {
      this.searching()
      this.pileConnectorGet()
    }
  }

  render() {
    const {isModalVisible} = this.props
    const {deviceId, serviceId, chargeConnector, column, startTime, endTime, data} = this.state

    var bizcharts
    if (process.browser) {
      bizcharts = require('bizcharts')
    }

    const cols = {
      value: {
        alias: '值',
        tickCount: 7,
        min: 0,
      },
      timestamp: {
        tickCount: 9,
        alias: '时间',
        range: [0, 0.95]
      }
    }

    const chartData = data.map((item) => (
      {
        time: item.timestamp,
        value: item.value
      }
    ))

    // console.log(data)

    return (
      <div>
        <TextDisplay name="服务ID" value={serviceId} unit=""/>
        <TextDisplay name="设备ID" value={deviceId} unit=""/>
        <TextDisplay name="枪号ID" value={chargeConnector} unit=""/>
        <TextDisplay name="服务时间段" value={`${new Date(startTime * 1).toLocaleString()} - ${new Date(endTime * 1).toLocaleString()}`}
          unit=""/>
        <div>
          <Select
            showSearch
            placeholder="请选择想要搜素的项"
            optionFilterProp="children"
            onChange={this.handleColumnChange}
            onSearch={this.handleColumnChange}
            value={column}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            css={{width: '60%'}}
          >
            {ChargePileColumnList.map((item, index) =>
              <Select.Option value={item.value} key={index}>{item.label}</Select.Option>
            )}
          </Select>
        </div>
        <div css={{marginTop: 10}}>
          {this.state.column === 'Soc' ?
            (<Button icon="search" onClick={() => this.searchingSoc()}>Search </Button>)
            : (<Button icon="search" onClick={() => this.searching()}>Search </Button>)
          }
        </div>
        <div css={{marginTop: 40}}>
          {this.state.empty ? (<div>未查询到值</div>) : (<div>

            {process.browser && <SliderChart data={chartData}/>}
          </div>)}
        </div>

      </div>
    )
  }

  handleColumnChange = (val) => {
    this.setState({column: val})
  }
  realtimeSwift = (n) => {
    let date = new Date(n)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() > 9 ? date.getDate() + ' ' + '/' : '0' + date.getDate() + '/'
    let h = date.getHours() > 9 ? date.getHours() + ':' : '0' + date.getHours() + ':'
    let m = date.getMinutes() > 9 ? date.getMinutes() + ':' : '0' + date.getMinutes() + ':'
    let s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    return Y + M + D + h + m + s
  }

  searchingSoc = () => {

    /* ***************************

    由于history没有测试环境，url需要更改

    *************************** */

    fetch('http://10.110.93.35:1989/v1/history/battery?battery_id=' + this.state.chargeConnector +
      '&column=' + this.state.column + '&start_time=' + parseInt(this.state.startTime / 1000) + '&stop_time=' + parseInt(this.state.endTime / 1000))
      .then(function (response) {
        return response.json()
      })
      .then((result) => {
        /*console.log('parsed json', result);*/
        if (result.data[this.state.column] !== null) {
          this.setState({empty: false})
        }

        let data = result.data[this.state.column]
        for (let i = 0; i < data.length; i++) {
          if (i !== 0 && data[i - 1].value === 0) {
            let obj = {}
            obj.timestamp = this.realtimeSwift(data[i].timestamp - 100)
            obj.value = 0
            data.splice(i, 0, obj)
            data[i + 1].value = parseFloat(data[i + 1].value)
            data[i + 1].timestamp = this.realtimeSwift(data[i + 1].timestamp)
            i += 1
          } else {
            data[i].value = parseFloat(data[i].value)
            data[i].timestamp = this.realtimeSwift(data[i].timestamp)
          }
        }
        this.setState({data: data})
      })
      .catch(function (err) {
        console.log('parsing failed', err)
      })
  }

  searching = () => {

    /* ***************************

  由于history没有测试环境，url需要更改

  *************************** */

    fetch('http://10.110.93.35:1989/v1/history/PowerChargers?device_id=' + this.state.deviceId +
      '&type=CHARGER_CONTROL_UNIT&unit_id=' + this.state.chargeConnector + '&column=' + this.state.column + '&start_time=' +
      parseInt(this.state.startTime / 1000) + '&stop_time=' + parseInt(this.state.endTime / 1000))
      .then(function (response) {
        return response.json()
      })
      .then((result) => {
        if (result.data.CHARGER_CONTROL_UNIT !== null) {
          this.setState({empty: false})
        }
        /* console.log('parsed json', result);*/
        let data = result.data.CHARGER_CONTROL_UNIT[0][this.state.column]
        for (let i = 0; i < data.length; i++) {
          if (i !== 0 && data[i - 1].value === 0) {
            let obj = {}
            obj.timestamp = this.realtimeSwift(data[i].timestamp - 100)
            obj.value = 0
            data.splice(i, 0, obj)
            data[i + 1].value = parseFloat(data[i + 1].value)
            data[i + 1].timestamp = this.realtimeSwift(data[i + 1].timestamp)
            i += 1
          } else {
            data[i].value = parseFloat(data[i].value)
            data[i].timestamp = this.realtimeSwift(data[i].timestamp)
          }
        }
        console.log(data)
        this.setState({data: data})
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }


  pileConnectorGet = () => {

    /* ***************************

    由于history没有测试环境，url需要更改

    *************************** */

    fetch(`http://10.110.93.35:8081/powerCharger/AllInfo?device_id=${this.state.deviceId}`)
      .then(function (response) {
        return response.json()
      })
      .then((result) => {

        let tempConnectorList = []
        result.data.power_charger_all_info_dto.battery_info_list.map((item, index) => (
          tempConnectorList.push(item.battery_id)
        ))

        this.setState({
          connectorList: tempConnectorList,
        })
      })
  }
}

const mapStateToProps = state =>({
  deviceId: state.history.deviceId,
  chargeConnector:state.history.chargeConnector,
  serviceId:state.history.serviceId,
  startTime:state.history.startTime,
  endTime:state.history.endTime,
})

export default connect (
  mapStateToProps,
)(ChargePile)