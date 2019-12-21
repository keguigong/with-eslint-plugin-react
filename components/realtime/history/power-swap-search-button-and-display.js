/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {Component} from 'react'
import {Button,Spin,Collapse} from 'antd'
import {CSVLink} from 'react-csv'

import fetch from 'isomorphic-unfetch'
const {Panel} = Collapse
import SliderChart from './sliderChart'

export default class PowerSwapSearchButtonAndDisplay extends Component{
  constructor(props){
    super(props)
    this.state={
      jsonResult:[],
      tableColumn:[],
      empty:false,
      clicked:false,
      loading:false,
      firstTime:true,
      figure:false,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
      clicked:nextProps.clicked,
    })
  }

  handleFigure = () =>{
    this.setState({
      figure:true,
    })
  }

  handleButtonClick = async () => {
    // console.log(this.props.SSDate);
    await this.setLoading();
    await this.dataRequest();
  }

  setLoading = () => {
    this.setState({
      loading: true,}
    )
  }

  checkNumber = (theObj) => {
    let reg = /^(-?\d+)(\.\d+)?$/
    return reg.test(theObj)
  }


  dataRequest = async () => {
    /* ***************************

        由于history没有测试环境，url需要更改

        *************************** */
    await fetch('http://10.110.93.35:1989/v1/history/powerSwap?device_id=' + this.props.stationId + '&type=' + this.props.optionSet[0] +
      '&slot_id=' + this.props.optionSet[1] + '&water_cooling_id=' + this.props.optionSet[1] + '&electric_meter_id=' + this.props.optionSet[1] +
      '&sub_device_index=' + this.props.optionSet[1] + '&config_key=' + this.props.optionSet[1] + '&battery_pack_cap=' + this.props.optionSet[1] + '&branch_id=' + this.props.optionSet[1] +
      '&column=' + this.props.optionSet[2] + '&start_time=' + parseInt(Number(this.props.SSDate[0]) / 1000) + '&stop_time=' + parseInt(Number(this.props.SSDate[1]) / 1000))
      .then(function (response) {
        return response.json()
      })
      .then((result) => {
        console.log(result)
        this.setState({
          empty: false,
          loading: false,
          firstTime: false,
          figure: false,
        })


        let tableColumn = [{
          title: '时间',
          dataIndex: 'timestamp',
          key: 'timestamp',
        },]
        let obj = Object.create(null)
        obj.title = this.props.optionSet[2]
        obj.dataIndex = 'value'
        obj.key = this.props.optionSet[2]
        tableColumn.push(obj)
        let type = this.props.optionSet[0]
        let column = this.props.optionSet[2]
        let jsonResult = []

        if (result.data[column] == null && type === 'DEVICE') {
          this.setState({
            empty: true,
          })

          return
        }

        if (result.data[type] == null && type !== 'DEVICE') {
          this.setState({
            empty: true,
          })

          return
        }

        if (this.props.optionSet[0] !== 'DEVICE') {
          jsonResult = result.data[type][0][column]
          for (let key2 in jsonResult) {
            jsonResult[key2]['timestamp'] = this.realTimeSwitch(jsonResult[key2]['timestamp'])

            if (this.checkNumber(jsonResult[key2]['value'])) {
              jsonResult[key2]['value'] = parseFloat(jsonResult[key2]['value'])
            }
          }
        } else {
          jsonResult = result.data[column]
          for (let key2 in jsonResult) {
            jsonResult[key2]['timestamp'] = this.realTimeSwitch(jsonResult[key2]['timestamp'])

            if (this.checkNumber(jsonResult[key2]['value'])) {
              jsonResult[key2]['value'] = parseFloat(jsonResult[key2]['value'])
            }
          }
        }


        console.log(jsonResult)

        this.setState({
          jsonResult: jsonResult,
          tableColumn: tableColumn,
          clicked: true,
        })

        // console.log(this.state.clicked);





      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      })
  };

  timeSwift = (date) => {
    let temp = new Date(date)
    let Y = temp.getFullYear()
    let M = temp.getMonth() + 1 < 10 ? '0' + (temp.getMonth() + 1) : temp.getMonth() + 1
    let D = temp.getDate() > 9 ? temp.getDate() : '0' + temp.getDate()
    let h = temp.getHours() > 9 ? temp.getHours() : '0' + temp.getHours()
    let m = temp.getMinutes() > 9 ? temp.getMinutes() : '0' + temp.getMinutes()
    let s = temp.getSeconds() > 9 ? temp.getSeconds() : '0' + temp.getSeconds()
    return Y + M + D + h + m + s
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

    const chartData = this.state.jsonResult.map((item) => (
      {
        time: item.timestamp,
        value: item.value
      }
    ))

    if(this.state.loading === true){
      return (
        <div>
          <Button icon="search" disabled onClick={() => this.handleButtonClick()}> Search </Button>
          <Spin/>
        </div>

      )
    }
    if(this.state.empty === true){
      return (
        <div>
          <Button icon="search" onClick={() => this.handleButtonClick()}> Search </Button>
          <p>未查询到值</p>
        </div>
      )
    }
    else if(!this.state.clicked){
      return(
        <div>
          <Button icon="search" onClick={() => this.handleButtonClick()}> Search </Button>
        </div>
      )
    } else if (this.props.optionSet[0] === 'DEVICE' && (this.props.optionSet[2] === 'ProcessInfo'
      || this.props.optionSet[2] === 'ServiceInfo' || this.props.optionSet[2] === 'Alarms'
      || this.props.optionSet[2] === 'PowerSwapInfo')) {
      return (
        <div>
          <Button icon="search" onClick={() => this.handleButtonClick()}> Search </Button>
          <div css={{
            marginTop: 10
          }}>
            {/* add csv download */}
            <span css={{ display: 'inline-block', marginLeft: 20 }}>
              <CSVLink
                data={this.state.jsonResult}
                filename={`${this.props.stationId}_${this.props.optionSet[2]}_${this.realTimeSwitch(this.props.SSDate[0])}-${this.realTimeSwitch(this.props.SSDate[1])}`}
              >下载TXT</CSVLink>
            </span>
          </div>
          <div>
            {this.state.empty ? (<div>未查询到值</div>) :
            <Collapse>
              {this.state.jsonResult.map (obj=>
                <Panel key={obj.timestamp} header={'时间为:' + obj.timestamp}>
                  <pre>{obj.value}</pre>
                </Panel>
              )}
            </Collapse>
            }
          </div>
        </div>
      )
    }
    else if (!this.state.empty && !this.state.loading && this.state.firstTime) {
      return(
        <div>
          <Button icon="search" onClick={() => this.handleButtonClick()}> Search </Button>
        </div>
      )
    }
    else{
      return(

        <div>
          <Button icon="search" onClick={() => this.handleButtonClick()}> Search </Button>
          <div css={{
            marginTop: 10
          }}>
            {/* add csv download */}
            <span css={{display: 'inline-block', marginLeft: 20}}>
              <CSVLink
                data={this.state.jsonResult}
                filename={`${this.props.stationId}_${this.props.optionSet[2]}_${this.realTimeSwitch(this.props.SSDate[0])}-${this.realTimeSwitch(this.props.SSDate[1])}`}
              >下载CSV</CSVLink>
            </span>
            <Button css={{
              marginLeft: '20px',
            }} onClick={() => this.handleFigure()}>点击生成图像</Button>
            <p css={{marginTop:'10px'}}>若获取数据量过大，图像会导致网页崩溃</p>
          </div>
          <div css={{
            marginTop: 10
          }}>
            {this.state.empty ? (<div>未查询到值</div>) : (this.state.figure?<div>
              {process.browser &&
              <SliderChart data={chartData} />
              }
            </div>:null)}
          </div>
        </div>
      )
    }


  }







}
