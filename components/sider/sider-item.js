/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button } from '../common'
import { lighten } from '@theme-ui/color'
import PropTypes from 'prop-types'

const defaultStyles = {
  height: 40,
  width: 190,
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
    // color: 'primary',
    backgroundColor: lighten('primary', .25),
    backgroundImage: 'none'
  },
  ':disabled': {
    color: 'disabled'
  }
}

const SiderItem = ({
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
      height: 50,
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Button
        {...props}
        tag='link'
        overrideCSS={{
          '&&': {
            ...defaultStyles,
            ...(short && { width: 170 }),
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

SiderItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element,
  short: PropTypes.bool,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  overrideCSS: PropTypes.object
}

SiderItem.defaultProps = {
  href: '#',
  icon: null,
  short: false,
  isSelected: false,
  isDisabled: false,
  isCollapsed: false,
  overrideCSS: {}
}

export default SiderItem