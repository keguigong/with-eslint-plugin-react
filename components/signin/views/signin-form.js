/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button, Input, Label, Note, Checkbox } from '../../common'
import callSignin from '../call-signin'

const SigninForm = ({
  callSignin,
  pending,
  error,
  ...rest
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return <form onSubmit={e => {
    e.preventDefault()
    callSignin(username, password)
  }}>
    {error && <Note sx={{ mb: 3, overflow: 'auto', maxHeight: 240 }}>{error}</Note>}
    <Label htmlFor='username'>域账户</Label>
    <Input
      name='username'
      mb={2}
      value={username}
      onChange={e => setUsername(e.target.value)}
      required
    />
    <Label htmlFor='username'>域账户密码</Label>
    <Input
      name='password'
      type='password'
      mb={2}
      value={password}
      onChange={e => setPassword(e.target.value)}
      required
    />
    <Label>
      <Checkbox name='remember-me'/>
      <Styled.p sx={{ color: 'text', my: 0}}>记住我</Styled.p>
    </Label>
    <Button
      xlarge
      primary
      arrow={!pending}
      overrideCSS={{ width: '100%', justifyContent: 'center', mb: 5 }}
      isDisabled={pending}
      type='submit'
    >{pending ? '正在登陆...' : '登陆'}</Button>
  </form>
}

const mapStateToProps = state => ({
  pending: state.signin.pending,
  error: state.signin.error,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  callSignin: callSignin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)