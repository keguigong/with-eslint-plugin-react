import React from 'react'
import { Button, Badge } from '../common'
import hex2rgba from 'hex2rgba'
import { lighten } from '@theme-ui/color'

const defaultStyles = {
  height: 64,
  width: '100%',
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
  '& svg': {
    height: 30,
    width: 30
  }
}

export default ({
  href,
  isSelected,
  isHidden,
  icon,
  overrideCSS,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      href={href}
      tag='link'
      aCSS={{
        ...{
          display: 'inline-block',
          width: '100%',
        },
        ...(isHidden && { display: 'none' })
      }}
      icon={icon}
      overrideCSS={{
        ...defaultStyles,
        ...(isSelected && {
          backgroundColor: 'bright',
          color: 'primary',
          ':hover:enabled, :focus:enabled': {
            backgroundColor: 'hover',
            backgroundImage: 'none'
          }
        }),
        ...overrideCSS,
      }}
    />
  )
}