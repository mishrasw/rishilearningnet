import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/NavbarStyles.css'
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
     <div className="logo-container">
        <img src={Logo} alt="MyLogo" className="logo" />
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        &#9776;
      </button>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>Maths</li>
        </Link>
        <Link to="/contact" className="services">
          <li>Reading</li>
        </Link>
        <Link to="/games" className="contact">
          <li>Games</li>
        </Link>
      </ul>
 </nav>

  );
};

export default Navbar;