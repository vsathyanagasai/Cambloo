import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import HeroSection from './Components/HeroSection/HeroSection.js';
import AICloneComponent from './Components/AICloneComponent/AICloneComponent.js';
import ParentContainer from './Components/ParentContainer/ParentContainer.js';
import GettingStarted from './Components/GettingStarted/GettingStarted.js';
import LearningPlatform  from './Components/LearningPlatform/LearningPlatform.js';
import Footer from './Components/Footer/Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AICloneComponent />
      <ParentContainer />
      <GettingStarted />
      <LearningPlatform />
      <Footer />
    </div>
  );
};

export default App;
