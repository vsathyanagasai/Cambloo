import styled, { createGlobalStyle } from 'styled-components';

// Styled components
export const GettingStartedContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  overflow: hidden;
  background-color: #f0f2f5;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://dashboard.codeparrot.ai/api/assets/Z2uAVo6CYQNjI8jJ');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const MainTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1.35px;
  color: #041d34;
  text-align: center;
  margin-bottom: 40px;
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: nowrap;
  width: 100%;
`;

export const StepCard = styled.div`
  width: calc(33.33% - 21.33px);
  height: 507px;
  background: white;
  border-radius: 34px;
  padding: 40px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const StepNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #041d34;
`;

export const StepTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #041d34;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const StepDescription = styled.div`
  font-size: 16px;
  color: #6b7c8e;
  margin-top: 16px;
  p {
    margin: 4px 0;
  }
`;

export const WaitlistButton = styled.button`
  background: #0a64fe;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 40px;

  &:hover {
    background: #0850cc;
  }
`;

// Global Styles for responsiveness
export const GlobalStyles = createGlobalStyle`
  @media (max-width: 1200px) {
    ${StepsContainer} {
      gap: 20px;
    }

    ${StepCard} {
      width: calc(33.33% - 13.33px);
    }
  }

  @media (max-width: 768px) {
    ${MainTitle} {
      font-size: 32px;
    }

    ${StepsContainer} {
      flex-wrap: wrap;
    }

    ${StepCard} {
      width: 100%;
      max-width: 352px;
    }
  }
`;
