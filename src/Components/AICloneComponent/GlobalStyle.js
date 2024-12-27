import { createGlobalStyle } from 'styled-components';
import { MainContainer, ImageContainer, AIImage, TextContainer, Title, Description, TrainButton } from './StyledComponents';

export const GlobalStyle = createGlobalStyle`
  /* Mobile-specific styles for devices with max-width of 768px */
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

  /* High-Contrast Mode Styles for Forced Colors */
  @media (forced-colors: active) {
    /* Override standard styles to accommodate high-contrast mode */

    ${MainContainer} {
      background-color: Window;
      color: WindowText;
    }

    ${ImageContainer}, ${AIImage}, ${TextContainer}, ${Title}, ${Description}, ${TrainButton} {
      forced-color-adjust: auto;
    }

    /* Example of high-contrast button and link styles */
    ${TrainButton} {
      background-color: ButtonFace;
      color: ButtonText;
      border: 1px solid ButtonText;
    }

    /* You can define other elements' colors and styles as per your needs */
    ${Title} {
      color: HighlightText;
    }

    ${Description} {
      color: ButtonText;
    }
  }
`;
