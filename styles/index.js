import { keyframes } from '@emotion/core'
import { lighten, darken } from '@theme-ui/color'
import hex2rgba from 'hex2rgba'

export const focusStyle = {
  outline: 0,
  boxShadow: t => `0 0 0 2px ${t.colors.active}`,
}

const stripeAnimation = keyframes({
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '30px 0px' },
})

export const disabledCursor = {
  cursor: 'not-allowed',
}

export const arrowMove = {
  transform: 'translateX(0.4em)'
}

export const buttonStyles = (arrow = false) => {
  return {
    default: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: t => t.colors.border,
      backgroundColor: hex2rgba('#FFFFFF', .15),
      color: 'text',
      cursor: 'pointer',
      fontFamily: 'heading',
      fontWeight: 'bold',
      flexShrink: 0,
      lineHeight: 'solid',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      px: 3,
      height: 36,
      // width: '100%',
      backgroundSize: '30px 30px',
      transition: 'color ease-in .2s, background-color ease-in .2s',
      '& svg': {
        ...(arrow && { marginLeft: '.35em' }),
        transition: 'transform ease-in .2s',
      },
      ':hover:enabled, :focus:enabled': {
        backgroundColor: 'primary',
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)',
        color: 'white',
        animation: `${stripeAnimation} 1.8s linear infinite`,
        // borderColor: 'gatsby',
        '& svg': {
          ...(arrow && arrowMove)
        }
      },
      ':focus:enabled': { ...focusStyle },
      ':after': { content: '\'\'', display: 'block' },
      ':disabled': {
        color: 'disabled',
        ...disabledCursor
      },
    },
    primary: {
      backgroundColor: 'primary',
      color: 'bright',
      ':disabled': {
        backgroundColor: 'secondary',
        color: darken('bright', .15),
        ...disabledCursor,
      }
    },
    secondary: {
      backgroundColor: 'bright',
      color: 'primary',
      borderColor: 'secondary',
      ':disabled': {
        color: lighten('primary', .15),
        borderColor: 'border',
        ...disabledCursor
      }
    },
    link: {
      color: 'primary',
      textDecoration: 'underline',
      background: 'none',
      border: 'none',
      ':hover:enabled, :focus:enabled': {
        background: 'none',
        color: lighten('primary', .15),
      }
    },
    isSelected: {
      backgroundColor: 'primary',
      color: 'white',
      ':disabled': {
        backgroundColor: 'secondary',
        color: darken('bright', .15),
        ...disabledCursor
      }
    },
    white: {
      backgroundColor: 'bright',
      border: 0
    },
    small: {
      height: 30
    },
    large: {
      height: 44
    },
    xlarge: {
      height: 50
    },
    xxlarge: {
      height: 60
    },
  }
}