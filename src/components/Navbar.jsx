import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>{personalInfo.name.split(' ')[0]}</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a onClick={() => handleNavClick(link.id)}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="navbar-mobile">
          <div className="navbar-toggle" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>

          {toggle && (
            <div className="navbar-mobile-menu">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a onClick={() => handleNavClick(link.id)}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
