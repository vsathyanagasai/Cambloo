import React from 'react';
import PropTypes from 'prop-types';
import {
  HeroContainer,
  MainHeading,
  SubHeading,
  Description,
  CTAContainer,
  CTAButton,
} from './HeroSection.styled'; // Import styled components

const HeroSection = ({
  mainHeading = 'Introducing Cambloo AI✨',
  subHeading = "Cambloo AI's Multi-Dimensional Lens sees beyond the surface",
  description = 'It guides you towards a brighter future.',
  buttonText = 'Get Started for Free',
}) => {
  return (
    <HeroContainer>
      <MainHeading>{mainHeading}</MainHeading>
      <SubHeading>{subHeading}</SubHeading>
      <Description>{description}</Description>
      <CTAContainer>
        <CTAButton>{buttonText}</CTAButton>
      </CTAContainer>
    </HeroContainer>
  );
};

// PropTypes for validation
HeroSection.propTypes = {
  mainHeading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
};

export default HeroSection;
