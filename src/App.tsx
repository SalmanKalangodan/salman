import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
