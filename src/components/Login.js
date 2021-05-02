import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { verifyUserInformation } from './../utils/db-utils';

export default function Login({ setToken }) {
  const history = useHistory()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    const userLoginResponse = verifyUserInformation(login, password);
    console.log(`userLoginResponse: `, userLoginResponse);

    if (userLoginResponse) {
      setToken(userLoginResponse);
    } else {
      console.log('Username/password is incorrect')
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={loginUser}>
        <label>
          TODO: Instagram image
          <input type="text" name="login" onChange={e => setLogin(e.target.value)}/>
          <input type="text" name="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Log in</button>
      </form>
      <button onClick={() => history.push('/sign-up')}>
        sign up button
      </button>
    </React.Fragment>
  )
}