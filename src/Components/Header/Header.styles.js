import styled from 'styled-components';

export const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  margin: 0;
`;

export const Frame300 = styled.div`
  width: 500px;
  height: 42.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  background-color: rgba(240, 244, 249, 0.95);
  border-radius: 16.3px;
  margin-top: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImage = styled.img`
  height: 32.5px;
  object-fit: contain;
  border-radius: 16.3px;
`;

export const LogoText = styled.span`
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  color: #000;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  font-family: Inter;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: -0.16px;
  text-align: left;
  color: #000;
  text-decoration: none;
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const LoginButton = styled.span`
  font-family: Inter;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: -0.16px;
  text-align: left;
  color: #000;
  cursor: pointer;
`;

export const WaitlistButton = styled.button`
  width: 66px;
  height: 21.5px;
  font-family: Inter;
  font-size: 7.5px;
  font-weight: 500;
  color: #fff;
  background-color: #0a64fe;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
