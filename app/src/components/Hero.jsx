// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Library</h1>
        <p className="hero-subtitle">Explore a world of knowledge and adventure</p>
        <a href="#search" className="hero-button">Start Searching</a>
      </div>
    </div>
  );
};

export default Hero;
