import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { FooterContainer, FooterContent, FooterLeft, LogoSection, Logo, CompanyName, Taglines, SocialIcons, AppStores, FooterLinks, ProductColumn, FooterBottom, FooterPolicies, Copyright } from './FooterStyles';

// Global styles to ensure no overflow and proper box-sizing for the page
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box; /* Prevent padding from affecting width */
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`;

const Footer = ({ 
  companyName = "cambloo",
  tagline1 = "Unlock your potential with a personal AI clone,",
  tagline2 = "guiding you to achieve more every day.",
  copyright = "@ cambloo Inc.2024"
}) => {
  return (
    <>
      <GlobalStyles />
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
            <LogoSection>
              <Logo src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j5" alt="Logo" />
              <CompanyName>{companyName}</CompanyName>
            </LogoSection>
            <Taglines>
              <p>{tagline1}</p>
              <p>{tagline2}</p>
            </Taglines>
            <SocialIcons>
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j6" alt="Twitter" />
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j7" alt="LinkedIn" />
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j8" alt="Facebook" />
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j9" alt="YouTube" />
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j-" alt="Discord" />
            </SocialIcons>
            <AppStores>
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2uNW46CYQNjI8j_" alt="App Stores" />
            </AppStores>
          </FooterLeft>

          <FooterLinks>
            <ProductColumn>
              <h3>Product</h3>
              <a href="#">Courses</a>
              <a href="#">AI Mentorship</a>
              <a href="#">Live Sessions</a>
            </ProductColumn>
            <ProductColumn>
              <h3>Product</h3>
              <a href="#">Courses</a>
              <a href="#">AI Mentorship</a>
            </ProductColumn>
            <ProductColumn>
              <h3>Product</h3>
              <a href="#">Courses</a>
              <a href="#">AI Mentorship</a>
            </ProductColumn>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <FooterPolicies>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of Conditions</a>
          </FooterPolicies>
          <Copyright>{copyright}</Copyright>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
