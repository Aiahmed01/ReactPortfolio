import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../index.css'


export default function Footer() {
    return (
      <footer className='text-dark text-center footer-container' style={{ backgroundColor: '#e3f2fd' }} >
        <div className='container mt-5'>
          <div className='row'>
            <div className='col'>
              <a href='https://github.com/Aiahmed01' target='_blank' rel='noopener noreferrer' className='social-icon m-3'>
                <FaGithub size={30} />
              </a>
              <a href='https://www.linkedin.com/in/abdulla-ahmed-85839910a' target='_blank' rel='noopener noreferrer' className='social-icon m-3'>
                <FaLinkedin size={30} />
              </a>
              <a href='mailto:abdullabrhm@gmail.com' className='social-icon m-3'>
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col'>
              <p>&copy; {new Date().getFullYear()} Abdulla Ahmed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }