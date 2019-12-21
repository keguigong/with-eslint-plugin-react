import React, {Component} from 'react'
import {Button, Table} from 'antd'
import {CSVLink} from 'react-csv'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column: [],
      newDataArr: [],
      tableColumn: [],
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      column: this.props.selectedValue,
    })

  }


  dataRequest = () => {

    /* ***************************

        由于history没有测试环境，url需要更改

        *************************** */
    fetch('http://10.110.93.35:1989/v1/history/battery?battery_id=' + this.props.batteryId +
      '&column=' + this.arraySplit(this.props.selectedValue) + '&start_time=' + parseInt(Number(this.props.SSDate[0]) / 1000) +
      '&stop_time=' + parseInt(Number(this.props.SSDate[1]) / 1000))
      .then(function (response) {
        return response.json()
      })
      .then((result) => {
        console.log('parsed json', result)
        //选择的所有项的头组成的数组
        let columnArr = this.props.selectedValue
        //
        let columnSep = []
        let newDataArr = []
        let tableColumn = [{
          title: '时间',
          dataIndex: 'timestamp',
          key: 'timestamp',
        },]


        //建立一个又项的名字命名的基本参数的对象数组
        for (let i = 0; i < columnArr.length; i++) {
          let obj = Object.create(null)
          obj.title = columnArr[i]
          obj.dataIndex = columnArr[i]
          obj.key = columnArr[i]
          tableColumn.push(obj)
        }

        //拿出对象，转换独有的key值，一起存到一个新数组
        for (let i = 0; i < columnArr.length; i++) {
          columnSep.push(result.data[columnArr[i]])
          for (let j = 0; j < columnSep[i].length; j++) {
            let obj = Object.create(null)
            obj.timestamp = columnSep[i][j]['timestamp']
            if (typeof columnSep[i][j]['value'] === 'boolean') {
              columnSep[i][j]['value'] = columnSep[i][j]['value'] === true ? 1 : 0
            }
            obj[columnArr[i]] = columnSep[i][j]['value']
            newDataArr.push(obj)
          }
        }

        //按照timestamp进行排序
        newDataArr = newDataArr.sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });

        //去除相同的值

        for (let i = 1; i < newDataArr.length; i++) {
          for (; ;) {
            if (newDataArr[i - 1].timestamp === newDataArr[i].timestamp && i !== newDataArr.length - 1) {
              for (let key in newDataArr[i]) {
                if (key !== 'timestamp') {
                  newDataArr[i - 1][key] = newDataArr[i][key]
                  newDataArr.splice(i, 1)
                }
              }
            } else {
              break
            }
          }
        }

        for (let key1 in newDataArr) {
          newDataArr[key1]['timestamp'] = Search.realTimeSwitch(newDataArr[key1]['timestamp'])
          newDataArr[key1]['key'] = parseFloat(key1)
        }


        this.setState({
          newDataArr: newDataArr,
          tableColumn: tableColumn
        });

        console.log(this.state.newDataArr);

      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }


  timeSwift = (date) => {
    let temp = new Date(date)
    let Y = temp.getFullYear()
    let M = temp.getMonth() + 1 < 10 ? '0' + (temp.getMonth() + 1) : temp.getMonth() + 1
    let D = temp.getDate() > 9 ? temp.getDate() : '0' + temp.getDate()
    let h = temp.getHours() > 9 ? temp.getHours() : '0' + temp.getHours()
    let m = temp.getMinutes() > 9 ? temp.getMinutes() : '0' + temp.getMinutes()
    let s = temp.getSeconds() > 9 ? temp.getSeconds() : '0' + temp.getSeconds()
    return Y + M + D + h + m + s + '000'

  }

  static realTimeSwitch(n) {
    let date = new Date(n)
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() > 9 ? date.getDate() + ' ' : '0' + date.getDate() + ' '
    let h = date.getHours() > 9 ? date.getHours() + ':' : '0' + date.getHours() + ':'
    let m = date.getMinutes() > 9 ? date.getMinutes() + ':' : '0' + date.getMinutes() + ':'
    let s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    return Y + M + D + h + m + s
  }


  arraySplit = (data) => {
    let result = ''
    for (let i = 0; i < data.length; i++) {
      result += ',' + data[i]
    }
    return result
  }

  render() {
    return (
      <div>
        <Button icon="search" onClick={() => this.dataRequest()}> Search </Button>
        <div>
          <Table dataSource={this.state.newDataArr} columns={this.state.tableColumn}/>
        </div>
        <CSVLink
          data={this.state.newDataArr}
          filename={'test'}
        >下载CSV</CSVLink>
      </div>
    )
  }

}

