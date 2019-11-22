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
        accent: '#9BA5A4',
        highlight: '#484C4B'
      },
      pink: {
        primary: '#FF6A6A',
        background: '#FFF0F0',
        highlight: '#F4C5C5',
      },
      purple: {
        primary: '#574BFF',
        background: '#EDEBFF',
        highlight: '#ABA7E5'
      }
    }
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Pingfang SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading: 'Blue Sky Standard, -apple-system, BlinkMacSystemFont,"Pingfang SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    monospace: 'Menlo, monospace',
    blueskycondensed: 'Blue Sky Condensed, -apple-system, BlinkMacSystemFont,"Pingfang SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [4, 5, 6],
      color: 'primary'
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3, 4],
    },
    p: {
      fontSize: [1, 2],
      color: 'text'
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
    blueskystandard: {
      fontFamily: 'heading'
    },
    blueskycondensed: {
      fontFamily: 'blueskycondensed'
    }
  },
}