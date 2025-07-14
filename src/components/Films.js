import React, { useEffect } from 'react';
import { filmsData } from '../data/films';

const Films = () => {
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

    document.querySelectorAll('.film-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="films-section" id="films">
      <h2 className="section-title">Featured Films</h2>
      <div className="films-grid">
        {filmsData.map((film, index) => (
          <div
            key={film.id}
            className="film-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="film-poster">{film.poster}</div>
            <h3 className="film-title">{film.title}</h3>
            <div className="film-info">
              <span>{film.year}</span>
              <span>{film.genre}</span>
              <span>{film.duration}</span>
            </div>
            <p className="film-description">{film.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Films;
