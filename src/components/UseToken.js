import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('user');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (!userToken) {
      sessionStorage.removeItem('user');
    } else {
      sessionStorage.setItem('user', JSON.stringify(userToken));
    }
    setToken(userToken);    
  };

  return {
    setToken: saveToken,
    token
  }
}