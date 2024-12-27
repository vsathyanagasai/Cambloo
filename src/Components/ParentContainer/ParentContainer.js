import React from "react";
import imageSrc1 from '../../assets/Explore.png';
import imageSrc2 from '../../assets/Unlock.png';
import { OuterContainer, Section, ImageContainer, ContentContainer, Title, Description, CtaText } from './StyledComponents';

const ParentContainer = ({
  title1 = "Explore courses built",
  title2 = "for your unique path",
  description1 = "Get AI-driven course recommendations",
  description2 = "for your career goals.",
  ctaText = "Start learning now.",
  secondaryTitle1 = "Unlock your AI",
  secondaryTitle2 = "powered Journey",
  secondaryDescription1 = "Cambloo's AI guides your learning",
  secondaryDescription2 = "Achieve your goals with ease.",
  secondaryCtaText = "Start your journey now.",
}) => {
  return (
    <OuterContainer>
      {/* First Section */}
      <Section>
        <ImageContainer>
          <img src={imageSrc1} alt="Developer coding" />
        </ImageContainer>
        <ContentContainer>
          <Title>{title1}<br />{title2}</Title>
          <Description>
            <p>{description1}</p>
            <p>{description2}</p>
            <CtaText>{ctaText}</CtaText>
          </Description>
        </ContentContainer>
      </Section>

      {/* Second Section */}
      <Section reverse>
        <ContentContainer>
          <Title>{secondaryTitle1}<br />{secondaryTitle2}</Title>
          <Description>
            <p>{secondaryDescription1}</p>
            <p>{secondaryDescription2}</p>
            <CtaText>{secondaryCtaText}</CtaText>
          </Description>
        </ContentContainer>
        <ImageContainer>
          <img src={imageSrc2} alt="AI Journey" />
        </ImageContainer>
      </Section>
    </OuterContainer>
  );
};

export default ParentContainer;
