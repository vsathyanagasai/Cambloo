import styled from 'styled-components';

// Footer container and content
export const FooterContainer = styled.footer`
  width: 100%;
  background: #fff;
  padding: 64px 16px 0;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const FooterLeft = styled.div`
  max-width: 323px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 50.79px;
  height: 27px;
`;

export const CompanyName = styled.span`
  margin-left: 19px;
  font-size: 16px;
  font-weight: 600;
  color: #171717;
  letter-spacing: 0.16px;
`;

export const Taglines = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #707070;
    margin: 0;
    line-height: 1.5;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const AppStores = styled.div`
  img {
    width: 241px;
    height: 92px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 140px;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  max-width: 250px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    letter-spacing: 0.14px;
    margin: 0 0 10px;
  }

  a {
    font-size: 14px;
    color: #6f7071;
    text-decoration: none;
    letter-spacing: 0.14px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #E5E5E5;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterPolicies = styled.div`
  display: flex;
  gap: 50px;

  a {
    color: #707070;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.12px;
  }
`;

export const Copyright = styled.div`
  color: #707070;
  font-size: 12px;
  letter-spacing: 0.12px;
`;
