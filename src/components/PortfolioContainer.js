import React, { useState } from 'react';
import Nav from './Nav'
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer'


export default function PortfolioContainer() {

  return (
    <div>

      <Nav />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

