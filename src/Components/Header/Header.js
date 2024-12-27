import React from 'react';
import {
  FrameContainer,
  Frame300,
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  NavLinks,
  NavLink,
  AuthButtons,
  LoginButton,
  WaitlistButton,
} from './Header.styles';

const Header = () => {
  return (
    <FrameContainer>
      <Frame300>
        <HeaderContainer>
          <LogoContainer>
            <LogoImage
              src="https://dashboard.codeparrot.ai/api/assets/Z2qpEQ16ERs_8H2Z"
              alt="Cambloo Logo"
            />
            <LogoText>cambloo</LogoText>
          </LogoContainer>

          <NavLinks>
            <NavLink href="#about">About us</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#demo">Book a Demo</NavLink>
            <NavLink href="#blog">Blog</NavLink>
          </NavLinks>

          <AuthButtons>
            <LoginButton>Log In</LoginButton>
            <WaitlistButton>Join waitlist</WaitlistButton>
          </AuthButtons>
        </HeaderContainer>
      </Frame300>
    </FrameContainer>
  );
};

export default Header;
