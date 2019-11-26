import { focusStyle } from './index'

export default {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
  },
  a: {
    textDecoration: 'none',
    ':focus': {
      ...focusStyle
    }
  },
  svg: {
    margin: 0
  }
}