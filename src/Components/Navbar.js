import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Css/Styling.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={isMenuOpen ? "nav-links show" : "nav-links"}>
          <li><Link to="/"><span>HOME</span></Link></li>
          <li><Link to="/About"><span>ABOUT</span></Link></li>
          <li><Link to="/resources"><span>RESOURCES</span></Link></li>
          <li><Link to="/Consultation"><span>CONSULTATION</span></Link></li>
          <li><Link to="/Login"><span>LOGIN</span></Link></li>
          <li><Link to="/notifications"><span>NOTIFICATIONS</span></Link></li>
          <li><Link to="/Contact"><span>CONTACT</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
