/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'

export default props =>
  <Global
    styles={theme => ({
      '*': {
        boxSizing: 'border-box'
      },
      body: {
        margin: 0,
        color: 'text',
        fontFamily: 'body',
        // backgroundColor: 'background'
      },
      a: {
        textDecoration: 'none'
      }
    })}
  />