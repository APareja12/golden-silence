import React, { useEffect, useState } from 'react';
import { historyData } from '../data/history';

const History = () => {
  const [activeTab, setActiveTab] = useState('timeline');

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
      .querySelectorAll('.history-item, .innovation-card, .figure-card')
      .forEach((item) => {
        observer.observe(item);
      });

    return () => observer.disconnect();
  }, [activeTab]);

  const renderTimeline = () => (
    <div className="timeline-container">
      {historyData.timeline.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item ${event.category}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="timeline-marker">
            <div className="timeline-icon">{event.icon}</div>
            <div className="timeline-year">{event.year}</div>
          </div>
          <div className="timeline-content history-item">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderInnovations = () => (
    <div className="innovations-grid">
      {historyData.innovations.map((innovation, index) => (
        <div
          key={innovation.id}
          className="innovation-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="innovation-icon">{innovation.icon}</div>
          <h3>{innovation.title}</h3>
          <p>{innovation.description}</p>
          <div className="innovators">
            <strong>Key Innovators:</strong>
            <ul>
              {innovation.innovators.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderKeyFigures = () => (
    <div className="figures-grid">
      {historyData.keyFigures.map((figure, index) => (
        <div
          key={figure.id}
          className="figure-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="figure-icon">{figure.icon}</div>
          <h3>{figure.name}</h3>
          <div className="figure-role">{figure.role}</div>
          <p>{figure.contribution}</p>
          <div className="notable-works">
            <strong>Notable Works:</strong>
            <ul>
              {figure.notableWorks.map((work, idx) => (
                <li key={idx}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="history-section" id="history">
      <div className="history-container">
        <h2 className="section-title">The Silent Film Era</h2>

        <div className="history-intro">
          <p>
            From 1895 to 1929, silent films dominated cinema, creating a
            universal language of visual storytelling that transcended cultural
            and linguistic barriers. This era produced timeless masterpieces and
            established the fundamental techniques of filmmaking that continue
            to influence cinema today.
          </p>
        </div>

        <div className="history-tabs">
          <button
            className={activeTab === 'timeline' ? 'tab-active' : ''}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
          <button
            className={activeTab === 'innovations' ? 'tab-active' : ''}
            onClick={() => setActiveTab('innovations')}
          >
            Innovations
          </button>
          <button
            className={activeTab === 'figures' ? 'tab-active' : ''}
            onClick={() => setActiveTab('figures')}
          >
            Key Figures
          </button>
        </div>

        <div className="history-content">
          {activeTab === 'timeline' && renderTimeline()}
          {activeTab === 'innovations' && renderInnovations()}
          {activeTab === 'figures' && renderKeyFigures()}
        </div>
      </div>
    </section>
  );
};

export default History;
