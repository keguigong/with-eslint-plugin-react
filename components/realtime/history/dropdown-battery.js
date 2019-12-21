import {Select} from 'antd'
import React, {Component} from 'react'
import batteryOptions from './battery-option'

const { Option } = Select;


export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: 'DONT TOUCH ME',
    }

  }


  handleChange=(value)=> {
    // console.log(`selected ${value}`);
    this.props.onSelectedChange(value);
  };

  render(){
    return(
      <div>
        <Select mode="multiple" placeholder="请选择想要查询的项目:" style={{ width: '100%' }} onChange={this.handleChange} showSearch={true}>
          {batteryOptions.map (obj=>
            <Option key={obj.key} value={obj.value}>{obj.name}</Option>)
          }
        </Select>
      </div>
    )}
}