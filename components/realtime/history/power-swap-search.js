/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {Component} from 'react'

import Datepicker from './datepicker'
import { Cascader } from 'antd/lib/index'
import powerSwapOption from './power-swap-search-options'
import PowerSwapSearchButtonAndDisplay from './power-swap-search-button-and-display'
import PowerSwapList from './power-swap-list'
import {Select} from 'antd/lib/index'

const {Option} = Select

export default class PowerSwap extends Component {
  constructor(props){
    super(props)
    this.state = {
      stationId: '',
      SSDate: [(new Date().getTime() - 60 * 60 * 1000), new Date().getTime()],
      optionSet: '',
      clicked:true,
    }
  }

  handleOnChange = (value) => {
    // console.log(typeof value);
    this.setState({
      stationId:value,
    })
  };

  handleOnSearch = (val) => {
    // console.log(typeof val);
    this.setState({
      stationId:val,
    })
  };

  handleTransferDates = (SSDate) => {
    this.setState({
      SSDate: SSDate,
    })
    // console.log(this.state.SSDate[0]);
  }

  handleChangeCascader = (value) => {
    this.setState({
      optionSet: value,
      clicked: false,
    })
  }

  render() {
    return (
      <div>
        <>
          <Styled.h2 sx={{variant: 'text.h2Title'}}>换电站搜索</Styled.h2>
          <div css={{
            marginTop: 10
          }}>
            <Select
              showSearch
              placeholder="请选择换电站"
              optionFilterProp="children"
              onChange={this.handleOnChange}
              onSearch={this.handleOnSearch}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              css={{width: '60%'}}
            >
              {PowerSwapList.map(obj =>
                <Option value={obj.value} key={obj.value}>{obj.label}</Option>
              )}
            </Select>
          </div>
          <div css={{
            marginTop: 10
          }}>
            <Datepicker onDatesChange={this.handleTransferDates} startTime={null} stopTime={null} timeSet/>
          </div>
          <Cascader
            placeholder="请选择想要搜索的数据"
            options={powerSwapOption}
            onChange={this.handleChangeCascader}
            css={{
              width: '50%',
              marginTop: 10
            }}
          />
          <div css={{
            marginTop: 10
          }}>
            <PowerSwapSearchButtonAndDisplay
              stationId={this.state.stationId}
              SSDate={this.state.SSDate}
              optionSet={this.state.optionSet}
              clicked={this.state.clicked}
            />
          </div>
        </>
      </div>
    )
  }
}