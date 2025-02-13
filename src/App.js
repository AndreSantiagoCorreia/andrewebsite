// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';  // Import the Navbar component
import About from './About/About';    // Import the About component
import Projects from './Projects/Projects';  // Import the Projects component
import Contact from './Contact/Contact';  // Import the Contact component
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar at the top */}
      
      <div className="main-content">
      <Profile />
      </div>

      <Footer />
    </div>
  );
}

export default App;
