// src/components/Navbar.jsx

import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Hüsnü Emre Berkay</a> {/* Logonuz veya adınız */}
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Hakkımda</a></li>
        <li><a href="#skills">Yetenekler</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;