import { 
  OuterContainer, 
  Container, 
  SignUpBlock, 
  InstagramLogoHeader
} from './StyledComponentsLibrary'

export default function UserHomePage (props) {
  const user = props.userToken;

  const signOut = () => {
    props.setToken(undefined);
  }

  return (
    <OuterContainer>
      <Container>
        <SignUpBlock>
          <InstagramLogoHeader className='coreSpriteLoggedOutWordmark'>Instagram</InstagramLogoHeader>

          <div>Email: { user.numberOrEmail }</div>
          <div>Full name: { user.fullName}</div>          
          <div>Username: { user.userName }</div>
          <div>Password: { user.password }</div>

          <button onClick={signOut}>Sign out</button>
        </SignUpBlock>
      </Container>
    </OuterContainer>
  )
}