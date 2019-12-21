/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Colors from './styles/Color'
import hex2rgba from 'hex2rgba'
import ArrowLeft from './icons/ArrowLeft'
import AnimateHeight from 'react-animate-height'
import StatusIndicator from './StatusIndicator'
import Cc1StateIndicator from './Cc1StateIndicator'

export default class SubsystemInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      isVisible: props.isVisible ? props.isVisible : false,
      isCharging: props.isCharging ? props.isCharging : false,
      disable: props.disable ? props.disable : false
    }

    this.handleTitleClick = this.handleTitleClick.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({
      isVisible: props.isVisible,
      isCharging: props.isCharging,
      disable: props.disable,
    })
  }

  handleTitleClick() {
    this.props.handleTitleClick()
  }

  render() {
    const {
      status,
      title,
      subTitle,
      children,
      statusColor,
      isCc1StateVisible,
      isChargerConnected,
      ...rest
    } = this.props

    const { isVisible, isCharging, disable } = this.state

    return (
      <Info disable={disable}>
        <Title onClick={() => this.handleTitleClick()} isCharging={isCharging} disable={disable}>
          <TitleIndicator disable={disable} />
          <TitleLeft>
            <span css={{
              color: Colors.text.titleGray,
              fontSize: '14px',
              lineHeight: '14px',
              fontWeight: 'bold',
              marginLeft: '20px',
            }}>
              {title ? title : '子设备标题'}
            </span>
            <Cc1StateIndicator isVisible={isCc1StateVisible} isConnected={isChargerConnected} />
            <StatusIndicator status={status} backgroundColor={statusColor} />
          </TitleLeft>
          <TitleRight>
            <span css={{
              color: Colors.text.hintGray,
              fontSize: '13px',
              lineHeight: '13px',
              display: 'inline-block',
              marginRight: 5,
            }}>
              {subTitle ? subTitle : null}
            </span>
            <ArrowLeft css={{
              marginRight: 5,
              fill: Colors.icon.selectedTeal,
              transition: 'transform ease-in .2s',
              transform: `${disable ? null : isVisible ? 'rotate(0.25turn)' : null}`
            }} />
          </TitleRight>
        </Title>
        <AnimateHeight height={disable ? 0 : (isVisible ? 'auto' : 0)}>
          <Content>
            {children ? children : <p>no items here.</p>}
          </Content>
        </AnimateHeight>
      </Info>
    )
  }
}

const Info = props => {
  const { disable } = props
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      transition: 'box-shadow ease-in .2s, transform ease-in .2s',
      border: `1px solid ${Colors.background.devider}`,
      marginTop: 10,
      '&:hover': {
        transform: disable ? null : 'translate(0, -4px)',
        boxShadow: disable ? null : `0 2px 10px ${hex2rgba(Colors.nio.grayDarken2, 0.1)}`
      }
    }}>
      {props.children}
    </div>
  )
}

const Title = props => {
  const { isCharging, disable } = props
  return (
    <div css={{
      height: '44px',
      width: '100%',
      fontFamily: 'Blue Sky Standard',
      backgroundColor: disable ? Colors.nio.grayLighten2 : (isCharging ? '#F7FBFB' : Colors.background.white),
      display: 'flex',
      alignItems: 'center',
      cursor: disable ? null : 'pointer',
      userSelect: 'none',
      border: isCharging ? `1px solid ${Colors.nio.tealLighten1}` : null,
    }} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

const TitleIndicator = props => {
  const { disable } = props
  return (
    <div css={{
      height: '100%',
      width: 4,
      backgroundColor: disable ? Colors.nio.grayDarken2 : Colors.nio.teal
    }}></div>
  )
}
const TitleLeft = props => (
  <div css={{
    flex: 1,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }}>
    {props.children}
  </div>
)

const TitleRight = props => (
  <div css={{
    flex: 1,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }}>
    {props.children}
  </div>
)

const Content = props => (
  <div css={{
    padding: 20,
    backgroundColor: Colors.background.white,
    borderTop: `1px solid ${Colors.background.devider}`,
  }}>
    {props.children}
  </div>
)
