import { useState, useContext } from 'react'
import React from 'react'
import UserContext from '../components/user-context'

const Form = () => {
  const { signIn } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const authenticate = e => {
    e.preventDefault()
    if (username != '' || password != '') {
      signIn(username, password)
    } else {
      setMessage('Please enter your username and password')
    }
  }

  return (
    <form>
      <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      {message != '' && <div>{message}</div>}
      <button onClick={e => authenticate(e)}>
        Sign In
      </button>
    </form>
  )
}

export default Form