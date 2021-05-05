import { 
  Footer, 
  ContainerInsideFooter,
  FooterButtonLink,
  FooterButtonText,
  FooterButtonLinkContainer
} from './StyledComponentsLibrary';
import React from 'react';


export default function InstagramFooter() {

  const footerButtonsMap = [
    {
      label: 'About',
      link: 'https://about.instagram.com/'
    },
    {
      label: 'Blog',
      link: 'https://about.instagram.com/blog/'
    },
    {
      label: 'Jobs',
      link: 'https://www.instagram.com/about/jobs/'
    },
    {
      label: 'Help',
      link: 'https://help.instagram.com/'
    },
    {
      label: 'API',
      link: 'https://www.instagram.com/developer/'
    },
    {
      label: 'Privacy',
      link: 'https://www.instagram.com/legal/privacy/'
    },
    {
      label: 'Terms',
      link: 'https://www.instagram.com/legal/terms/'
    },
    {
      label: 'Top Accounts',
      link: 'https://www.instagram.com/directory/profiles/'
    },
    {
      label: 'Hashtags',
      link: 'https://www.instagram.com/directory/hashtags/'
    },
    {
      label: 'Locations',
      link: 'https://www.instagram.com/explore/locations/'
    }
  ];

  const renderFooterButtons = () => {
    const FooterButtons = footerButtonsMap.map(footerButton => {
      return <FooterButtonLinkContainer>
        <FooterButtonLink href={footerButton.link}>
          <FooterButtonText>{footerButton.label}</FooterButtonText>
        </FooterButtonLink>
      </FooterButtonLinkContainer>
    });

    return <React.Fragment>{FooterButtons}</React.Fragment>
  }

  return (
    <Footer>
      <ContainerInsideFooter>
        { renderFooterButtons() }
      </ContainerInsideFooter>
    </Footer>
  );
}