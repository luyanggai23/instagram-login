import React, { useState, useEffect } from 'react'
import { verifyUserInformation } from './../utils/db-utils';
import FloatingLabelInput from './FloatingLabelInput';
import { 
  LoginOuterContainer, 
  Container, 
  SignUpBlock, 
  InstagramLogoHeader, 
  LoginPageFormContainer, 
  LoginWithFacebookContainer,
  LoginWithFacebookButtonWhiteBackground,
  LoginWithFacebookSpanBlueBackground,
  SignUpButton,
  LoginRedirectBlock,
  GetAppText,
  AppLinkContainer,
  AppStoreButtonContainer,
  AppStoreButtonImage,
  LoginFormContainer,
  ForgotPasswordBlock,
  Article,
  LoginPageForm,
  ErrorContainer,
  CoverImage,
  OuterCoverImageContainer,
  CoverImageContainer
} from './StyledComponentsLibrary'
import OrBlock from './OrBlock';

export default function Login({ setToken }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    setLoginError(false)
  }, [login, password])

  const loginButtonDisabled = () => {
    return !login || !password || password.length < 6
  }

  const loginUser = () => {
    const userLoginResponse = verifyUserInformation(login, password)

    if (userLoginResponse) {
      setToken(userLoginResponse)
    } else {
      setLoginError('Sorry, your password was incorrect. Please double-check your password.')
    }
  }

  return (
    <React.Fragment>
      <Article>
        <OuterCoverImageContainer>
          <CoverImageContainer>
            <CoverImage src='https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg'/>
          </CoverImageContainer>
        </OuterCoverImageContainer>
        <LoginOuterContainer>
          <Container>
            <SignUpBlock>
              <InstagramLogoHeader className='coreSpriteLoggedOutWordmark'>Instagram</InstagramLogoHeader>
              <LoginPageFormContainer>
                <LoginPageForm onSubmit={loginUser}>
                  <LoginFormContainer>
                    <FloatingLabelInput label='Phone number, username, or email' type='text' value={login} onChange={setLogin}/>
                    <FloatingLabelInput label='Password' type='password' value={password} onChange={setPassword}/>
                    <LoginWithFacebookContainer>
                      <SignUpButton disabled={loginButtonDisabled()} type='button' onClick={loginUser}>
                        Log in
                      </SignUpButton>
                    </LoginWithFacebookContainer>
                    <OrBlock/>
                    <LoginWithFacebookContainer>
                      <LoginWithFacebookButtonWhiteBackground type='button' onClick={() => window.location = 'https://www.facebook.com'}>
                        <LoginWithFacebookSpanBlueBackground className='coreSpriteFacebookIconInverted'/>Login with Facebook
                      </LoginWithFacebookButtonWhiteBackground>
                    </LoginWithFacebookContainer>
                  </LoginFormContainer>
                  {
                    loginError && 
                    <ErrorContainer>
                      <p>{ loginError }</p>
                    </ErrorContainer>
                  }
                  <ForgotPasswordBlock href='https://www.instagram.com/accounts/password/reset/'>
                    Forgot Password?
                  </ForgotPasswordBlock>
                </LoginPageForm>
              </LoginPageFormContainer>
            </SignUpBlock>
            <SignUpBlock>
            <LoginRedirectBlock>
              Don't have an account?&nbsp;
              <a href="/sign-up" tabIndex="0">Sign up</a>
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
        </LoginOuterContainer>
      </Article>
    </React.Fragment>
  )
}