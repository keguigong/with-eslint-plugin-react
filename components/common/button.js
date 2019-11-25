/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'

import { buttonStyles } from '../../styles'

const components = {
  link: ({children, href, aCSS, ...rest}) => <Link href={href}><a sx={aCSS}><button {...rest}>{children}</button></a></Link>,
  href: ({ children, href, aCSS, ...rest }) => <a sx={aCSS} href={href}><button {...rest}>{children}</button></a>,
  button: ({ children, ...rest }) => <button {...rest}>{children}</button>,
}

const Button = ({
  to,
  href,
  overrideCSS,
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
  variant,
  onClick,
  ...rest
}) => {
  const Tag = components[tag || 'button']

  const props = {
    // to: !tag ? to : undefined,
    // href: tag === 'href' ? to : undefined,
    aCSS,
    href: href ? href : '#',
    onClick,
    ...rest,
  }

  const trackingOnClick = e => {
    if (typeof props.onClick === 'function') {
      props.onClick(e)
    }

    // let redirect = true

    // // Slightly modified logic from the gatsby-plugin-google-analytics
    // // But this one should work with `Link` component as well
    // if (
    //   e.button !== 0 ||
    //   e.altKey ||
    //   e.ctrlKey ||
    //   e.metaKey ||
    //   e.shiftKey ||
    //   e.defaultPrevented
    // ) {
    //   redirect = false
    // }

    // if (props.target && props.target.toLowerCase() !== '_self') {
    //   redirect = false
    // }

    // if (tracking && window.ga) {
    //   window.ga('send', 'event', {
    //     eventCategory: 'Outbound Link',
    //     eventAction: 'click',
    //     eventLabel: `${tracking} - ${props.to || props.href}`,
    //     transport: redirect ? 'beacon' : '',
    //   })
    // }
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

export default Button
