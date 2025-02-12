// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';  // Import the Navbar component
import About from './About/About';    // Import the About component
import Projects from './Projects/Projects';  // Import the Projects component
import Contact from './Contact/Contact';  // Import the Contact component
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar at the top */}
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate developer. Here you can find information about my projects and skills.
        </p>
      </header>
      
      {/* Include the other components */}
      <About />
      <Projects />
      <Contact />
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
