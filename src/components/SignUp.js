import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FloatingLabelInput from './FloatingLabelInput';
import { signUpUser } from './../utils/db-utils'


export default function SignUp({ setToken }) {
  const history = useHistory();
  const [numberOrEmail, setNumberOrEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

 const signUpClicked = async () => {
    const user = {
      numberOrEmail,
      fullName,
      userName,
      password
    }

    try {
      const signUpUserResponse = await signUpUser(user);
      setToken(user);
      history.push('/');
    } catch (ex) {
      console.error(`Failed to signup user: `, ex);
    }
  }

  return (
    <React.Fragment>
      <form className='sign-up-form' onSubmit={signUpClicked}>
        <FloatingLabelInput label='Mobile Number or Email' type='text' value={numberOrEmail} onChange={setNumberOrEmail}/>
        <FloatingLabelInput label='Full Name' type='text' value={fullName} onChange={setFullName}/>
        <FloatingLabelInput label='Username' type='text' value={userName} onChange={setUserName}/>
        <FloatingLabelInput label='Password' type='password' value={password} onChange={setPassword}/>
        <button type='submit'>
          sign up
        </button>
      </form>
   
    </React.Fragment>
  )
}