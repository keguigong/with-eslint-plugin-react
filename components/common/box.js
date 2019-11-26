/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Box } from '@theme-ui/components'

export default ({
  // children,
  ...rest
}) => <React.Fragment>
  {/* <div
    {...rest}
    sx={{
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    }}
  >
    {children}
  </div> */}
  <Box {...rest} />
</React.Fragment>