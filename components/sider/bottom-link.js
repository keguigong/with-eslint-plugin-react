/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Container } from '../common'

const defaultStyles = {
  backgroundColor: 'background',
  borderRadius: 10,
  py: 10,
  px: 1,
  my: 2
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
        <Container
          {...props}
          sx={{
            ...defaultStyles,
            ...overrideCSS,
          }}>
          {children}
        </Container>}
    </React.Fragment>
  )
}

export default BottomLink