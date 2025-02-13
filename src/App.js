// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use BrowserRouter
import Navbar from './Navbar/Navbar';  // Import the Navbar component
import About from './About/About';    // Import the About component
import Projects from './Projects/Projects';  // Import the Projects component
import Contact from './Contact/Contact';  // Import the Contact component
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add the Navbar at the top */}
        
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
