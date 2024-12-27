import styled from 'styled-components';

export const LearningPlatformContainer = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
  letter-spacing: -1.35px;
  color: #041d34;
  line-height: 1.2;

  span {
    display: block;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 60px;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  flex: 1;
  padding-right: 16px;
`;

export const CardImage = styled.div`
  width: 75px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LearnMoreButton = styled.button`
  background: none;
  border: none;
  color: #0066ff;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
`;

export const CTASection = styled.div`
  background: #041d34;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  color: white;
  position: relative;
  margin-top: 60px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

export const GetStartedButton = styled.button`
  background: #0066ff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0052cc;
  }
`;

export const BotIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 24px auto 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
