import React, { useEffect } from 'react';
import { actorsData } from '../data/actors';

const Actors = () => {
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

    document.querySelectorAll('.actor-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="actors-section" id="actors">
      <h2 className="section-title">Legendary Actors</h2>
      <div className="actors-grid">
        {actorsData.map((actor, index) => (
          <div
            key={actor.id}
            className="actor-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="actor-photo">{actor.photo}</div>
            <h3 className="actor-name">{actor.name}</h3>
            <p className="actor-bio">{actor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actors;
