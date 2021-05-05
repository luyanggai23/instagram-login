import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHomePage from './components/UserHomePage';
import useToken from './components/UseToken';
import InstagramFooter from './components/InstagramFooter';
import { 
  Section, 
  Main 
} from './components/StyledComponentsLibrary';

function App() {
  const { token, setToken } = useToken();

  return (
    <React.Fragment>
      <Section>
        <Main>
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
        </Main>
        <InstagramFooter/>
      </Section>
    </React.Fragment>
    
  );
}

export default App;
