/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, {Component} from 'react'
import {Button} from 'antd'
import moment from 'moment'
import {CSVLink} from 'react-csv'
import Datepicker from './datepicker'
import SliderChart from './sliderChart'
import { connect } from 'react-redux'
import modalVisible from './modal-visible'

class SearchAllTogether extends Component {
  constructor(props){
    super(props)
    this.state = {
      deviceType: this.props.deviceType,
      deviceTypeFix: this.props.deviceType === 'battery' ? `${this.props.deviceType}?battery_id=` : `${this.props.deviceType}?device_id=`,
      deviceId: this.props.deviceId,
      searchType: this.props.searchType,
      column: this.props.column,
      startTime: moment().subtract(1, 'hours'),
      stopTime: moment(),
      slotId: this.props.slotId,
      waterCoolingId: this.props.waterCoolingId,
      electricMeterId: this.props.electricMeterId,
      chargeConnector: this.props.chargeConnector,
      data: [],
      SSDate: '',
      empty: true,
      loading:true,
    }
  }

  componentDidMount = () => {
    console.log(this.state.deviceType);

    this.searchAll()

  };

  searchAll = () => {

    const {
      deviceType, deviceTypeFix, deviceId, searchType, column, startTime, stopTime,
      slotId, waterCoolingId, electricMeterId, chargeConnector,
    } = this.state


    /* ***************************

        由于history没有测试环境，url需要更改

        *************************** */

    fetch(`http://10.110.93.35:1989/v1/history/${deviceTypeFix}${deviceId}&type=${searchType}&unit_id=${chargeConnector}&column=${column}&start_time=${parseInt(startTime / 1000)}&stop_time=${parseInt(stopTime / 1000)}&slot_id=${slotId}&water_cooling_id=${waterCoolingId}&electric_meter_id=${electricMeterId}`)
      .then(function (response) {
        return response.json()
      })
      .then((result) => {
        // console.log('parsed json', result)
        this.setState({
          loading: false,
        })
        let data = []
        if (deviceType === 'powerSwap' && searchType !== 'DEVICE') {
          data = result.data[searchType][0][column]
          if (result.data[searchType] !== null) {
            this.setState({
              empty: false,
            })
          }
          for (let key in data) {
            // data[key]['timestamp'] = (data[key]['timestamp'])
            data[key].value = parseFloat(data[key].value)
          }
        } else if (deviceType === 'powerSwap' && searchType === 'DEVICE') {
          if (result.data[column] != null) {
            this.setState({
              empty: false,
            })
          }
          data = result.data[column]
          for (let key in data) {
            // data[key]['timestamp'] = (data[key]['timestamp'])
            data[key].value = parseFloat(data[key].value)
          }
        } else if (deviceType === 'PowerChargers') {
          data = result.data.CHARGER_CONTROL_UNIT[0][this.state.column]
          if (result.data.CHARGER_CONTROL_UNIT !== null) {
            this.setState({
              empty: false,
            })
          }
          for (let i = 0; i < data.length; i++) {
            if (i !== 0 && data[i - 1].value === 0) {
              let obj = {}
              obj.timestamp = (data[i].timestamp - 100)
              obj.value = 0
              data.splice(i, 0, obj)
              data[i + 1].value = parseFloat(data[i + 1].value)
              data[i + 1].timestamp = (data[i + 1].timestamp)
              i += 1
            } else {
              data[i].value = parseFloat(data[i].value)
              // data[i].timestamp = (data[i].timestamp)
            }
          }
        } else if (deviceType === 'battery' || deviceType === 'powerEnergyStorageStations') {
          if (result.data[column] != null) {
            this.setState({
              empty: false,
            })
          }
          data = result.data[column]
          for (let key in data) {
            // data[key]['timestamp'] = (data[key]['timestamp'])
            data[key].value = parseFloat(data[key].value)
          }
        }
        this.setState({
          data: data,
        })
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  buttonClicked = () => {
    this.setState({
      startTime: Number(this.state.SSDate[0]),
      stopTime: Number(this.state.SSDate[1]),
    })
    // console.log('1start:' + this.state.startTime)
    // console.log('1stop' + this.state.stopTime)
    this.searchAll()
  }

  handleDateChange = (SSDate) => {
    this.setState({
      SSDate: SSDate,
    }, function () {
      this.buttonClicked()
    })
    // console.log('0:' + this.state.SSDate)
  }

  realTimeSwitch = (n) => {
    let date = new Date(n)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() > 9 ? date.getDate() + ' ' + '/' : '0' + date.getDate() + '/'
    let h = date.getHours() > 9 ? date.getHours() + ':' : '0' + date.getHours() + ':'
    let m = date.getMinutes() > 9 ? date.getMinutes() + ':' : '0' + date.getMinutes() + ':'
    let s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    return Y + M + D + h + m + s
  }

  render() {
    let bizcharts
    if (process.browser) {
      bizcharts = require('bizcharts')
    }

    const {
      deviceId, column, startTime, stopTime, data
    } = this.state

    const cols = {
      value: {
        alias: '值',
        tickCount: 7,

      },
      timestamp: {
        tickCount: 9,
        alias: '时间',
        range: [0, 0.95]
      }
    }

    // console.log(data)

    const chartData = data.map((item) => (
      {
        time: item.timestamp,
        value: item.value
      }
    ))

    // console.log(chartData)



    return (
      <div>
        <div css={{
          marginTop: 10
        }}>
          <Datepicker onDatesChange={this.handleDateChange} startTime={null} stopTime={null} timeSet/>
        </div>
        <div css={{
          marginTop: 10
        }}>
          <Button icon="search" onClick={() => this.buttonClicked()}> Search </Button>
        </div>

        {this.state.loading?<div>Loading...</div>:this.state.empty ? (<div>未查询到值</div>) : <div css={{
          marginTop: 10
        }}>
          <div>
            {process.browser && <SliderChart data={chartData}/>}
          </div>
          <div css={{
            marginTop: 10
          }}>
            {/* add csv download */}
            <span css={{display: 'inline-block', marginLeft: 20}}>
              <CSVLink
                data={this.state.data}
                filename={`${deviceId}_${column}_${this.realTimeSwitch(startTime)}-${this.realTimeSwitch(stopTime)}`}
              >下载CSV</CSVLink>
            </span>
          </div>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state =>( {
  deviceType:state.history.deviceType,
  deviceId: state.history.deviceId,
  searchType: state.history.searchType,
  column:state.history.column,
  slotId:state.history.slotId,
  waterCoolingId:state.history.waterCoolingId,
  electricMeterId:state.history.electricMeterId,
  chargeConnector:state.history.chargeConnector,
})

export default connect (mapStateToProps)(SearchAllTogether)

