import { keyframes } from '@emotion/core'
import { lighten } from '@theme-ui/color'

export const focusStyle = {
  outline: 0,
  boxShadow: t => `0 0 0 2px ${t.colors.active}`,
}

const stripeAnimation = keyframes({
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '30px 0px' },
})

export const buttonStyles = t => {
  return {
    default: {
      alignItems: 'center',
      borderRadius: t => t.borderRadius[5],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'border',
      backgroundColor: 'button',
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
      transition: 'all ease-in .3s',
      ':hover, :focus': {
        backgroundColor: 'primary',
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)',
        color: 'white',
        animation: `${stripeAnimation} 1.8s linear infinite`,
        borderColor: 'gatsby',
      },
      ':focus': { ...focusStyle },
      ':after': { content: '\'\'', display: 'block' },
      '& svg': { marginLeft: '.2em' },
    },
    primary: {
      backgroundColor: 'primary',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'white',
      color: 'primary'
    },
    link: {
      color: 'primary',
      textDecoration: 'underline',
      background: 'none',
      border: 'none',
      ':hover, :focus': {
        background: 'none',
        color: lighten('primary', .15)
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
    isSelected: {
      backgroundColor: 'primary',
      color: 'white'
    }
  }
}