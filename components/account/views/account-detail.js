/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Button } from '../../common'
import { signout } from '../../signin'

const AccountDetail = ({
  user,
  token,
  signout
}) => {
  return <React.Fragment>
    <Styled.h1>{`欢迎，${user || '未知用户'}`}</Styled.h1>
    <Styled.pre>{`${token || '未登录'}`}</Styled.pre>
    <br />
    <Button primary onClick={() => signout()}>登出</Button>
  </React.Fragment>
}


const mapStateToProps = state => ({
  user: state.signin.user,
  token: state.signin.token
})

const mapDispatchToProps = {
  signout: signout
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)