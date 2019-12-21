/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Container } from '../../common'

const defaultStyles = {
  backgroundColor: 'background',
  borderRadius: 10,
  py: 10,
  px: 1,
  my: 2
}

const BottomLink = ({
  isHidden = false,
  children,
  isCollapsed,
  overrideCSS,
  ...rest
}) => {
  return (
    <Container
      sx={{
        ...defaultStyles,
        ...overrideCSS,
        ...(isHidden && { display: 'none' })
      }}>
      {children}
    </Container>
  )
}

export default BottomLink