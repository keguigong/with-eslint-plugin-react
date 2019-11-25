import { keyframes } from '@emotion/core'
import { lighten, darken } from '@theme-ui/color'

export const focusStyle = {
  outline: 0,
  boxShadow: t => `0 0 0 2px ${t.colors.active}`,
}

const stripeAnimation = keyframes({
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '30px 0px' },
})

const disabledCursor = {
  cursor: 'not-allowed',
}

export const buttonStyles = t => {
  return {
    default: {
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: t => t.colors.border,
      backgroundColor: 'button.background',
      color: 'text',
      cursor: 'pointer',
      display: 'inline-flex',
      fontFamily: 'heading',
      fontWeight: 'bold',
      flexShrink: 0,
      lineHeight: 'solid',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      px: 3,
      height: '36px',
      backgroundSize: '30px 30px',
      transition: 'all ease-in .2s',
      ':hover:enabled, :focus:enabled': {
        backgroundColor: 'primary',
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)',
        color: 'white',
        animation: `${stripeAnimation} 1.8s linear infinite`,
        // borderColor: 'gatsby',
      },
      ':focus:enabled': { ...focusStyle },
      ':after': { content: '\'\'', display: 'block' },
      ':disabled': {
        color: 'disabled',
        ...disabledCursor
      }
      // '& svg': { marginLeft: '.2em' },
    },
    primary: {
      backgroundColor: 'primary',
      color: 'bright',
      ':disabled': {
        backgroundColor: 'secondary',
        color: darken('bright', .15),
        ...disabledCursor
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
        color: lighten('primary', .15)
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