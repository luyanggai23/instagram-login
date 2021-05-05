import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FloatingLabelInput from './FloatingLabelInput'
import { signUpUser } from './../utils/db-utils'
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from './../app-constants'
import { 
  OuterContainer, 
  Container, 
  SignUpBlock, 
  InstagramLogoHeader, 
  SignupFormContainer, 
  SignupFormHeaderText,
  LoginWithFacebookContainer,
  LoginWithFacebookButtonBlueBackground,
  LoginWithFacebookSpanBlueBackground,
  SignUpButton,
  PrivacyPolicyContainer,
  LoginRedirectBlock,
  GetAppText,
  AppLinkContainer,
  AppStoreButtonContainer,
  AppStoreButtonImage,
  ErrorContainer
} from './StyledComponentsLibrary'
import OrBlock from './OrBlock';

export default function SignUp({ setToken }) {
  const history = useHistory();
  const [numberOrEmail, setNumberOrEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [signUpError, setSignUpError] = useState('')

  useEffect(() => {
    setSignUpError('')
  }, [numberOrEmail, fullName, userName, password])

  const signUpButtonDisabled = () => {
    return !numberOrEmail || !fullName || !userName || !password || password.length < 6 || numberOrEmail.length < 6
  }

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
      setSignUpError('There was an issue signing up the user.')
    }
  }

  return (
    <React.Fragment>
      <OuterContainer>
        <Container>
          <SignUpBlock>
            <InstagramLogoHeader className='coreSpriteLoggedOutWordmark'>Instagram</InstagramLogoHeader>
            <SignupFormContainer>
              <form className='sign-up-form'>
                <SignupFormHeaderText>Sign up to see photos and videos from your friends.</SignupFormHeaderText>
                <LoginWithFacebookContainer>
                  <LoginWithFacebookButtonBlueBackground type='button' onClick={() => window.location = 'https://www.facebook.com'}>
                    <LoginWithFacebookSpanBlueBackground className='coreSpriteFacebookIconInverted'/>Login with Facebook
                  </LoginWithFacebookButtonBlueBackground>
                </LoginWithFacebookContainer>
                <OrBlock/>
                <FloatingLabelInput label='Mobile Number or Email' type='text' value={numberOrEmail} onChange={setNumberOrEmail}/>
                <FloatingLabelInput label='Full Name' type='text' value={fullName} onChange={setFullName}/>
                <FloatingLabelInput label='Username' type='text' value={userName} onChange={setUserName}/>
                <FloatingLabelInput label='Password' type='password' value={password} onChange={setPassword}/>
                <div>
                  <LoginWithFacebookContainer>
                    <SignUpButton type='submit' disabled={signUpButtonDisabled()} onClick={signUpClicked} type='button'>
                      Sign Up
                    </SignUpButton>
                  </LoginWithFacebookContainer>
                </div>     
                {
                    signUpError && 
                    <ErrorContainer>
                      <p>{ signUpError }</p>
                    </ErrorContainer>
                  }
                <PrivacyPolicyContainer>
                  By signing up, you agree to our&nbsp;
                  <a target="_blank" href="https://help.instagram.com/581066165581870" tabIndex="0">Terms</a>
                  ,&nbsp;
                  <a target="_blank" href="https://help.instagram.com/519522125107875" tabIndex="0">Data Policy</a>
                  &nbsp;and&nbsp;
                  <a target="_blank" href="https://help.instagram.com/1896641480634370" tabIndex="0">Cookies Policy</a>
                  .
                </PrivacyPolicyContainer>        
              </form>
            </SignupFormContainer>
          </SignUpBlock>
          <SignUpBlock>
            <LoginRedirectBlock>
              Have an account?&nbsp;
              <a href="/" tabIndex="0">Log in</a>
            </LoginRedirectBlock>
          </SignUpBlock>
          <div>
            <GetAppText>
              Get the App.
            </GetAppText>
            <AppLinkContainer>
              <AppStoreButtonContainer 
                href='https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo'>
                <AppStoreButtonImage 
                  alt='Available on the App Store'
                  src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'/>
              </AppStoreButtonContainer>
              <AppStoreButtonContainer 
                href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8C66FFD2-ED29-45CD-A14A-17F9066E94E7%26utm_content%3Dlo%26utm_medium%3Dbadge'>
                <AppStoreButtonImage 
                  alt='Available on Google Play'
                  src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png'/>
              </AppStoreButtonContainer>
            </AppLinkContainer>
          </div>
        </Container>
      </OuterContainer>
    </React.Fragment>
  )
}