import { useHistory } from 'react-router-dom';

export default function UserHomePage (props) {
  const history = useHistory();
  console.log(`user: `, props);
  const user = props.userToken;

  const signOut = () => {
    props.setToken(undefined);
  }

  return (
    <div>
      <div>Username: { user.userName }</div>
      <div>Full name: { user.fullName}</div>

      <button onClick={signOut}>Sign out</button>
    </div>
  )
}