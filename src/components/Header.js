import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="header-content">
        <a href="#home" className="logo">
          Golden Silence
        </a>
        <nav>
          <ul className={mobileMenuOpen ? 'mobile-open' : ''}>
            <li>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#films" onClick={(e) => scrollToSection(e, 'films')}>
                Films
              </a>
            </li>
            <li>
              <a href="#actors" onClick={(e) => scrollToSection(e, 'actors')}>
                Actors
              </a>
            </li>
            <li>
              <a href="#history" onClick={(e) => scrollToSection(e, 'history')}>
                History
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
