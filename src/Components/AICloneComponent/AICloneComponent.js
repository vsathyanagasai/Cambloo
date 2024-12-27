import React from 'react';
import { MainContainer, ImageContainer, AIImage, TextContainer, Title, Description, TrainButton } from './StyledComponents';
import { GlobalStyle } from './GlobalStyle';
import AIClone from '../../assets/AICloneComponent.gif';

const AICloneComponent = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <ImageContainer>
        <AIImage 
          src={AIClone} 
          alt="AI and Human Interaction" 
        />
      </ImageContainer>

      <TextContainer>
        <Title>Your AI Personalized Clone</Title>
        <Description>
          Train your AI clone to learn and adapt with <br />
          you. Get feedback and recommendations <br />
          to boost your progress.
        </Description>
        <TrainButton>Train Your Clone</TrainButton>
      </TextContainer>
    </MainContainer>
  );
};

export default AICloneComponent;
