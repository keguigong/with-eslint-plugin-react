/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {Component} from 'react'
import Datepicker from './datepicker'
import {Input} from 'antd'
import DropDownBattery from './dropdown-battery'
import BatteryRequest from './battery-request'


export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      batteryId: '',
      SSDate: [(new Date().getTime() -60 * 60 * 1000), new Date().getTime()],
      selectedValue: []
    }
  }

  handleChange = (event) => {
    this.setState({
      batteryId: event.target.value
    })
  }

  handleTransferDates = (SSDate) => {
    this.setState({
      SSDate: SSDate,
    })
  }

  handleTransferSelect = (selectedValue) => {
    this.setState({
      selectedValue: selectedValue,
    })
  }

  render() {

    return (
      <div>

        <Styled.h2 sx={{variant: 'text.h2Title'}}>电池搜索</Styled.h2>

        <Input type="text" placeholder="请输入电池的ID" onChange={this.handleChange} css={{
          width: '50%',
        }}/>
        <div css={{
          marginTop: 10
        }}>
          < Datepicker onDatesChange={this.handleTransferDates} startTime={null} stopTime={null} timeSet/>
        </div>
        <div css={{
          marginTop: 10
        }}>
          < DropDownBattery onSelectedChange={this.handleTransferSelect} css={{
            width: '50%',
          }}/>
        </div>
        <div css={{
          marginTop: 10
        }}>
          < BatteryRequest batteryId={this.state.batteryId} SSDate={this.state.SSDate} selectedValue={this.state.selectedValue}/>
        </div>

      </div>
    )
  }
}