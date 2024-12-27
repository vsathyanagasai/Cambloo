import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 973px;
  height: 257px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    transform: translate(-50%, -10%);
    padding: 10px;
  }
`;

export const MainHeading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: -0.8px;
  color: #041d34;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubHeading = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #515e71;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 10px;
  }
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #515e71;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 10px;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CTAButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: #0a64fe;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #074dcf;
  }

  @media (max-width: 768px) {
    width: 130px;
    height: 40px;
    font-size: 9px;
  }
`;
