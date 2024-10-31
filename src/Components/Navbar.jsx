import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="history" smooth={true} duration={500}>
            History
          </Link>
        </li>
        <li>
          <Link to="celebration" smooth={true} duration={500}>
            Celebration
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
