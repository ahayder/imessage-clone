import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="http://3.bp.blogspot.com/-ka2iLafE62Q/VXQ9VqoZPGI/AAAAAAAAAhE/RFetj6kBPeg/s1600/chat.png" alt=""/>
        <h1>iMessage</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
