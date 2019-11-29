/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'

export default props =>
  <Global styles={theme => ({
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      margin: 0
    },
    a: {
      textDecoration: 'none'
    }
  })}
  />