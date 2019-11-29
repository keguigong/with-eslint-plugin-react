/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { buttonStyles } from '../../styles'
import { ArrowGo } from '../icon/arrow'

const components = {
  link: ({ children, href, aCSS, isDisabled, target, ...rest }) =>
    <Link href={href}>
      <a sx={aCSS} target={target}>
        <button disabled={isDisabled} {...rest}>
          {children}
        </button>
      </a>
    </Link>,
  href: ({ children, href, aCSS, isDisabled, target, ...rest }) =>
    <a target={target} sx={aCSS} href={href}>
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
  target,
  icon,
  arrow,
  children,
  tag,
  primary,
  link,
  secondary,
  small,
  large,
  xlarge,
  white,
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
      display: 'inline-block',
      ...aCSS,
    },
    icon: arrow ? <ArrowGo /> : icon,
    isDisabled: isDisabled || false,
    href: href || '#',
    target: target,
    onClick,
    ...rest,
  }

  const trackingOnClick = e => {
    if (typeof props.onClick === 'function') {
      props.onClick(e)
    }
  }

  return (
    <Tag
      {...props}
      onClick={trackingOnClick}
      sx={{
        ...buttonStyles(arrow).default,
        ...(primary && buttonStyles().primary),
        ...(secondary && buttonStyles().secondary),
        ...(link && buttonStyles().link),
        ...(small && buttonStyles().small),
        ...(large && buttonStyles().large),
        ...(xlarge && buttonStyles().xlarge),
        ...(white && buttonStyles().white),
        ...(isSelected && buttonStyles().isSelected),
        variant: variant,
        ...overrideCSS,
      }}
    >
      {children}
      {props.icon && !link && <React.Fragment>{props.icon}</React.Fragment>}
    </Tag>
  )
}

Button.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  target: PropTypes.string,
  icon: PropTypes.element,
  arrow: PropTypes.bool,
  tag: PropTypes.string,
  primary: PropTypes.bool,
  link: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
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
  target: '',
  icon: null,
  arrow: false,
  tag: '',
  primary: false,
  link: false,
  secondary: false,
  small: false,
  large: false,
  xlarge: false,
  aCSS: {},
  isSelected: false,
  isDisabled: false,
  tracking: '',
  variant: '',
  onClick: f => f,
  overrideCSS: {},
}

export default Button
