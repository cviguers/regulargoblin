import React, { useState } from 'react';
import Nav from './Nav'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}

