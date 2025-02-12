// src/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';  // Import specific icons

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a 
          href="https://github.com/AndreSantiagoCorreia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-button github"
        >
          <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
        </a>
        <a 
          href="https://www.linkedin.com/in/AndreSantiagoCorreia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-button linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
        </a>
        {/*
        <a 
          href="https://www.instagram.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-button instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        */}
        {/* 
        <a 
        href="https://twitter.com/your-username" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-button twitter"
        >
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        */}

      </div>
    </footer>
  );
}

export default Footer;
