import React, { useEffect } from 'react';
import { aboutData } from '../data/about';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    document
      .querySelectorAll('.about-text, .feature-card, .stat-card')
      .forEach((item) => {
        observer.observe(item);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="about-hero-content">
            <h2 className="section-title">{aboutData.title}</h2>
            <p className="about-subtitle">{aboutData.subtitle}</p>
          </div>
          <div className="about-decorative-frame">
            <div className="frame-corner frame-top-left"></div>
            <div className="frame-corner frame-top-right"></div>
            <div className="frame-corner frame-bottom-left"></div>
            <div className="frame-corner frame-bottom-right"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-text-section">
            <div className="about-text fade-in">
              <div className="text-block">
                <h3 className="text-title">The Golden Age of Visual Poetry</h3>
                <p>{aboutData.mainContent.intro}</p>
              </div>

              <div className="text-block">
                <h3 className="text-title">Our Mission</h3>
                <p>{aboutData.mainContent.mission}</p>
              </div>

              <div className="text-block">
                <h3 className="text-title">A Lasting Legacy</h3>
                <p>{aboutData.mainContent.legacy}</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="about-stats">
            <div className="stats-grid">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="about-features">
            <h3 className="features-title">What We Offer</h3>
            <div className="features-grid">
              {aboutData.features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="about-quote">
          <div className="quote-content">
            <blockquote>
              "The silent film is the purest form of cinematic expression—where
              every frame must tell a story, every gesture must convey emotion,
              and every shadow must serve the narrative."
            </blockquote>
            <cite>— The Art of Silent Cinema</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
