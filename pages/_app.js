/** @jsx jsx */
import App from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui'
import Router from 'next/router'
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import theme from '../styles/theme'
import ThemeToggleButton from '../components/theme-toggle-button'
import { makeStore } from '../redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // ctx.store.dispatch({})
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render() {
    // console.log(makeStore().getState())
    const { Component, pageProps, store } = this.props
    return <ThemeProvider theme={theme}>
      <ThemeToggleButton />
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  }
}

export default withRedux(makeStore)(MyApp)