import React from 'react'
import { Button } from '../common'
import hex2rgba from 'hex2rgba'
import { lighten } from '@theme-ui/color'

const itemStyles = {
  height: 64,
  width: 64,
  display: 'inline-block',
  justifyContent: 'center',
  color: 'white',
  border: 'none',
  borderRadius: 0,
  backgroundColor: 'transparent',
  transition: 'all ease-in .2s',
  svg: {
    ml: 0
  },
  ':hover, :focus': {
    backgroundColor: hex2rgba('#FFF', 0.25),
    backgroundImage: 'none'
  }
}

export default ({
  href,
  isSelected,
  icon,
  overrideCSS,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      href={href}
      tag='link'
      icon={icon}
      overrideCSS={{
        '&&': {
          ...itemStyles,
          ...(isSelected && {
            backgroundColor: 'white',
            color: 'primary',
            ':hover, :focus': {
              backgroundColor: lighten('primary', .25),
              backgroundImage: 'none'
            }
          }),
          ...overrideCSS,
        }
      }}
    />
  )
}