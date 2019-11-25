/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { buttonStyles } from '../../styles'

const components = {
  link: ({ children, href, aCSS, isDisabled, ...rest }) =>
    <Link href={href}>
      <a sx={aCSS}>
        <button disabled={isDisabled} {...rest}>
          {children}
        </button>
      </a>
    </Link>,
  href: ({ children, href, aCSS, isDisabled, ...rest }) =>
    <a sx={aCSS} href={href}>
      <button disabled={isDisabled} {...rest}>
        {children}
      </button>
    </a>,
  button: ({ children, aCSS, isDisabled, ...rest }) =>
    <button disabled={isDisabled} {...rest}>
      {children}
    </button>,
}

const Button = ({
  href,
  icon,
  children,
  tag,
  primary,
  link,
  secondary,
  small,
  large,
  aCSS,
  isSelected,
  isDisabled,
  tracking,
  variant,
  onClick,
  overrideCSS,
  ...rest
}) => {
  const Tag = components[tag || 'button']

  const props = {
    aCSS: {
      '&&': {
        ...aCSS,
        ...(isDisabled && {
          // cursor: 'not-allowed'
        })
      }
    },
    isDisabled: isDisabled || false,
    href: href || '#',
    onClick,
    ...rest,
  }

  const trackingOnClick = e => {
    if (typeof props.onClick === 'function') {
      props.onClick(e)
    }

    let redirect = true

    // Slightly modified logic from the gatsby-plugin-google-analytics
    // But this one should work with `Link` component as well
    if (
      e.button !== 0 ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.defaultPrevented
    ) {
      redirect = false
    }

    if (props.target && props.target.toLowerCase() !== '_self') {
      redirect = false
    }

    if (tracking && window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: `${tracking} - ${props.href}`,
        transport: redirect ? 'beacon' : '',
      })
    }
  }

  return (
    <Tag
      {...props}
      onClick={trackingOnClick}
      sx={{
        '&&': {
          ...buttonStyles().default,
          ...(primary && buttonStyles().primary),
          ...(secondary && buttonStyles().secondary),
          ...(link && buttonStyles().link),
          ...(small && buttonStyles().small),
          ...(large && buttonStyles().large),
          ...(isSelected && buttonStyles().isSelected),
          variant: variant,
          ...overrideCSS,
        },
      }}
    >
      {children}
      {icon && <React.Fragment>{icon}</React.Fragment>}
    </Tag>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element,
  tag: PropTypes.string,
  primary: PropTypes.bool,
  link: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  aCSS: PropTypes.object,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tracking: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  overrideCSS: PropTypes.object,
}

Button.defaultProps = {
  href: '#',
  icon: null,
  tag: '',
  primary: false,
  link: false,
  secondary: false,
  small: false,
  large: false,
  aCSS: {},
  isSelected: false,
  isDisabled: false,
  tracking: '',
  variant: '',
  onClick: f => f,
  overrideCSS: {},
}

export default Button
