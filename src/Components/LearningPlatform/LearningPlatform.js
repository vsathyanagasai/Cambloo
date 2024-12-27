import React from 'react';
import UpComing from '../../assets/UpComing.png';
import Join from '../../assets/Join.png';
import Employment from '../../assets/Employment.png';
import Personalized from '../../assets/Personalized.png';
import AIBot from '../../assets/AIBot.png';
import {
  LearningPlatformContainer,
  Header,
  Title,
  CardsGrid,
  Card,
  CardContent,
  CardImage,
  LearnMoreButton,
  CTASection,
  GetStartedButton,
  BotIcon,
} from './LearningPlatformStyles';

const LearningPlatform = ({
  title1 = "Elevate your learning and",
  title2 = "career with AI-driven tools",
  ctaText = "Ready to supercharge your AI-powered learning path?"
}) => {
  const cards = [
    {
      title: "Upcoming Live Sessions",
      description: "Join live sessions with industry leaders, explore trending topics, build skills, and connect with professionals from all around the world. Sign up today!",
      image: UpComing,
    },
    {
      title: "Join Our Community",
      description: "Connect with peers, exchange insights, and grow together in a supportive, engaging, and vibrant learning environment.",
      image: Join,
    },
    {
      title: "Employment Marketplace",
      description: "Unlock exclusive job offers, gain, and match your skills with top employers. Start your next opportunity today!",
      image: Employment,
    },
    {
      title: "Personalized Mentorship",
      description: "Access personalized mentorship from seasoned professionals to help you achieve your career aspirations faster.",
      image: Personalized,
    },
  ];

  return (
    <LearningPlatformContainer>
      <Header>
        <Title>
          <span>{title1}</span>
          <span>{title2}</span>
        </Title>
      </Header>

      <CardsGrid>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <LearnMoreButton>Learn more</LearnMoreButton>
            </CardContent>
            <CardImage>
              <img src={card.image} alt={card.title} />
            </CardImage>
          </Card>
        ))}
      </CardsGrid>

      <CTASection>
        <h2>{ctaText}</h2>
        <GetStartedButton>Get Started For Free</GetStartedButton>
        <BotIcon>
          <img src={AIBot} alt="AI Bot" />
        </BotIcon>
      </CTASection>
    </LearningPlatformContainer>
  );
};

export default LearningPlatform;
