/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

if (process.browser) {
  var {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
  } = require('bizcharts')
  var Slider = require('bizcharts-plugin-slider')
  var DataSet = require('@antv/data-set')
}

class SliderChart extends React.Component {
  constructor(props) {
    super(props)
    let data = props.data ? props.data : []
    this.state = {
      data: data,
    }
  }

  static getDerivedStateFromProps({data}, state) {
    if (JSON.stringify(data) !== JSON.stringify(state.data)) {
      return {
        data,
      }
    } else {
      return null
    }
  }

  render() {
    const scale = {
      time: {
        type: 'time',
        tickCount: 8,
        mask: 'M/dd H:mm:ss:SSS'
      },
      value: {
        alias: '数值'
      }
    }

    const {data} = this.state
    if (process.browser) {
      var ds = new DataSet({
        state: {
          start: data.length !== 0 ? new Date(data[0].time).getTime() : new Date().getTime(),
          end: data.length !== 0 ? new Date(data[data.length - 1].time).getTime() : new Date().getTime()
        }
      })
      var dv = ds.createView('origin').source(data).transform({
        type: 'filter',
        callback(obj) {
          const time = new Date(obj.time).getTime()
          return time >= ds.state.start && time <= ds.state.end
        }
      })
    }
    return (
      <div>
        {process.browser &&
        <div>
          <Chart
            height={500}
            data={dv}
            padding={[40, 40, 40, 80]}
            scale={scale}
            onGetG2Instance={g2Chart => {
              g2Chart.animate(false)
            }}
            forceFit
          >
            <Axis name="value"/>
            <Tooltip/>
            <Legend
              custom
              position="top-right"
              items={[
                {
                  value: 'value',
                  marker: {
                    symbol: 'circle',
                    fill: '#00bebe',
                    // fill: "l(100) 0:#a50f15 1:#fee5d9",
                    radius: 5
                  }
                }
              ]}
            />
            <Geom
              type="line"
              position="time*value"
              color="#00bebe"
            />
          </Chart>
          <Slider
            width="auto"
            height={30}
            start={ds.state.start}
            end={ds.state.end}
            xAxis="time"
            yAxis="value"
            scales={{
              time: {
                type: 'time',
                tickCount: 10,
                mask: 'M/dd H:mm:ss'
              }
            }}
            data={dv}
            backgroundChart={{
              type: 'line'
            }}
            onChange={async ({startValue, endValue}) => {
              ds.setState('start', startValue)
              ds.setState('end', endValue)
            }}
          />
        </div>}
      </div>
    )
  }
}

export default SliderChart
