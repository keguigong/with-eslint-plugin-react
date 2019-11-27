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
        // fontSize: '62.5%',
        backgroundColor: 'white',
      },
      a: {
        textDecoration: 'none'
      }
    })}
  />