import React, { useContext } from 'react'
import UserContext from '../components/user-context'

const UserInfo = () => {
  const { user, signOut } = useContext(UserContext)

  return (
    <div>
      <p>
        Hello, <strong>{user}</strong>
      </p>
      <p>Welcome to our app</p>
      <button onClick={signOut}>
        Sign Out
      </button>
    </div>
  )
}

export default UserInfo