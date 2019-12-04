/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { addColor, removeColor } from '../redux/actions'

class Page extends React.Component {
  static getInitialProps({ pathname, query }) {
    return { pathname, query }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.colors.map((item, index) => <li key={index}>
            {item.id} {item.color} {item.timestamp}
            <button onClick={() => this.props.dispatch(removeColor(item.id))}>x</button>
          </li>)}
        </ul>
        <button onClick={() => this.props.dispatch(addColor('#00BEBE'))}>ADD COLOR</button>
        {/* <ul>
          {this.props.batman.map((item, index) => <li key={index}>
            {item.name}
          </li>)}
        </ul>
        <button>FETCH BATMAN</button> */}
      </div>
    )
  }
}

export default connect(state => state)(Page)