/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { buttonStyles } from '../../styles'
import { Icon } from '../icon/icon-wrapper'

const components = {
  link: ({ children, href, as, aCSS, isDisabled, target, ...rest }) =>
    <Link {...{ href, as }}>
      <a sx={aCSS} {...{ target }}>
        <button disabled={isDisabled} {...rest}>
          {children}
        </button>
      </a>
    </Link>,
  href: ({ children, href, as, aCSS, isDisabled, target, ...rest }) =>
    <a {...{ href, target }} sx={aCSS}>
      <button disabled={isDisabled} {...rest}>
        {children}
      </button>
    </a>,
  button: ({ children, as, aCSS, isDisabled, ...rest }) =>
    <button disabled={isDisabled} {...rest}>
      {children}
    </button>,
}

const Button = ({
  href,
  as,
  target,
  icon,
  arrow,
  children,
  tag,
  primary,
  link,
  secondary,
  action,
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
    isDisabled: isDisabled || false,
    href: href,
    as: as,
    target: target,
    onClick,
    // ...rest,
  }

  const iconName = arrow ? 'ArrowGo' : icon

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
        ...(action && buttonStyles().action),
        ...(isSelected && buttonStyles().isSelected),
        variant: variant,
        ...overrideCSS,
      }}
    >
      {children}
      {iconName && !link && <Icon name={iconName} />}
    </Tag>
  )
}

Button.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  as: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
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
  href: '',
  as: '',
  target: '',
  icon: '',
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
