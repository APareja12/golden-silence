import React from 'react';
import heroBackground from '../images/hero-background.png';

const Hero = () => {
  const scrollToFilms = () => {
    document.getElementById('films').scrollIntoView({ behavior: 'smooth' });
  };

  // Set CSS custom property for the background
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--hero-background',
      `url(${heroBackground})`
    );
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Golden Silence</h1>
        <p>
          Discover the magic of silent cinema - where stories were told through
          pure visual poetry and the universal language of human emotion.
        </p>
        <button className="cta-button" onClick={scrollToFilms}>
          Explore Films
        </button>
      </div>
    </section>
  );
};

export default Hero;
