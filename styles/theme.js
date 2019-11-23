const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#3333EE',
    secondary: '#111199',
    highlight: '#efeffe',
    gray: '#777777',
    darken: 'rgba(0,0,0,0.25 )',
    accent: '#609',
    muted: '#f6f6f6',
    modes: {
      dark: {
        text: '#9BA5A4',
        background: '#000',
        primary: '#69FFF0',
        secondary: '#34B9AC',
        muted: '#111',
        highlight: '#484C4B'
      },
      pink: {
        primary: '#FF6A6A',
        background: '#FFF0F0',
        highlight: '#F4C5C5',
      },
    }
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Pingfang SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading: 'Blue Sky Standard, -apple-system, BlinkMacSystemFont, "Pingfang SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  // example custom breakpoints
  breakpoints: [
    '40em', '56em', '64em',
  ],
  // example heading styles
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: [4, 5 ,6],
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
      fontSize: [0, 1, 2]
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
  // variants can use custom, user-defined names
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    bluesky: {
      fontFamily: 'heading'
    }
  },
}