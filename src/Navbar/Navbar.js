// src/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll add styles for the navbar here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
