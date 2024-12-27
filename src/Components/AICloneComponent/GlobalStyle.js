import { createGlobalStyle } from 'styled-components';
import { MainContainer, ImageContainer, AIImage, TextContainer, Title, Description, TrainButton } from './StyledComponents';

export const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    ${MainContainer} {
      margin-top: 20px;
    }

    ${ImageContainer} {
      margin-bottom: 15px;
    }

    ${AIImage} {
      width: 90%;
      height: auto;
    }

    ${TextContainer} {
      margin-left: 10px;
      margin-right: 10px;
    }

    ${Title} {
      font-size: 1.5em;
    }

    ${Description} {
      font-size: 0.9em;
    }

    ${TrainButton} {
      width: 100%;
    }
  }
`;
