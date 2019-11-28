/** @jsx jsx */
import App from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui'

//import theme styles
import theme from '../styles/theme'
import ColorToggle from '../components/color-mode-toggle'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <ThemeProvider theme={theme}>
      <ColorToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  }
}

export default MyApp