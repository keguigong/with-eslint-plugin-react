/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Colors from './styles/Color'
import ArrowLeft from './icons/ArrowLeft'
import AnimateHeight from 'react-animate-height'

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    const { isCollapsed, } = this.state
    const { children } = this.props

    return (
      <div css={{ width: '100%' }}>
        <AnimateHeight height={isCollapsed ? 0 : 'auto'}>
          {children ? children : <p>no items here</p>}
        </AnimateHeight>
        <div css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          color: Colors.text.highlight,
          userSelect: 'none',
          paddingTop: 20
        }} onClick={() => this.handleClick()}>
          <span css={{
            fontSize: 14,
            lineHeight: '16px',
            cursor: 'pointer'
          }}>
            {isCollapsed ? '展开' : '收起'}
          </span>
          <ArrowLeft css={{
            display: 'inline-block',
            marginRight: 5,
            height: 16,
            lineHeight: '44px',
            fill: Colors.icon.selectedTeal,
            transition: 'transform ease-in .2s',
            transform: `${isCollapsed ? null : 'rotate(-0.25turn)'}`
          }}/>
        </div>
      </div>
    )
  }
}