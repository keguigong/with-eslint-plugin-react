/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {Component} from 'react'
import moment from 'moment/moment'
import { DatePicker } from 'antd/lib/index'

export default class Datepicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      startTime: this.props.startTime ? parseInt(this.props.startTime) : new Date().getTime() - 60 * 60 * 1000,
      endTime: this.props.endTime ? parseInt(this.props.endTime) : new Date().getTime()
    }
  }

  handleChange = (dateString, value) => {
    this.props.onDatesChange ? this.props.onDatesChange(dateString) : null
    this.props.onChange ? this.props.onChange(Number(dateString[0]), Number(dateString[1])) : null
  }

  handleOnOk = (dateString) => {
    this.props.onDatesChange ? this.props.onDatesChange(dateString) : null
    this.props.onChange ? this.props.onChange(Number(dateString[0]), Number(dateString[1])) : null
  }


  render() {
    const { RangePicker } = DatePicker
    return (
      <div>
        <RangePicker
          defaultValue={[moment(this.state.startTime), moment(this.state.endTime)]}
          // defaultValue={[moment(this.state.startTime), moment(`${this.state.endTime}`)]}
          // value={[moment(this.state.startTime), moment(this.state.endTime)]}
          showTime={this.props.hideTime ? false : {format: 'HH:mm'}}
          format={this.props.hideTime ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm"}
          placeholder={['Start Time', 'End Time']}
          onChange={this.handleChange}
          onOk={this.handleOnOk}
          ranges={this.props.range === "jiahong" ? {
            '最近一周': [moment().startOf('day').subtract(1, 'week'), moment().endOf('day').subtract(1, 'day')],
            '最近两周': [moment().startOf('day').subtract(2, 'week'), moment().endOf('day').subtract(1, 'day')],
            '最近一月': [moment().startOf('day').subtract(1, 'month'), moment().endOf('day').subtract(1, 'day')],
            '最近两月': [moment().startOf('day').subtract(2, 'month'), moment().endOf('day').subtract(1, 'day')],
            '最近半年': [moment().startOf('day').subtract(6, 'month'), moment().endOf('day').subtract(1, 'day')],
          } : (true ? {
            'Today': [moment().startOf('day'), moment()],
            'Yesterday': [moment().startOf('day').subtract(1, 'day'), moment().endOf('day').subtract(1, 'days')],
            'Latest week': [moment().startOf('day').subtract(1, 'week'), moment()]
          } : null)}
        />
      </div>
    )
  }





}