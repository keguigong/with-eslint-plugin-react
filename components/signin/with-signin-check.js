/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import { LoadingOverlay } from '../widget'
import autoSignin from './auto-signin'
import { readLocalCollapse } from '../sider'

const withSigninCheck = (ComposedComponent) => {
  class SigninCheck extends Component {
    constructor(props) {
      super(props)
      this.state = {
        //默认当前登陆状态为store中的登陆状态，即false
        isSignin: props.isSignin,
        isLoaded: false,
        showComponent: true
      }
    }

    componentDidMount = async () => {
      const { isSignin, router, autoSignin, setSiderCollapse } = this.props

      //页面加载完成，执行操作

      //如果没有的登陆，尝试自动登录
      if (isSignin === false) {
        autoSignin()
      }

      //如果没有登陆 & 没有在登陆界面，不显示页面，以免看到页面加载出来
      if (isSignin === false && router.pathname !== '/signin') {
        this.setState({ showComponent: false })
      }

      this.setState({
        isLoaded: true
      })
    }

    static getDerivedStateFromProps = (props, state) => {
      const { isSignin, pending, router } = props

      //页面props发生变化时调用

      //如果没有登陆 & 没有在登陆界面，将返回登陆界面
      if (isSignin === false && router.pathname !== '/signin') {
        !pending && (router.push('/signin'))
      }

      //如果没有登陆 & 已经返回登陆页面了，则可以显示页面，以免登陆界面无法正常显示
      let showComponent
      if (isSignin === false && router.pathname === '/signin') {
        showComponent = true
      }

      //如果登陆状态发生变化
      if (isSignin !== state.isSignin) {
        //如果登陆状态失效，返回登陆页面
        if (isSignin === false) {
          router.push('/signin')
        } else {
          //如果是登陆成功，如果在登陆界面，则跳转到首页
          if (router.pathname === '/signin') {
            router.push('/')
          }
          //如果登陆成功，则可以正常显示页面
          showComponent = true
        }
        //返回状态更新当前state状态，以迎接下一次登陆状态变化
        return { isSignin, showComponent }
      } else {
        //如果没有则不返回
        return null
      }
    }

    shouldComponentUpdate = (props, state) => {
      const { pending } = props
      if (pending === false) {
        return true
      } else {
        return false
      }
    }

    render() {
      const { isLoaded, showComponent } = this.state
      const { pending } = this.props
      return <React.Fragment>
        {(!isLoaded && pending) ?
          <LoadingOverlay /> :
          showComponent ?
            <ComposedComponent {...this.props} /> :
            null
        }
      </React.Fragment>
    }
  }

  const mapStateToProps = state => ({
    isSignin: state.signin.isSignin,
    pending: state.signin.autoPending
  })

  const mapDispatchToProps = {
    autoSignin: autoSignin,
    setSiderCollapse: readLocalCollapse
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(SigninCheck))
}

export default withSigninCheck