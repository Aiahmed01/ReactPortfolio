import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Initialize Bootstrap Navbar Toggle on mount
    const toggle = document.getElementById('navbarNavAltMarkup');
    const btnToggle = document.getElementById('navbarBtnToggle');

    if (toggle && btnToggle) {
      btnToggle.addEventListener('click', () => {
        toggle.classList.toggle('show');
      });
    }
  }, []);

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
              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
                <a className="nav-link " aria-current="page" href="./index.html">
                  HOME
                </a>
              </button>
              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
                <a className="nav-link" href="#">
                  ABOUT ME
                </a>
              </button>
              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
                <a className="nav-link" href="#">
                  PORTFOLIO
                </a>
              </button>
              <button type="button" className="btn btn-outline-primary m-2 btn-sm">
                <a className="nav-link" href={<contact/>}>
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
