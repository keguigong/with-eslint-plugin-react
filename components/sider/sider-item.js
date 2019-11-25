/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import hex2rgba from 'hex2rgba'
import { lighten } from '@theme-ui/color'

const defaultStyles = {
  height: 40,
  width: 190,
  fontSize: [0, 1],
  color: 'text',
  padding: 0,
  border: 'none',
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1em',
  svg: {
    ml: 0,
  },
  ':hover, :focus': {
    // color: 'primary',
    backgroundColor: lighten('primary', .3),
    backgroundImage: 'none'
  }
}

export default ({
  href,
  isSelected,
  icon,
  children,
  overrideCSS,
  short,
  ...rest
}) => {
  return (
    <div sx={{
      height: 50,
      padding: '5px',
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Button
        {...rest}
        href={href}
        tag='link'
        overrideCSS={{
          '&&': {
            ...defaultStyles,
            ...(short && {
              width: 170
            }),
            ...(isSelected && {
              backgroundColor: 'highlight',
              color: 'primary',
              ':hover, :focus': {
                backgroundColor: lighten('primary', .3),
                backgroundImage: 'none',
              }
            }),
            ...overrideCSS,
          }
        }}
      >
        {icon && <React.Fragment>{icon}</React.Fragment>}
        <span sx={{
          marginLeft: icon ? '1em' : 2
        }}>
          {children}
        </span>
      </Button>
    </div>
  )
}