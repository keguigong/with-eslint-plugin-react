/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import { Filter } from '../icon/general'

export default ({
  color,
  large,
  icon,
  children,
  ...rest
}) => {
  const props = {
    icon: icon || <Filter />,
    children: children || '筛选'
  }

  return <Button
    // tag='link'
    overrideCSS={{
      px: 2,
      color: t => `${t.colors.icon[color] || 'icon.disabled'}`,
      border: 'none',
      cursor: 'normal',
      backgroundColor: 'transparent',
      ml: 1,
      ':hover:enabled, :focus:enabled': {
        backgroundImage: 'none',
        backgroundColor: 'hover'
      },
      ':focus:enabled': {
        outline: 0,
        borderShadow: 'none'
      }
    }}>
    <React.Fragment>{props.icon}</React.Fragment>
    <span sx={{
      ml: 1,
      width: large ? 60 : 30,
      ...textOverflow
    }}>
      {props.children}
    </span>
  </Button>
}

const textOverflow = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}