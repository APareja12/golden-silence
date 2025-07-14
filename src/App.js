import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Films from './components/Films';
import Actors from './components/Actors';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Films />
        <Actors />
        <History />
      </main>
      <Footer />
    </div>
  );
}

export default App;
