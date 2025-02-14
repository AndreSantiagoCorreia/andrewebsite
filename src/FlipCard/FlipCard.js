import React from 'react';
import './FlipCard.css'; // Import the CSS file for styling

function FlipCard({ frontContent, backContent }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <button className="contact-button">{frontContent}</button>
        </div>
        <div className="flip-card-back">
          <button className="contact-button">{backContent}</button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;