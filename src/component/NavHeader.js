// src/components/NavHeader.js
import React, { useState } from 'react';
import './NavHeader.css';
import play from '../assets/play.png'
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-header">
      <div className="nav-header-content">
        <div className="logo-header">
          <a href='/'>
          <img className='logo-img' src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li style={{ cursor: 'pointer' }}>
              <RouterLink to="/" onClick={closeMenu}>Home</RouterLink>
            </li>
            <li style={{ cursor: 'pointer' }}>
              <RouterLink to="/" onClick={closeMenu}>About Us</RouterLink>
            </li>
            <li style={{ cursor: 'pointer' }}>
              <RouterLink to="/" onClick={closeMenu}>Contact Us</RouterLink>
            </li>
            <li style={{ cursor: 'pointer' }}>
              <RouterLink to="/privacy" onClick={closeMenu}>Privacy Policy</RouterLink>
            </li>
          </ul>
        </nav>
        <a href="https://play.google.com/store/apps/details?id=com.civilnotesapp&hl=en">
          <img class="play-img" src={play} alt="Download Civil Notes App" />
        </a>
        {menuOpen ? (
          <FaTimes className="hamburger-icon" onClick={toggleMenu} />
        ) : (
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default NavHeader;
