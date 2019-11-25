/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex } from '@theme-ui/components'

const defaultStyles = {
  flexDirection: 'column',
  backgroundColor: 'background',
  borderRadius: 10,
  pt: 10,
  pb: 10,
  width: 180
}

const BottomLink = ({
  children,
  isCollapsed,
  overrideCSS,
  ...rest
}) => {
  const props = {
    ...rest
  }

  return (
    <React.Fragment>
      {isCollapsed ||
        <Flex
          {...props}
          sx={{
            '&&': {
              ...defaultStyles,
              ...overrideCSS,
            }
          }}>
          {children}
        </Flex>}
    </React.Fragment>
  )
}

export default BottomLink