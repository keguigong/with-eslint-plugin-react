import hex2rgba from 'hex2rgba'

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export default {
  colors: {
    text: '#161C42',
    background: '#F5F7FA',
    primary: '#5864FF',
    secondary: '#818AFF',
    highlight: '#EAECFF',
    accent: '#609',
    muted: '#8E98B5',
    active: '#80B9FF',
    disabled: '#8E98B5',
    bright: '#FFFFFF',
    border: '#C6C9D3',
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
    button: {
      background: hex2rgba('#FFFFFF', 0.25)
    },
    heading: {
      h1: '#182677'
    },
    modes: {
      dark: {
        text: '#9BA5A4',
        background: '#000',
        primary: '#D1D1D1',
        secondary: '#9A9A9A',
        highlight: '#484C4B',
      },
      pink: {
        primary: '#FF6A6A',
        secondary: '',
        background: '#FFF0F0',
        highlight: '#F4C5C5',
      },
    }
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
    bluesky: {
      fontFamily: 'heading'
    },
    h1: {
      ...heading,
      color: 'heading.h1',
      fontSize: [2, 3]
    },
  },
  button: {
    highlight: {
      color: 'primary'
    }
  },
  // example heading styles
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: [4, 5, 6],
      color: 'primary'
    },
    h2: {
      ...heading,
      fontSize: [3, 4],
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
      color: 'text',
      fontSize: [1, 2]
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