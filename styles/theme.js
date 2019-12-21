// import hex2rgba from 'hex2rgba'
import { focusStyle } from '.'

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const body = {
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body'
}

export default {
  colors: {
    text: '#161C42',
    background: '#F5F7FA',
    primary: '#5864FF',
    secondary: '#818AFF',
    highlight: '#D2D5FF',
    hover: '#EAECFF',
    active: '#80B9FF',
    disabled: '#8E98B5',
    bright: '#FFFFFF',
    border: '#C6C9D3',
    title: '#182677',
    reverse: '#FF5454',
    modes: {
      dark: {
        text: '#FFFFFF',
        background: '#222639',
        primary: '#C0CDFF',
        secondary: '#424286',
        highlight: '#333850',
        hover: '#2F396D',
        disabled: '#6F7AAF',
        bright: '#1B1E2E',
        title: '#FFFFFF',
        reverse: '#FF5454',
      },
    },
    avatar: {
      background: {
        default: '#E9EDEF',
        blue: '#E5E7FF',
        green: '#EEF5D4',
        orange: '#FFF3D1',
        purple: '#F2E5FF',
        red: '#FFEEE7',
        tea: '#DEF4F0',
      },
      fill: {
        default: '#5864FF',
        blue: '#5864FF',
        green: '#95BC50',
        orange: '#F1BC24',
        purple: '#AD6FE7',
        red: '#F88C55',
        tea: '#69C0B0',
      }
    },
    icon: {
      black: '#000000',
      blue: '#5864FF',
      default: '#696D7F',
      disabled: '#B0B8CC',
      green: '#2ECD52',
      red: '#FF6C6C',
      white: '#FFFFFF',
      yellow: '#FFB36A',
    },
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Pingfang SC, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    heading: 'Blue Sky Standard, Noto Sans CJK SC, -apple-system, BlinkMacSystemFont, Pingfang SC, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    monospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  // space: [
  //   0, 4, 8, 16, 32, 64, 128, 256, 512
  // ],
  space: [
    0, 5, 10, 20, 40, 80, 160, 320, 640
  ],
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  // example custom breakpoints
  breakpoints: [
    '40em', '56em', '64em',
  ],

  // variants can use custom, user-defined names
  text: {
    heading: {
      ...heading
    },
    caps: {
      fontWeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    h1: {
      ...heading,
      color: 'primary',
      my: 2,
      fontSize: [2, 3]
    },
    h1Inline: {
      my: 0
    },
    h2Title: {
      my: 2,
      mt: 3
    },
    pDisabled: {
      fontFamily: 'heading',
      margin: 0,
      color: 'disabled',
      fontSize: 1
    },
    url: {
      fontFamily: 'body',
      fontSize: 1,
      backgroundColor: 'hover',
      borderRadius: 3,
      color: 'text',
      wordBreak: 'break-all',
      textAlign: 'center',
      px: 2,
      py: 1,
      maxWidth: ['90%', '75%', '50%']
    }
  },
  button: {
    highlight: {
      color: 'primary'
    }
  },
  forms: {
    label: {
      ...body,
      fontSize: 1,
      fontWeight: 'body',
      color: 'text',
      my: 1,
      mb: 2
    },
    checkbox: {
      mr: 1
    },
    input: {
      fontFamily: 'heading',
      background: 'bright',
      borderColor: 'disabled',
      borderRadius: 5,
      '&:focus': {
        // borderColor: 'primary',
        ...focusStyle
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        ...focusStyle
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        ...focusStyle
      },
    },
    slider: {
      bg: 'muted',
    },
  },
  // example heading styles
  styles: {
    root: {
      ...body
    },
    h1: {
      ...heading,
      fontSize: 3,
      color: 'title',
      my: 2,
      mb: 3
    },
    h2: {
      ...heading,
      fontSize: 2,
      color: 'title',
      my: 2
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      ...body,
      color: 'text',
      fontSize: 1,
      my: 1
    },
    a: {
      ml: '2px',
      fontWeight: 'heading',
      color: 'primary',
      cursor: 'pointer',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
      '&:focus': {
        ...focusStyle
      }
    },
    span: {
      color: 'disabeld',
      fontFamily: 'heading'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}