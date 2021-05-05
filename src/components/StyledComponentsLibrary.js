import styled from 'styled-components';

export const FloatingLabel = styled.span`
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transition: -webkit-transform ease-out .1s;
  transition: -webkit-transform ease-out .1s;
  transition: transform ease-out .1s;
  transition: transform ease-out .1s,-webkit-transform ease-out .1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
`;

export const FloatingLabelInputContainer = styled.div`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-appearance: none;
  background: #fafafa;
  background: rgba(var(--b3f,250,250,250),1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
`;

export const FloatingLabelInputSpacingContainer = styled.div`
  margin: 0 40px 6px; 
`;

export const FloatingLabelInputLabel = styled.label`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`

export const FloatingLabelInputSpan = styled.span`
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transition: -webkit-transform ease-out .1s;
  transition: -webkit-transform ease-out .1s;
  transition: transform ease-out .1s;
  transition: transform ease-out .1s,-webkit-transform ease-out .1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;

  -webkit-transform: ${props => props.float && `scale(.83333) translateY(-10px)`};
  transform: ${props => props.float && `scale(.83333) translateY(-10px)`};
`

// padding: 9px 0 7px 8px;
// padding: 14px 0 2px 8px!important;  

export const FloatingLabelInputInput = styled.input`
  font-size: ${props => props.value.length > 0 ? `12px` : `16px`};
  padding: ${props => props.value.length > 0 ? `14px 0 2px 8px` : `9px 0 7px 8px`};
  font-size: 12px;
  background: #fafafa;
  background: rgba(var(--b3f,250,250,250),1);
  border: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  margin: 0;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-appearance: none;
`

export const Section = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-height: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-ordinal-group: 5;
  -webkit-order: 4;
  -ms-flex-order: 4;
  order: 4;

  background-color: #fafafa;
`;

export const OuterContainer = styled.div`
  min-height: 100%;
  overflow: hidden;
  margin-bottom: 44px;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`

export const Container = styled.div`
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`

export const SignUpBlock = styled.div`
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`

export const InstagramLogoHeader = styled.h1`
  margin: 22px auto 12px;
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
`

export const SignupFormContainer = styled.div`
  margin-bottom: 20px;
`

export const SignupFormHeaderText = styled.h2`
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`

export const LoginWithFacebookContainer = styled.div`
  margin-top: 8px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 8px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`

//removed styled from LoginWithFacebookButton
// background: 0 0;
export const LoginWithFacebookButtonBlueBackground = styled.button`
  border: 1px solid transparent;
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  color: rgba(var(--eca,255,255,255),1);
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: auto;
`;

export const LoginWithFacebookSpanBlueBackground = styled.span`
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: 3px;
`

export const LoginWithFacebookButtonWhiteBackground = styled.button`
  border: 0;
  color: #0095f6;
  color: rgba(var(--d69,0,149,246),1);
  display: inline;
  padding: 0;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: 0 0;
  border: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: auto;
`

export const OrBlockContainer = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 10px 40px 18px;
`

export const OrBlockDashes = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  background-color: #dbdbdb;
  background-color: rgba(var(--b38,219,219,219),1);
  height: 1px;
  position: relative;
  top: .45em;
`

export const OrBlock = styled.div`
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
`

export const SignUpButtonContainer = styled.div`

`

export const SignUpButton = styled.button`
  opacity: 1;
  border: 1px solid transparent;
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: auto;
  &:disabled {
    background-color: rgba(0,149,246,.3);
    background-color: rgba(var(--d69,0,149,246),.3);
    opacity: 1;
  }
`

export const PrivacyPolicyContainer = styled.p`
  color: #8e8e8e;
  font-size: 12px;
  line-height: 16px;
  margin: 10px 40px;
  text-align: center;
`

export const LoginRedirectBlock = styled.p`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
`
export const GetAppText = styled.p`
  color: #262626;
  font-size: 14px;
  line-height: 18px;
  margin: 10px 20px 10px 20px;
  text-align: center;
`

export const AppLinkContainer = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 10px 0 10px 0;
`

export const AppStoreButtonContainer = styled.a`
  margin-right: 8px;
  color: #00376b;
  color: rgba(var(--fe0,0,55,107),1);
  text-decoration: none;
`

export const AppStoreButtonImage = styled.img`
  height: 40px;
`
export const Footer = styled.footer`
  background-color: #fafafa;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-box-ordinal-group: 6;
  -webkit-order: 5;
  -ms-flex-order: 5;
  order: 5;
  padding: 0 20px;
`

export const ContainerInsideFooter = styled.div`
  margin-bottom: 52px;
  margin-top: 24px;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  -webkit-justify-content: center;
  -ms-flex-pack: start;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  flex-direction: row;
`

export const FooterButtonLinkContainer = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 12px;
`

export const FooterButtonLink = styled.a`
  color: #00376b;
  text-decoration: none;
`

export const FooterButtonText = styled.div`
  display: block;
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin: -2px 0 -3px;
`

export const LoginFormContainer =  styled.div`
  margin-top: 24px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`

export const ForgotPasswordBlock = styled.a`
  color: #00376b;
  color: rgba(var(--fe0,0,55,107),1);
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
  color: #00376b;
  color: rgba(var(--fe0,0,55,107),1);
  text-decoration: none;
`

export const Article = styled.article`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 32px auto 0;
  max-width: 935px;
  padding-bottom: 32px;
  width: 100%;
`

export const LoginOuterContainer = styled.div`
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;

export const LoginPageForm = styled.form`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const LoginPageFormContainer = styled.div`
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;
`

export const ErrorContainer = styled.div`
  color: #ed4956;
  color: rgba(var(--i30,237,73,86),1);
  margin: 10px 40px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`

export const OuterCoverImageContainer = styled.div`
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);
  background-position: 0 0;
  background-size: 454px 618px;
  -webkit-flex-basis: 454px;
  -ms-flex-preferred-size: 454px;
  flex-basis: 454px;
  height: 618px;
  margin-left: -35px;
  margin-right: -15px;

  @media (max-width: 875px) {
    display: none;
  }
`

export const CoverImageContainer = styled.div`
  margin: 99px 0 0 151px;
  position: relative;
`

export const CoverImage = styled.img`
  height: 427px;
  left: 0;
  position: absolute;
  top: 0;
  width: 240px;
`