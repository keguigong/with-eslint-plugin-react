/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import { lighten } from '@theme-ui/color'
import PropTypes from 'prop-types'

export default ({
  href,
  icon,
  short,
  children,
  isSelected,
  isDisabled,
  isCollapsed,
  overrideCSS,
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
      width: 'auto',
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
            ...(isSelected && {
              backgroundColor: 'highlight',
              color: 'primary',
            }),
            ...(isCollapsed && {
              width: 54,
              '& svg': {
                height: 30,
                width: 30
              }
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
  height: 40,
  width: '100%',
  fontSize: [0, 1],
  color: 'text',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1em',
  ':hover:enabled, :focus:enabled': {
    color: 'text',
    backgroundColor: 'hover',
    backgroundImage: 'none'
  },
  ':disabled': {
    color: 'disabled'
  }
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}