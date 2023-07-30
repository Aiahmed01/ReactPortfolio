import React, { useEffect } from 'react';

export default function Navbar({ currentPage, handlePageChange }) {


  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Abdulla'sSpace
          </a>
          <button
            id="navbarBtnToggle"
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                         {/* ----------------------------------------------------------------------- */}
              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
                <a onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#home" >
                  HOME
                </a>
              </button>
                         {/* ----------------------------------------------------------------------- */}

              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
              <a onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#About" >
                  ABOUT ME
                </a>
              </button>
                         {/* ----------------------------------------------------------------------- */}

              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
              <a onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#Portfolio" >
                  PORTFOLIO
                </a>
              </button>
                         {/* ----------------------------------------------------------------------- */}

              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
              <a onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#Contact" >
                  CONTACT
                </a>
              </button>
         
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
