import React, { useState } from 'react';
import '../styles/Navbar.css';
import courseLogo from '../assets/images/kurs-logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={courseLogo} alt="logo" className="logo-img" />
        <h1 className="logo-text">Kurs Adı</h1>
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><a href="#about">Haqqımızda</a></li>
        <li><a href="#video-lessons">Video Dərslər</a></li>
        <li><a href="#exams">İmtahanlar</a></li>
        <li><a href="#signup" className="signup">Sign Up</a></li>
        <li><a href="#signin" className="signin">Sign In</a></li>
      </ul>
      <div className={`burger-menu ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu} id="burger-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
