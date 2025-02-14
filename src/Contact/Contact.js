import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand 
import './Contact.css'; // Import the CSS file
import Header from '../Header/Header';
import FlipCard from '../FlipCard/FlipCard';

function Contact() {
  return (
    <section id="contact">
      <Header title="Contact"/>
      <div className="button-container">
      <FlipCard
          frontContent={<FontAwesomeIcon icon={faEnvelope} size="4x" />}
          backContent="example@email.com"
        />

      <FlipCard
          frontContent={<FontAwesomeIcon icon={faLinkedin} size="4x" />}
          backContent="example@email.com"
        />

      <FlipCard
          frontContent={<FontAwesomeIcon icon={faGithub} size="4x" />}
          backContent="example@email.com"
        />

      <FlipCard
          frontContent={<FontAwesomeIcon icon={faInstagram} size="4x" />}
          backContent="example@email.com"
        />
      </div>
    </section>
  );
}

export default Contact;