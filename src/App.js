import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHomePage from './components/UserHomePage';
import useToken from './components/UseToken';

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUp setToken={setToken}/>
        </Route>
        <Route path="/">
          { 
            token ? 
            <UserHomePage userToken={token} setToken={setToken} /> : 
            <Login setToken={setToken}/> 
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
