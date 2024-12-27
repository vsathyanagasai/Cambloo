import React from 'react';
import { 
  GettingStartedContainer, 
  BackgroundImage, 
  Content, 
  MainTitle, 
  StepsContainer, 
  StepCard, 
  StepNumber, 
  StepTitle, 
  StepDescription, 
  WaitlistButton, 
  GlobalStyles
} from './GettingStartedStyles';

const GettingStarted = ({ title = "How to start using Cambloo easily today" }) => {
  const steps = [
    {
      number: "1",
      title: "Register for free",
      description: [
        "Sign up online or in our app for",
        "Quick, simple, and free",
        "Start your AI-journey now",
        "No hidden fees or extra steps."
      ],
      image: "https://dashboard.codeparrot.ai/api/assets/Z2uAVY6CYQNjI8jG"
    },
    {
      number: "2",
      title: "Customize your learning",
      description: [
        "Choose learning preferences",
        "AI adjusts to your personal needs",
        "Customized content for learner",
        "Learn faster with targeted."
      ],
      image: "https://dashboard.codeparrot.ai/api/assets/Z2uAVY6CYQNjI8jH"
    },
    {
      number: "3",
      title: "Get real-time feedback",
      description: [
        "Receive real-time feedback",
        "AI adapts as you progress."
      ],
      image: "https://dashboard.codeparrot.ai/api/assets/Z2uAVY6CYQNjI8jI"
    }
  ];

  return (
    <>
      <GlobalStyles />
      <GettingStartedContainer>
        <BackgroundImage />
        <Content>
          <MainTitle>{title}</MainTitle>
          
          <StepsContainer>
            {steps.map((step, index) => (
              <StepCard key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>
                  {step.title.split(' ').map((word, i) => (
                    <span key={i}>{word} </span>
                  ))}
                </StepTitle>
                <StepDescription>
                  {step.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </StepDescription>
              </StepCard>
            ))}
          </StepsContainer>

          <WaitlistButton>
            Join Waitlist Now
          </WaitlistButton>
        </Content>
      </GettingStartedContainer>
    </>
  );
};

export default GettingStarted;
