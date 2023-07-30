import React, {useState} from 'react';

import Navbar from './Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import About from './pages/About';
import Portofolio from './pages/Portfolio';

function PortfolioHandler() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portofolio />;
        }
        return <Contact />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
       {renderPage()}
        <Footer />
</>
  );
}

export default PortfolioHandler;
