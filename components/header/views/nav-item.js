import React from 'react'
import hex2rgba from 'hex2rgba'

import { Button } from '../../common'
import { Icon } from '../../icon/icon-wrapper'

const NavItem = ({
  href,
  as,
  isSelected,
  isHidden,
  isCollapsed = true,
  icon,
  children,
  overrideCSS,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      {...{ href, as }}
      tag='link'
      aCSS={{
        display: 'flex',
        ...(isHidden && { display: 'none' })
      }}
      overrideCSS={{
        ...defaultStyles,
        ...(isSelected && {
          backgroundColor: 'bright',
          color: 'primary',
          ':hover:enabled': {
            backgroundColor: 'hover',
            backgroundImage: 'none'
          },
          ':focus:enabled': {
            outline: 'none',
            boxShadow: 'none',
            backgroundColor: 'bright'
          }
        }),
        ...overrideCSS,
      }}
    >
      <Icon name={icon} />
      {!isCollapsed || <span sx={{
        display: 'block',
        flexGrow: 1,
        left: 0
      }}>{children}</span>}
    </Button>
  )
}

export default NavItem

const defaultStyles = {
  height: 64,
  width: '100%',
  position: 'relative',
  p: 0,
  justifyContent: 'center',
  color: 'bright',
  border: 'none',
  borderRadius: 0,
  backgroundColor: 'transparent',
  transition: 'all ease-in .2s',
  ':hover:enabled, :focus:enabled': {
    backgroundColor: hex2rgba('#FFF', 0.25),
    backgroundImage: 'none'
  },
  ':focus:enabled': {
    outline: 'none',
    boxShadow: 'none'
  }
}
