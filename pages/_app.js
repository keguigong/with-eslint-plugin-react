/** @jsx jsx */
import App from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui'
import Router from 'next/router'

import theme from '../styles/theme'
import ThemeToggleButton from '../components/theme-toggle-button'

import UserContext from '../components/user-context'
import PreferenceContext from '../components/preference-context'

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isSiderCollapsed: false,
      isLoaded: false,
    }

    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.toggleSiderCollapse = this.toggleSiderCollapse.bind(this)
  }

  componentDidMount() {
    const user = localStorage.getItem('coolapp-user')
    if (user) {
      this.setState({
        user
      })
    } else {
      Router.push('/signin')
    }

    const isSiderCollapsed = localStorage.getItem('isSiderCollapsed')
    if (isSiderCollapsed === 'true') {
      this.setState({ isSiderCollapsed: true })
    } else if (isSiderCollapsed === 'false') {
      this.setState({ isSiderCollapsed: false })
    }
  }

  signIn(username, password) {
    localStorage.setItem('coolapp-user', username)
    this.setState({
      user: username
    }, () => Router.push('/user-info'))
  }

  signOut() {
    localStorage.removeItem('coolapp-user')
    this.setState({
      user: null
    })
    Router.push('/signin')
  }

  async toggleSiderCollapse() {
    await this.setState({
      isSiderCollapsed: !this.state.isSiderCollapsed
    })
    localStorage.setItem('isSiderCollapsed', this.state.isSiderCollapsed)
    console.log(this.state.isSiderCollapsed)
  }

  render() {
    const { Component, pageProps } = this.props
    return <UserContext.Provider value={{
      user: this.state.user,
      signIn: this.signIn,
      signOut: this.signOut,
      isSiderCollapsed: this.state.isSiderCollapsed,
      toggleSiderCollapse: this.toggleSiderCollapse
    }}>
      <ThemeProvider theme={theme}>
        <ThemeToggleButton />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  }
}