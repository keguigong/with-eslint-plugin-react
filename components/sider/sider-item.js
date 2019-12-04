/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import { textOverflow } from '../../styles'

export default ({
  href,
  icon,
  short,
  children,
  isSelected,
  isDisabled,
  isCollapsed,
  overrideCSS,
  reverse,
  ...rest
}) => {
  const props = {
    href: href || '#',
    isDisabled: isDisabled || false,
    ...rest
  }

  return (
    <div sx={{
      // height: 50,
      p: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Button
        {...props}
        tag='link'
        aCSS={{
          display: 'inline-block',
          width: '100%',
        }}
        overrideCSS={{
          '&&': {
            ...defaultStyles,
            ...textOverflow,
            ...(reverse && {
              flexDirection: 'row-reverse',
              paddingLeft: 0,
              paddingRight: '1em',
              ...(isCollapsed && { paddingRight: 0 })
            }),
            ...(isSelected && {
              backgroundColor: 'highlight',
              color: 'primary',
            }),
            ...(isCollapsed && {
              paddingLeft: 0,
              justifyContent: 'center',
            }),
            ...overrideCSS,
          }
        }}
      >
        {icon && <React.Fragment>{icon}</React.Fragment>}
        {!isCollapsed && (
          <span sx={{
            marginLeft: icon ? '1em' : 2
          }}>
            {children}
          </span>
        )}
      </Button>
    </div>
  )
}

const defaultStyles = {
  flex: 1,
  height: 40,
  width: '100%',
  fontSize: [0, 1],
  color: 'text',
  padding: 0,
  paddingLeft: '1em',
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  ':hover:enabled, :focus:enabled': {
    color: 'text',
    backgroundColor: 'hover',
    backgroundImage: 'none'
  },
  ':disabled': {
    color: 'disabled'
  }
}