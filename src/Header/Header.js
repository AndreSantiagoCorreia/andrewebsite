import React from 'react';
import './Header.css'; // Import the CSS file

function Header({title}) {
  return (
    <header className="main-header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;