/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Colors from './styles/Color'
import ArrowLeft from './icons/ArrowLeft'
import React from 'react'
import modalVisible from './history/modal-visible'
import { connect } from 'react-redux'

class NumberDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseHover: false,
    }
  }

  handleMouseOver = () => {
    this.setState({
      mouseHover: true,
    })
  };

  handleMouseOut = () => {
    this.setState({
      mouseHover: false,
    })
  };

  handleOnClick = () =>{

    const {deviceType,deviceId,searchType,column,slotId,waterCoolingId,electricMeterId,chargeConnector,modalVisible} = this.props

    modalVisible(deviceType,deviceId,searchType,column,slotId,waterCoolingId,electricMeterId,chargeConnector)

  }

  render() {
    const {
      linkable,
      scale,
      name,
      value,
      unit,
    } = this.props

    const mouseHover = this.state.mouseHover

    return (
      <div onClick={linkable?this.handleOnClick:null} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} css={{
        display: 'inline-block',
        minWidth: scale ? scale * 150 : 150,
        padding: `10px ${scale ? (scale - 1) * 20 + 'px' : '0px'} 10px 20px`,
        border: `${linkable ? '2px solid' : '0px solid'} ${mouseHover ? Colors.background.light : 'white'}`,
        cursor: linkable ? 'pointer' : 'default',
        fontFamily: 'Blue Sky Standard',
      }}>
        <div css={{
          height: 24,
          display: 'flex',
          alignItems: 'center'
        }}>
          <span css={{
            fontSize: 13,
            lineHeight: '13px',
            color: `${linkable ? (mouseHover ? Colors.nio.teal : Colors.icon.default) : Colors.icon.default}`,
          }}>
            {name ? name : '标题文字'}

          </span>
          {linkable ?
            <ArrowLeft css={{
              marginRight: 5,
              fill: `${mouseHover ? Colors.nio.teal : Colors.icon.default}`,
              transition: 'transform ease-in .2s',
              transform: `${mouseHover ? 'translate(5px,0)' : null}`


            }}
            /> : null
          }
        </div>
        <div css={{
          height: 40,
          display: 'flex',
          alignItems: 'flex-end'
        }}>
          <span css={{
            fontSize: '30px',
            lineHeight: '30px',
            color: Colors.text.defaut,
            fontWeight: 300,
            letterSpacing: -2
          }}>
            {value ? value : '0.0'}
          </span>
          <span css={{
            display: 'inline-block',
            marginBottom: 3,
            marginLeft: 5,
            fontSize: 12,
            lineHeight: '11px',
            fontWeight: 'light',
            color: Colors.text.hintGray
          }}>
            {unit ? unit : 'kW'}
          </span>
        </div>
      </div>
    )

}
}
class TextDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mouseHover: false,
    }
  }

  handleMouseOver = () => {
    this.setState({
      mouseHover: true,
    })
  };

  handleMouseOut = () => {
    this.setState({
      mouseHover: false,
    })
  };

  handleOnClick = () =>{

    const {deviceType,deviceId,searchType,column,slotId,waterCoolingId,electricMeterId,chargeConnector,modalVisible} = this.props

    modalVisible(deviceType,deviceId,searchType,column,slotId,waterCoolingId,electricMeterId,chargeConnector)

  }

  render() {
    const {
      linkable,
      scale,
      name,
      value,
      unit,
    } = this.props

    const mouseHover = this.state.mouseHover

    return (
      <div onClick={linkable?this.handleOnClick:null} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} css={{
        display: 'inline-block',
        width: `${scale ? scale * 50 : 50}%`,
        border: `${linkable ? '2px solid' : '0px solid'} ${mouseHover ? Colors.background.light : 'white'}`,
        cursor: linkable ? 'pointer' : 'default',
        fontFamily: 'Blue Sky Standard',
        '@media screen and (max-width: 1200px)': {
          width: '100%'
        }
      }}>
        <span css={{
          fontSize: 14,
          lineHeight: '50px',
          color: `${linkable ? (mouseHover ? Colors.nio.teal : Colors.icon.default) : Colors.icon.default}`,
          display: 'inline-block',
          minWidth: 120,
          paddingLeft: 20,
          fontWeight: 300
        }}>
          {name ? name : '标题文字'}
        </span>
        <span css={{
          fontSize: 14,
          lineHeight: '50px',
          color: Colors.text.defaut,
          display: 'inline-block',
          fontWeight: 500,
          marginLeft: 5
        }}>
          {value ? value : '-'}
        </span>
        <span css={{
          fontSize: 14,
          lineHeight: '50px',
          color: Colors.text.hintGray,
          display: 'inline-block',
          marginLeft: 5
        }}>
          {unit ? unit : null}
        </span>
        {linkable ?
          <ArrowLeft css={{
            marginLeft: 5,
            fill: `${mouseHover ? Colors.nio.teal : Colors.icon.default}`,
            transition: 'transform ease-in .2s',
            transform: `${mouseHover ? 'translate(5px,0)' : null}`,
            height: 12,
          }}

          /> : null
        }
      </div>
    )
  }
}

const SiderDisplay = props => (
  <div css={{
    height: 60,
    width: '100%',
    border: `1px solid ${Colors.background.devider}`,
    paddingLeft: 20,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }}>
    <span css={{
      fontSize: 13,
      lineHeight: '13px',
      color: Colors.text.hintGray
    }}>
      {props.name ? props.name : '名称名称'}
    </span>
    <span css={{
      fontSize: 14,
      lineHeight: '14px',
      color: Colors.text.defaut
    }}>
      {props.value ? props.value : '暂无'}
    </span>
  </div>
)

const NameDisplay = props => (
  <div css={{
    display: 'flex',
    width: '100%',
    border: `1px solid ${Colors.background.devider}`,
    padding: 20,
    alignItems: 'center',
    minHeight: 80
  }}>
    <span css={{
      fontSize: 18,
      lineHeight: '30px',
      color: Colors.text.titleGray
    }}>
      {props.name ? props.name : '未命名'}
    </span>
  </div>
)

const mapDispatchToProps = {
  modalVisible:modalVisible,
}

const NumberDisplayWrapper = connect(null,mapDispatchToProps)(NumberDisplay)

const TextDisplayWrapper = connect(null,mapDispatchToProps)(TextDisplay)

export { TextDisplayWrapper as TextDisplay, SiderDisplay, NameDisplay , NumberDisplayWrapper as NumberDisplay}