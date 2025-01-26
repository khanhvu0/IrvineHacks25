import React from 'react';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Landing;